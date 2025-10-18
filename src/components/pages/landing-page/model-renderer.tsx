"use client";

import React, {
  forwardRef,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import {
  AnimationAction,
  AnimationClip,
  AnimationMixer,
  AnimationMixerEventMap,
  Group,
  LoopOnce,
} from "three";
import { a, useSpring } from "@react-spring/three";

type GLTFResult = {
  scene: Group;
  nodes?: Record<string, unknown>;
  materials?: Record<string, unknown>;
  animations: AnimationClip[];
};

interface ModelProps {
  url: string;
}

interface AnimProps {
  scale: number;
  rotation: [number, number, number];
}

useGLTF.preload("/3dmodels/SecondChar.glb");

const Model = forwardRef<Group, ModelProps>(({ url }, ref) => {
  const gltf = useGLTF(url) as GLTFResult;
  const mixer = useRef<AnimationMixer | null>(null);
  const idleAction = useRef<AnimationAction | null>(null);
  const waveAction = useRef<AnimationAction | null>(null);
  const lookAroundAction = useRef<AnimationAction | null>(null);
  const currentActionRef = useRef<AnimationAction | null>(null);

  const idleCounter = useRef(0);

  // Cross-Fading Funktion
  const fadeToAction = useCallback(
    (targetAction: AnimationAction, duration = 0.5) => {
      if (!mixer.current || !targetAction) return;

      const currentAction = currentActionRef.current;

      if (targetAction === currentAction) {
        return;
      }

      if (currentAction) {
        currentAction.crossFadeTo(targetAction, duration, true).play();
      } else {
        targetAction.reset().play();
      }

      currentActionRef.current = targetAction;
    },
    []
  );

  useEffect(() => {
    if (gltf.animations && gltf.animations.length > 0) {
      mixer.current = new AnimationMixer(gltf.scene);

      const idleClip = AnimationClip.findByName(
        gltf.animations,
        "New-Idle-Animation"
      );
      if (idleClip) {
        idleAction.current = mixer.current.clipAction(idleClip);
        idleAction.current.loop = LoopOnce; // Nur einmal abspielen
        idleAction.current.clampWhenFinished = true; // Position am Ende halten
        idleAction.current.enabled = true;
      }

      const waveClip = AnimationClip.findByName(
        gltf.animations,
        "New-Waving-Animation"
      );
      if (waveClip) {
        waveAction.current = mixer.current.clipAction(waveClip);
        waveAction.current.loop = LoopOnce;
        waveAction.current.clampWhenFinished = true;
        waveAction.current.enabled = true;
      }

      const lookAroundClip = AnimationClip.findByName(
        gltf.animations,
        "New-LookingAround-Mixamo-Animation"
      );
      if (lookAroundClip) {
        lookAroundAction.current = mixer.current.clipAction(lookAroundClip);
        lookAroundAction.current.loop = LoopOnce;
        lookAroundAction.current.clampWhenFinished = true;
        lookAroundAction.current.enabled = true;
      }

      const playIdle = () => {
        if (idleAction.current) {
          idleAction.current.reset(); // Stelle sicher, dass sie von vorne startet
          fadeToAction(idleAction.current, 0.3);
        }
      };

      const playWave = () => {
        if (waveAction.current) {
          waveAction.current.reset(); // Auch hier immer vom Anfang
          fadeToAction(waveAction.current, 0.3);
        }
      };

      const playLookAround = () => {
        if (lookAroundAction.current) {
          lookAroundAction.current.reset(); // Auch hier immer vom Anfang
          fadeToAction(lookAroundAction.current, 0.3);
        }
      };

      const onFinished = (e: AnimationMixerEventMap["finished"]) => {
        console.log("finito", e.action);
        const action = e.action;

        if (action === idleAction.current) {
          idleCounter.current++;
          if (idleCounter.current >= 2 && Math.random() < 0.5) {
            idleCounter.current = 0;

            if (Math.random() < 0.5) {
              playWave();
            } else playLookAround();
          } else {
            playIdle();
          }
        } else {
          playIdle();
        }
      };

      mixer.current.addEventListener("finished", onFinished);

      // Start mit Waving
      playWave();

      return () => {
        mixer.current?.removeEventListener("finished", onFinished);
        currentActionRef.current = null;
      };
    }
  }, [gltf, fadeToAction]);

  useFrame((_, delta) => mixer.current?.update(delta));

  // Eintrittsanimation mit react-spring
  const { scale, rotation } = useSpring<AnimProps>({
    from: { scale: 0, rotation: [0.3, -0.8, 0] },
    to: { scale: 1, rotation: [0.17795, -0.39958, 0.01294] },
    config: { mass: 1, tension: 60, friction: 18 },
  });

  gltf.scene.position.set(0, -0.9, 0);
  gltf.scene.traverse((child) => {
    child.castShadow = true;
    child.receiveShadow = true;
  });

  return (
    // @ts-expect-error Typescript has a problem with the type of the rotation when using useSpring
    <a.group scale={scale} rotation={rotation}>
      <primitive ref={ref} object={gltf.scene} dispose={null} />
    </a.group>
  );
});

Model.displayName = "3dModel";

interface ModelViewerProps {
  modelUrl?: string;
  width?: number;
  height?: number;
}

const DEFAULT_SIZE = 500;

export default function ModelRenderer({
  modelUrl = "/3dmodels/SecondChar.glb",
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
}: ModelViewerProps) {
  const modelRef = useRef<Group>(null);
  const [canvasVisible, showCanvas] = useState(true);

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e: BeforeUnloadEvent) => {
    e.returnValue = "";
    showCanvas(false);
  };

  return (
    <div
      style={{ width: width, height: height, backgroundColor: "transparent" }}
    >
      {canvasVisible && (
        <Canvas
          shadows
          camera={{ position: [0, 0, 2], fov: 50 }}
          style={{ background: "transparent" }}
          gl={{ alpha: true }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
            const originalClear = gl.clear.bind(gl);
            gl.clear = (...args) => {
              gl.setClearColor(0x000000, 0);
              originalClear(...args);
            };
          }}
        >
          {/* Lichter */}
          <ambientLight intensity={0.2} color="#ffffff" />
          <directionalLight
            position={[2, 2, 3]} // vorne-links
            intensity={0.3}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <directionalLight
            position={[1, 2, 2]} // vorne-rechts für Aufhellung
            intensity={0.6}
          />
          <pointLight position={[-2, 1, 2]} intensity={0.4} />

          <Suspense fallback={null}>
            <Model ref={modelRef} url={modelUrl} />
            <Environment preset="city" background={false} />
          </Suspense>
          {/* Debugging */}
          {/* <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
        /> */}
        </Canvas>
      )}
    </div>
  );
}
