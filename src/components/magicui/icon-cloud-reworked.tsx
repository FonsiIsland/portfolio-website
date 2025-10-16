"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { renderToString } from "react-dom/server";

interface Icon {
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
  id: number;
}

interface IconCloudReworkedProps {
  icons?: React.ReactNode[];
  images?: string[];
  sizeScale?: number; // 🔹 optionaler Prop, um die Gesamtgröße zu skalieren
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export const IconCloudReworked = forwardRef(function IconCloudReworked(
  { icons, images, sizeScale = 1 }: IconCloudReworkedProps,
  ref
) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [iconPositions, setIconPositions] = useState<Icon[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [targetRotation, setTargetRotation] = useState<{
    x: number;
    y: number;
    startX: number;
    startY: number;
    distance: number;
    startTime: number;
    duration: number;
  } | null>(null);

  const rotationRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);
  const iconCanvasesRef = useRef<HTMLCanvasElement[]>([]);
  const imagesLoadedRef = useRef<boolean[]>([]);

  // --- Settings ---
  const BASE_ICON_SIZE = 60;
  const resolution =
    typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  const ICON_SIZE = BASE_ICON_SIZE * resolution;
  const RADIUS = 100 * sizeScale; // 🔹 Sphärenradius skalierbar
  const CANVAS_BASE_SIZE = 400 * sizeScale; // 🔹 Canvasgröße

  // --- focusIcon() extern aufrufbar ---
  useImperativeHandle(ref, () => ({
    focusIcon: (index: number) => {
      const icon = iconPositions[index];
      if (!icon) return;

      const targetX = -Math.atan2(
        icon.y,
        Math.sqrt(icon.x * icon.x + icon.z * icon.z)
      );
      const targetY = Math.atan2(icon.x, icon.z);

      const currentX = rotationRef.current.x;
      const currentY = rotationRef.current.y;
      const distance = Math.sqrt(
        Math.pow(targetX - currentX, 2) + Math.pow(targetY - currentY, 2)
      );

      const duration = Math.min(2000, Math.max(800, distance * 1000));

      setTargetRotation({
        x: targetX,
        y: targetY,
        startX: currentX,
        startY: currentY,
        distance,
        startTime: performance.now(),
        duration,
      });
    },
  }));

  // --- Icons / Images vorbereiten ---
  useEffect(() => {
    if (!icons && !images) return;
    const items = icons || images || [];
    imagesLoadedRef.current = new Array(items.length).fill(false);

    const newIconCanvases = items.map((item, index) => {
      const ICON_DISPLAY_SIZE = BASE_ICON_SIZE; // z. B. 80px auf der Sphäre
      const ICON_HIGH_RES = ICON_DISPLAY_SIZE * 4; // 3x höher aufgelöst

      const offscreen = document.createElement("canvas");
      offscreen.width = ICON_HIGH_RES;
      offscreen.height = ICON_HIGH_RES;
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return offscreen;
      offCtx.scale(
        ICON_HIGH_RES / ICON_DISPLAY_SIZE,
        ICON_HIGH_RES / ICON_DISPLAY_SIZE
      );

      if (images) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = items[index] as string;
        img.onload = () => {
          offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
          // offCtx.beginPath();
          // offCtx.arc(
          //   ICON_SIZE / 2,
          //   ICON_SIZE / 2,
          //   ICON_SIZE / 2,
          //   0,
          //   Math.PI * 2
          // );
          // offCtx.clip();
          offCtx.drawImage(img, 0, 0, ICON_SIZE, ICON_SIZE);
          imagesLoadedRef.current[index] = true;
        };
      } else {
        const svgString = renderToString(item as React.ReactElement);
        const img = new Image();
        img.src = "data:image/svg+xml;base64," + btoa(svgString);
        img.onload = () => {
          offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
          offCtx.drawImage(img, 0, 0);
          imagesLoadedRef.current[index] = true;
        };
      }
      return offscreen;
    });

    iconCanvasesRef.current = newIconCanvases;
  }, [icons, images, ICON_SIZE]);

