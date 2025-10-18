"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ModifiedScrollArea = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      setAtTop(el.scrollTop === 0);
      setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight);
    };

    el.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="pointer-events-none absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/5 to-transparent"
        animate={{ opacity: atTop ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/5 to-transparent"
        animate={{ opacity: atBottom ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />

      <div
        ref={scrollRef}
        className={cn(
          className,
          "overflow-y-auto",
          "[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:rounded-full"
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};
export default ModifiedScrollArea;
