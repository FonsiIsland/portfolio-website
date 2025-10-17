"use client";

// ModelViewer.tsx
import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  TransformControls,
  useGLTF,
} from "@react-three/drei";
import {
  AnimationAction,
  AnimationClip,
  AnimationMixer,
  Group,
  LoopOnce,
} from "three";
import { gt } from "zod";

// Typisierung für das Ergebnis von useGLTF, falls du auf Nodes / Materials zugreifen willst
type GLTFResult = {
  scene: Group;
  nodes?: Record<string, any>;
  materials?: Record<string, any>;
  animations: AnimationClip[];
};

interface ModelProps {
  url: string;
}

const Model = React.forwardRef<Group, ModelProps>(({ url }, ref) => {
  const gltf = useGLTF(url) as GLTFResult;
  const mixer = useRef<AnimationMixer | null>(null);
  const idleAction = useRef<AnimationAction | null>(null);
  const waveAction = useRef<AnimationAction | null>(null);
  const currentActionRef = useRef<AnimationAction | null>(null);

  const idleCounter = useRef(0);

  // Cross-Fading Funktion
  const fadeToAction = useCallback(
    (targetAction: AnimationAction, duration = 0.3) => {
      if (!mixer.current || !targetAction) return;

      const currentAction = currentActionRef.current; // Lese den aktuellen Action-Zustand über Ref

      if (targetAction === currentAction) {
        // Wenn die Ziel-Action bereits läuft, tue nichts
        return;
      }

      if (currentAction) {
        // Führt den Cross-Fade von der aktuellen zur Ziel-Action durch
        currentAction
          // 'true' stoppt die ausgehende Action am Ende des Fades.
          .crossFadeTo(targetAction, duration, true)
          .play();
      } else {
        // Initialer Start ohne Fade
        targetAction.reset().play();
      }

      // Setze die neue Action als aktuell im Ref
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

      const onFinished = (e: any) => {
        const action = e.action;

        if (action === idleAction.current) {
          idleCounter.current++;
          // Mit Wahrscheinlichkeit 20% Wave abspielen
          if (idleCounter.current >= 2 && Math.random() < 0.5) {
            idleCounter.current = 0;
            playWave();
          } else {
            playIdle();
          }
        } else if (action === waveAction.current) {
          playIdle();
        }
      };

      mixer.current.addEventListener("finished", onFinished);

      // Start mit Idle
      playIdle();

      return () => {
        mixer.current?.removeEventListener("finished", onFinished);
        currentActionRef.current = null;
      };
    }
  }, [gltf, fadeToAction]);

  useFrame((_, delta) => mixer.current?.update(delta));

  gltf.scene.rotation.set(
    0.1779506151620011,
    -0.39958057398753655,
    0.012940429542385008
  );
  gltf.scene.position.set(0, -0.9, 0);

  gltf.scene.traverse((child) => {
    child.castShadow = true;
    child.receiveShadow = true;
  });

  return <primitive ref={ref} object={gltf.scene} dispose={null} />;
});

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
  //

  return (
    <div style={{ width: width, height: height }}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 2], fov: 50 }}
        style={{ background: "transparent" }}
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
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/3dmodels/SecondChar.glb");
