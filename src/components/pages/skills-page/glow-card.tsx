import { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import { Card } from "@/components/ui/card";

interface GlowCardProps {
  /** Animation Variants von Framer */
  variants: Variants;
  /** Grundfarbe des Glow-Effekts */
  glowColor?: string;
  /** Transparenz des Glow-Effekts (0–1) */
  glowOpacity?: number;
  /** Größe (Radius) des Glow-Kreises in px */
  glowRadius?: number;
  /** Hintergrundfarbe oder Klasse der Card */
  backgroundClass?: string;
  /** Skalierung beim Hover */
  hoverScale?: number;
  /** Abrundung der Card */
  rounded?: string;
  /** Optionaler Inhalt innerhalb der Card */
  children?: React.ReactNode;
  /** Zusätzliche Klassen */
  className?: string;
}

export default function GlowCard({
  variants,
  glowColor = "rgba(217, 128, 13, 1)", // Cyan
  glowOpacity = 0.15,
  glowRadius = 560,
  hoverScale = 1.05,
  rounded = "rounded-xl",
  children,
  className = "",
}: GlowCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion Values für Mausposition
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Sanftes Nachziehen der Bewegung
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  // Glow-Farbe mit konfigurierbarer Transparenz
  const dynamicGlowColor = useTransform([smoothX, smoothY], () =>
    glowColor.replace(/[\d.]+\)$/g, `${glowOpacity})`)
  );

  // Positionsstrings für das Gradient
  const sx = useTransform(smoothX, (v) => `${v}`);
  const sy = useTransform(smoothY, (v) => `${v}`);

  // Hintergrundgradient (Glow)
  const background = useTransform(
    [sx, sy, dynamicGlowColor],
    ([latestX, latestY, color]) =>
      `radial-gradient(${glowRadius}px circle at ${latestX}px ${latestY}px, ${color}, transparent 40%)`
  );

  // Mausbewegung relativ zur Card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${rounded} flex justify-center items-center cursor-pointer overflow-hidden ${className}`}
      variants={variants}
      whileHover={{
        scale: hoverScale,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onMouseMove={handleMouseMove}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glow-Effekt */}
      <motion.div
        className={`absolute inset-0 ${rounded} pointer-events-none`}
        style={{ background }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Content */}
      <Card className={`w-full h-full ${rounded}`}>{children}</Card>
    </motion.div>
  );
}
