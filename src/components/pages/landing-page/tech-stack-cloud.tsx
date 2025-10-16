"use client";

import { IconCloud } from "@/components/magicui/icon-cloud";
import { IconCloudReworked } from "@/components/magicui/icon-cloud-reworked";
import { m } from "framer-motion";
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

const slugs = [
  "android-studio",
  "csharp",
  "css3",
  "electron",
  "express",
  "figma",
  "firebase",
  "git",
  "github",
  "html5",
  "java",
  "javascript",
  "nextjs",
  "nodedotjs",
  "prisma",
  "react",
  "typescript",
  "visual-studio",
  "vs-code",
];

export function TechStackCloud() {
  // const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

  const images = slugs.map((slug) => `/brand-icons/png/dark/${slug}.png`);

  const [index, setIndex] = useState(0);

  const cloudRef = useRef<{ focusIcon: (index: number) => void }>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev < images.length - 1 ? prev + 1 : 0;
        cloudRef.current?.focusIcon(next);
        console.log("Selecting: ", images[next]);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images, cloudRef]);

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      {/* <IconCloud images={images} /> */}
      <IconCloudReworked ref={cloudRef} images={images} />
    </div>
  );
}
