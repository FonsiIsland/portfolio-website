"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useId } from "react";

const NavLinks = ({ links }: { links: { href: string; label: string }[] }) => {
  const pathname = usePathname();
  const id = useId();

  return (
    <div className="relative flex gap-8">
      {links.map(({ href, label }) => {
        const isActive =
          href === "/"
            ? pathname.length === 3
            : pathname === href ||
              pathname.startsWith(href) ||
              pathname.includes(href);

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "relative pb-1 transition-colors",
              isActive ? "text-text" : "hover:text-text"
            )}
          >
            {label}
            {isActive && (
              <motion.div
                layoutId={"underline-" + id}
                className="absolute left-1 bottom-0 h-[2px] w-[calc(100%-8px)] bg-text"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