  // --- Sphere generieren ---
  useEffect(() => {
    const items = icons || images || [];
    const newIcons: Icon[] = [];
    const numIcons = items.length || 20;

    const offset = 2 / numIcons;
    const increment = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;

      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;

      newIcons.push({
        x: x * RADIUS,
        y: y * RADIUS,
        z: z * RADIUS,
        scale: 1,
        opacity: 1,
        id: i,
      });
    }
    setIconPositions(newIcons);
  }, [icons, images, RADIUS]);

  // // --- Canvas schärfer machen (Retina) ---
  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;
  //   const ctx = canvas.getContext("2d");
  //   if (!ctx) return;

  //   canvas.width = CANVAS_BASE_SIZE * resolution;
  //   canvas.height = CANVAS_BASE_SIZE * resolution;
  //   canvas.style.width = `${CANVAS_BASE_SIZE}px`;
  //   canvas.style.height = `${CANVAS_BASE_SIZE}px`;
  //   ctx.scale(resolution, resolution);
  // }, [CANVAS_BASE_SIZE, resolution]);

  // --- Maussteuerung ---
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
    velocityRef.current = { x: 0, y: 0 };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;

      rotationRef.current = {
        x: rotationRef.current.x + deltaY * 0.005,
        y: rotationRef.current.y + deltaX * 0.005,
      };

      velocityRef.current = { x: deltaX * 0.002, y: deltaY * 0.002 };
      setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // --- Animation ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // inertia
      if (!isDragging && !targetRotation) {
        rotationRef.current.y += velocityRef.current.x;
        rotationRef.current.x += velocityRef.current.y;

        velocityRef.current.x *= 0.95;
        velocityRef.current.y *= 0.95;
      }

      // focus rotation easing
      if (targetRotation) {
        const elapsed = performance.now() - targetRotation.startTime;
        const progress = Math.min(1, elapsed / targetRotation.duration);
        const eased = easeOutCubic(progress);
        rotationRef.current = {
          x:
            targetRotation.startX +
            (targetRotation.x - targetRotation.startX) * eased,
          y:
            targetRotation.startY +
            (targetRotation.y - targetRotation.startY) * eased,
        };
        if (progress >= 1) setTargetRotation(null);
      }

      // render icons
      iconPositions.forEach((icon, i) => {
        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);

        const rotatedX = icon.x * cosY - icon.z * sinY;
        const rotatedZ = icon.x * sinY + icon.z * cosY;
        const rotatedY = icon.y * cosX + rotatedZ * sinX;

        const scale = (rotatedZ + 200) / 300;
        const opacity = Math.max(0.2, Math.min(1, (rotatedZ + 150) / 200));

        ctx.save();
        ctx.translate(
          canvas.width / 2 + rotatedX,
          canvas.height / 2 + rotatedY
        );

        ctx.scale(scale, scale);

        ctx.globalAlpha = opacity;
        // ctx.filter = `brightness(${opacity * 100}%)`; // reduziert Helligkeit, keine echte Transparenz

        if (icons || images) {
          if (iconCanvasesRef.current[i] && imagesLoadedRef.current[i]) {
            ctx.drawImage(
              iconCanvasesRef.current[i],
              -BASE_ICON_SIZE / 2,
              -BASE_ICON_SIZE / 2,
              BASE_ICON_SIZE,
              BASE_ICON_SIZE
            );
          }
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, 20, 0, Math.PI * 2);
          ctx.fillStyle = "#4444ff";
          ctx.fill();
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.font = "16px Arial";
          ctx.fillText(`${icon.id + 1}`, 0, 0);
        }

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [
    iconPositions,
    isDragging,
    targetRotation,
    icons,
    images,
    CANVAS_BASE_SIZE,
  ]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={800}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="rounded-lg cursor-grab active:cursor-grabbing"
    />
  );
});
