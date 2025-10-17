"use client";

// ModelViewer.tsx
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  TransformControls,
  useGLTF,
} from "@react-three/drei";
import { AnimationClip, AnimationMixer, Group, LoopOnce } from "three";
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
  const mixer = useRef<AnimationMixer>(null);
  const idleAction = useRef<any>(null);
  const waveAction = useRef<any>(null);
  const idleCounter = useRef(0);

  useEffect(() => {
    if (gltf.animations && gltf.animations.length > 0) {
      mixer.current = new AnimationMixer(gltf.scene);

      // Idle Animation
      const idleClip = AnimationClip.findByName(
        gltf.animations,
        "New-Idle-Animation"
      );
      if (idleClip) idleAction.current = mixer.current.clipAction(idleClip);

      // Wave Animation
      const waveClip = AnimationClip.findByName(
        gltf.animations,
        "New-Waving-Animation"
      );
      if (waveClip) {
        waveAction.current = mixer.current.clipAction(waveClip);
        waveAction.current.loop = LoopOnce;
        waveAction.current.clampWhenFinished = true;
      }

      const playIdle = () => {
        if (!idleAction.current) return;
        idleAction.current.reset();
        idleAction.current.play();
      };

      const playWave = () => {
        if (!waveAction.current) return;
        waveAction.current.reset();
        waveAction.current.play();
      };

      // Listener für fertige Animationen
      mixer.current.addEventListener("finished", (e) => {
        console.log("finisehd ");
        const action = e.action;
        if (action === idleAction.current) {
          idleCounter.current++;
          if (idleCounter.current >= 1) {
            idleCounter.current = 0;
            if (Math.random() < 0.9) {
              playWave();
              return;
            }
          }
          playIdle(); // nächste Idle
        } else if (action === waveAction.current) {
          playIdle(); // nach Wave wieder Idle starten
        }
      });

      // Start
      playIdle();
    }
  }, [gltf]);

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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (modelRef.current) setReady(true);
  }, [modelRef.current]);

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
