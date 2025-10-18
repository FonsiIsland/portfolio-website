"use client";

import { GripVerticalIcon } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import {
  createContext,
  useContext,
  useState,
  type ComponentProps,
  type HTMLAttributes,
  type MouseEventHandler,
  type TouchEventHandler,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/* ---------------------- Context Setup ---------------------- */

type ImageComparisonContextType = {
  sliderPosition: number;
  setSliderPosition: (pos: number) => void;
  motionSliderPosition: MotionValue<number>;
  mode: "hover" | "drag";
};

const ImageComparisonContext = createContext<
  ImageComparisonContextType | undefined
>(undefined);

const useImageComparisonContext = () => {
  const context = useContext(ImageComparisonContext);
  if (!context) {
    throw new Error(
      "useImageComparisonContext must be used within an <ImageComparison>"
    );
  }
  return context;
};

/* ---------------------- Main Comparison Component ---------------------- */

export type ComparisonProps = HTMLAttributes<HTMLDivElement> & {
  mode?: "hover" | "drag";
  onDragStart?: () => void;
  onDragEnd?: () => void;
};

export const Comparison = ({
  className,
  mode = "drag",
  onDragStart,
  onDragEnd,
  ...props
}: ComparisonProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const motionValue = useMotionValue(50);
  const motionSliderPosition = useSpring(motionValue, {
    bounce: 0,
    duration: 0,
  });
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (domRect: DOMRect, clientX: number) => {
    if (!isDragging && mode === "drag") return;
    const x = clientX - domRect.left;
    const percentage = Math.min(Math.max((x / domRect.width) * 100, 0), 100);
    motionValue.set(percentage);
    setSliderPosition(percentage);
  };

  const handleMouseDrag: MouseEventHandler<HTMLDivElement> = (e) =>
    handleDrag(e.currentTarget.getBoundingClientRect(), e.clientX);

  const handleTouchDrag: TouchEventHandler<HTMLDivElement> = (e) =>
    handleDrag(
      e.currentTarget.getBoundingClientRect(),
      e.touches[0]?.clientX ?? 0
    );

  const startDrag = () => {
    if (mode === "drag") {
      setIsDragging(true);
      onDragStart?.();
    }
  };

  const endDrag = () => {
    if (mode === "drag") {
      setIsDragging(false);
      onDragEnd?.();
    }
  };

  return (
    <ImageComparisonContext.Provider
      value={{ sliderPosition, setSliderPosition, motionSliderPosition, mode }}
    >
      <div
        aria-label="Comparison slider"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={sliderPosition}
        className={cn(
          "relative isolate w-full select-none overflow-hidden",
          className
        )}
        onMouseDown={startDrag}
        onMouseLeave={endDrag}
        onMouseMove={handleMouseDrag}
        onMouseUp={endDrag}
        onTouchStart={startDrag}
        onTouchMove={handleTouchDrag}
        onTouchEnd={endDrag}
        role="slider"
        tabIndex={0}
        {...props}
      />
    </ImageComparisonContext.Provider>
  );
};

/* ---------------------- Comparison Item ---------------------- */

export type ComparisonItemProps = ComponentProps<typeof motion.div> & {
  position: "left" | "right";
};

export const ComparisonItem = ({
  className,
  position,
  ...props
}: ComparisonItemProps) => {
  const { motionSliderPosition } = useImageComparisonContext();

  const clipPath = useTransform(motionSliderPosition, (value) =>
    position === "left"
      ? `inset(0 0 0 ${value}%)`
      : `inset(0 ${100 - value}% 0 0)`
  );

  return (
    <motion.div
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
      role="img"
      style={{ clipPath }}
      {...props}
    />
  );
};

/* ---------------------- Comparison Handle ---------------------- */

export type ComparisonHandleProps = ComponentProps<typeof motion.div> & {
  children?: ReactNode;
};

export const ComparisonHandle = ({
  className,
  children,
  ...props
}: ComparisonHandleProps) => {
  const { motionSliderPosition, mode } = useImageComparisonContext();
  const left = useTransform(motionSliderPosition, (value) => `${value}%`);

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "absolute top-0 z-50 flex h-full w-10 -translate-x-1/2 items-center justify-center",
        mode === "drag" && "cursor-grab active:cursor-grabbing",
        className
      )}
      role="presentation"
      style={{ left }}
      {...props}
    >
      {children ?? (
        <>
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-secondary" />
          {mode === "drag" && (
            <div className="z-50 flex items-center justify-center rounded-sm bg-secondary px-0.5 py-1">
              <GripVerticalIcon className="h-4 w-4 select-none text-text" />
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};
