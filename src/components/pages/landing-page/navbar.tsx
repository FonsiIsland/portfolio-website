"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import logoSmallDark from "@/../public/logo/logo-small-dark.png";
import logoSmallLight from "@/../public/logo/logo-small-light.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Bell, Clock, Github, Languages, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import NavLinks from "@/components/pages/landing-page/nav-links";
import { Badge } from "@/components/ui/badge";
import IconWithBadge from "@/components/utils/icon-with-badge";
import ThemeToggler from "@/components/themes/theme-toggler";
import LanguageSwitcher from "@/components/languages/language-switcher";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pageLinks = [
    { href: "/", label: "Home" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/news", label: "News" },
  ];

  if (!mounted) return null;

  return (
    <header className="mx-auto w-7xl absolute top-0 left-0 right-0 h-[80px] flex flex-row justify-between items-center bg-background text-card-foreground-v-3 text-[16px]">
      <div className="flex-1 flex justify-start">
        <Link href="/">
          <p className="text-foreground text-5xl font-jersey10">
            Stefan <span className="text-unique2">.</span>
          </p>
        </Link>
      </div>

      <div className="flex-1 flex justify-center">
        <NavLinks links={pageLinks} />
      </div>

      <div className="flex-1 flex flex-row gap-8 justify-end">
        <div className="hover:text-card-foreground-v-1 size-6 transition-colors">
          <Link href="https://github.com/FonsiIsland" passHref={true}>
            <Github />
            <span className="sr-only">Github Link</span>
          </Link>
        </div>

        <LanguageSwitcher />

        <AnimatedThemeToggler className="hover:text-card-foreground-v-1 size-6 transition-colors" />

        {/* <ThemeToggler /> */}

        {/* <NavLinks links={authLinks} /> */}
      </div>
    </header>
  );
};
export default Navbar;
