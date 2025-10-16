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
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export const IconCloudReworked = forwardRef(function IconCloudReworked(
  { icons, images }: IconCloudReworkedProps,
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

  // --- Externe Methode: focusIcon(index) ---
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
      const offscreen = document.createElement("canvas");
      offscreen.width = 120;
      offscreen.height = 120;
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return offscreen;

      if (images) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = items[index] as string;
        img.onload = () => {
          offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
          offCtx.beginPath();
          offCtx.arc(60, 60, 60, 0, Math.PI * 2);
          offCtx.clip();
          offCtx.drawImage(img, 0, 0, 120, 120);
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
  }, [icons, images]);

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
        x: x * 100,
        y: y * 100,
        z: z * 100,
        scale: 1,
        opacity: 1,
        id: i,
      });
    }
    setIconPositions(newIcons);
  }, [icons, images]);

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

      // smooth inertia
      if (!isDragging && !targetRotation) {
        rotationRef.current.y += velocityRef.current.x;
        rotationRef.current.x += velocityRef.current.y;

        velocityRef.current.x *= 0.95;
        velocityRef.current.y *= 0.95;
      }

      // smooth focus rotation
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

        if (icons || images) {
          if (iconCanvasesRef.current[i] && imagesLoadedRef.current[i]) {
            ctx.drawImage(iconCanvasesRef.current[i], -20, -20, 40, 40);
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
  }, [iconPositions, isDragging, targetRotation, icons, images]);

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
