import { cn } from "@/lib/utils";

export function EllipticShadowTop({ visible }: { visible: boolean }) {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 right-0 pointer-events-none z-10 transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0"
      )}
      style={{ height: "32px" }}
    >
      <svg
        width="100%"
        height="32"
        viewBox="0 0 100 32"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C50,0 50,0 100,32 L100,32 L0,32 Z"
          fill="rgba(0,0,0,0.15)"
        />
      </svg>
    </div>
  );
}

/* Unten */
export function EllipticShadowBottom({ visible }: { visible: boolean }) {
  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 right-0 pointer-events-none z-10 transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0"
      )}
      style={{ height: "32px" }}
    >
      <svg
        width="100%"
        height="32"
        viewBox="0 0 100 32"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C50,32 50,32 100,0 L100,0 L0,0 Z"
          fill="rgba(0,0,0,0.15)"
        />
      </svg>
    </div>
  );
}
