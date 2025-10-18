"use client";

import { IconCloudReworked } from "@/components/magicui/icon-cloud-reworked";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const slugs = [
  "javascript",
  "typescript",
  "react",
  "html5",
  "css3",
  "electron",
  "nextjs",
  "express",
  "nodedotjs",
  "csharp",
  "java",
  "vs-code",
  "visual-studio",
  "android-studio",
  "github",
  "figma",
  "firebase",
  "git",
  "prisma",
  "json",
  "postman",
];

export function TechStackCloud() {
  const { resolvedTheme } = useTheme();
  const [images, setImages] = useState<string[]>([]);
  const [, setIndex] = useState<number>(0);
  const cloudRef = useRef<{ focusIcon: (index: number) => void }>(null);

  useEffect(() => {
    setImages(
      slugs.map((slug) => `/brand-icons/png/${resolvedTheme}/${slug}.png`)
    );
  }, [resolvedTheme]);

  useEffect(() => {
    if (images.length === 0) return;
    cloudRef.current?.focusIcon(0);

    const interval = setInterval(() => {
      setIndex((prev: number) => {
        const next = prev < images.length - 1 ? prev + 1 : 0;
        cloudRef.current?.focusIcon(next);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [cloudRef, images, setIndex]);

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloudReworked ref={cloudRef} images={images} sizeScale={1.6} />
    </div>
  );
}
