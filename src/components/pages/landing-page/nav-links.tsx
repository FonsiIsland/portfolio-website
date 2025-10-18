"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Fragment, useId } from "react";
import { SheetClose } from "@/components/ui/sheet";

const NavLinks = ({
  links,
  className,
  sheetCloseWrapper = false,
}: {
  links: { href: string; label: string }[];
  className?: string;
  sheetCloseWrapper?: boolean;
}) => {
  const pathname = usePathname();
  const id = useId();

  const [SheetCloseWrapper, shetCloseWrapperProps] = sheetCloseWrapper
    ? [SheetClose, { asChild: true }]
    : [Fragment, {}];

  return (
    <div className={cn("relative flex gap-8", className)}>
      {links.map(({ href, label }, _index) => {
        const isActive =
          href === "/"
            ? pathname.length === 3
            : pathname === href ||
              pathname.startsWith(href) ||
              pathname.includes(href);

        return (
          <SheetCloseWrapper {...shetCloseWrapperProps} key={_index}>
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
          </SheetCloseWrapper>
        );
      })}
    </div>
  );
};

export default NavLinks;
