"use client";

import * as React from "react";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const ThemeToggler = () => {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="hover:text-card-foreground-v-1 size-6 transition-colors">
          <Sun className="block dark:hidden" />
          <Moon className="absolute hidden dark:block" />
          <span className="sr-only">Toggle theme</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col gap-1">
        <DropdownMenuItem
          className={cn(theme === "light" ? "bg-accent" : "")}
          onClick={() => setTheme("light")}
        >
          <Sun />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(theme === "dark" ? "bg-accent" : "")}
          onClick={() => setTheme("dark")}
        >
          <Moon />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(theme === "system" ? "bg-accent" : "")}
          onClick={() => setTheme("system")}
        >
          <SunMoon />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggler;
