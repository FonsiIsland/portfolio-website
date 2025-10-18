"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

function ScrollArea({
  className,
  shadowStyle = "full",
  shadowTopPos = 0,
  shadowBottomPos = 0,
  showScrollbar = true,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root> & {
  shadowStyle?: "full" | "radial";
  shadowTopPos?: number;
  shadowBottomPos?: number;
  showScrollbar?: boolean;
}) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [showTopShadow, setShowTopShadow] = React.useState(false);
  const [showBottomShadow, setShowBottomShadow] = React.useState(false);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const atTop = el.scrollTop === 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

    setShowTopShadow(!atTop);
    setShowBottomShadow(!atBottom);
  };

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      {/* Shadow oben */}
      {shadowStyle === "full" ? (
        <div
          className={cn(
            "pointer-events-none absolute left-0 right-0 h-8 bg-gradient-to-b from-bg to-transparent z-10 transition-opacity duration-300",
            showTopShadow ? "opacity-100" : "opacity-0"
          )}
          style={{ top: shadowTopPos }}
        />
      ) : (
        <div
          className={cn(
            "pointer-events-none absolute left-0 right-0 h-8 z-10 transition-opacity duration-300",
            showTopShadow ? "opacity-100" : "opacity-0"
          )}
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.0) 70%)",
            top: shadowTopPos,
          }}
        />
      )}

      {/* Shadow unten */}
      {shadowStyle === "full" ? (
        <div
          className={cn(
            "pointer-events-none absolute left-0 right-0 h-8 bg-gradient-to-t from-bg to-transparent z-10 transition-opacity duration-300",
            showBottomShadow ? "opacity-100" : "opacity-0"
          )}
          style={{ bottom: shadowBottomPos }}
        />
      ) : (
        <div
          className={cn(
            "pointer-events-none absolute left-0 right-0 h-8 z-10 transition-opacity duration-300",
            showBottomShadow ? "opacity-100" : "opacity-0"
          )}
          style={{
            background:
              "radial-gradient(ellipse at center bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.0) 70%)",
            bottom: shadowBottomPos,
          }}
        />
      )}

      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
        ref={scrollRef}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar showScrollbar={showScrollbar} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  showScrollbar = true,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> & {
  showScrollbar?: boolean;
}) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className={cn(
          "relative flex-1 rounded-full",
          showScrollbar ? "bg-text/10" : "bg-transparent"
        )}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollArea, ScrollBar };
