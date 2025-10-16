"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bell, Clock, Github, Languages, Sun } from "lucide-react";
import NavLinks from "@/components/pages/landing-page/nav-links";
import LanguageSwitcher from "@/components/languages/language-switcher";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("components.navbar");

  useEffect(() => {
    setMounted(true);
  }, []);

  const pageLinks = [
    { href: "/", label: t("navHome") },
    { href: "/skills", label: t("navSkills") },
    { href: "/projects", label: t("navProjects") },
    { href: "/contact", label: t("navContact") },
    { href: "/news", label: t("navNews") },
  ];

  if (!mounted) return null;

  return (
    <header className="mx-auto w-7xl absolute top-0 left-0 right-0 h-[80px] flex flex-row justify-between items-center bg-background text-text/60 text-[16px]">
      <div className="flex-1 flex justify-start">
        <Link href="/">
          <p className="text-text text-5xl font-jersey10">
            Stefan <span className="text-primary">.</span>
          </p>
        </Link>
      </div>

      <div className="flex-1 flex justify-center">
        <NavLinks links={pageLinks} />
      </div>

      <div className="flex-1 flex flex-row gap-8 justify-end">
        <div className="hover:text-text size-6 transition-colors">
          <Link
            href="https://github.com/FonsiIsland"
            target="_blank"
            passHref={true}
          >
            <Github />
            <span className="sr-only">Github Link</span>
          </Link>
        </div>

        <LanguageSwitcher />

        <AnimatedThemeToggler className="hover:text-text size-6 transition-colors" />

        {/* <ThemeToggler /> */}

        {/* <NavLinks links={authLinks} /> */}
      </div>
    </header>
  );
};
export default Navbar;
