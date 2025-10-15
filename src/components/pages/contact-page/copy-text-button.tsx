"use client";

import { useEffect, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function CopyTextButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isTooltipOpen) {
      setIsCopied(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  }, [isTooltipOpen]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setIsTooltipOpen(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setIsTooltipOpen(false);
        setIsCopied(false);
        timeoutRef.current = null;
      }, 1500);
    } catch (err) {
      console.error("Kopieren fehlgeschlagen:", err);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip open={isTooltipOpen} onOpenChange={setIsTooltipOpen}>
        <TooltipTrigger asChild>
          <span onClick={copyToClipboard} className="underline cursor-pointer">
            {text}
          </span>
        </TooltipTrigger>
        <TooltipContent side="top" align="center">
          {isCopied ? "Text kopiert!" : "Klicken zum Kopieren"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
