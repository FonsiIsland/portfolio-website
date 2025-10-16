"use client";

import { IconCloud } from "@/components/magicui/icon-cloud";
import { IconCloudReworked } from "@/components/magicui/icon-cloud-reworked";
import { m } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

// const slugs = [
//   "typescript",
//   "javascript",
//   // "dart",
//   "java",
//   "react",
//   // "flutter",
//   // "android",
//   "html5",
//   "css3",
//   "nodedotjs",
//   "express",
//   "nextdotjs",
//   "prisma",
//   // "amazonaws",
//   // "postgresql",
//   "firebase",
//   // "nginx",
//   "vercel",
//   // "testinglibrary",
//   // "jest",
//   // "cypress",
//   "docker",
//   "git",
//   // "jira",
//   "github",
//   // "gitlab",
//   "visualstudiocode",
//   "androidstudio",
//   // "sonarqube",
//   "figma",
// ];

// const slugs = [
//   "android-studio",
//   "csharp",
//   "css3",
//   "electron",
//   "express",
//   "figma",
//   "firebase",
//   "git",
//   "github",
//   "html5",
//   "java",
//   "javascript",
//   "nextjs",
//   "nodedotjs",
//   "prisma",
//   "react",
//   "typescript",
//   "visual-studio",
//   "vs-code",
// ];

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

  // const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);
  const [images, setImages] = useState<string[]>([]);

  const [index, setIndex] = useState(0);
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
      setIndex((prev) => {
        const next = prev < images.length - 1 ? prev + 1 : 0;
        cloudRef.current?.focusIcon(next);
        console.log("Selecting: ", images[next]);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [cloudRef, images]);

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      {/* <IconCloud images={images} /> */}
      <IconCloudReworked ref={cloudRef} images={images} sizeScale={1.6} />
    </div>
  );
}
