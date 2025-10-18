"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Languages, Menu } from "lucide-react";
import NavLinks from "@/components/pages/landing-page/nav-links";
import LanguageSwitcher from "@/components/languages/language-switcher";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useTranslations } from "next-intl";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
    <header className="mx-auto md:max-w-full lg:max-w-7xl px-5 xl:px-0 absolute top-0 left-0 right-0 h-[80px] flex flex-row justify-between items-center z-50 text-text/60 text-[16px]">
      <div className="flex-1 flex justify-start">
        <Link href="/">
          <p className="text-text text-2xl md:text-4xl lg:text-5xl font-jersey10">
            Stefan <span className="text-primary">.</span>
          </p>
        </Link>
      </div>
      <div className="flex-1 flex justify-center max-lg:hidden">
        <NavLinks links={pageLinks} />
      </div>
      <div className="flex-1 flex flex-row gap-8 justify-end max-lg:hidden">
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
        <LanguageSwitcher
          triggerComp={
            <div className="hover:text-text size-6 transition-colors">
              <Languages />
              <span className="sr-only">Switch Language</span>
            </div>
          }
        />
        <AnimatedThemeToggler className="hover:text-text size-6 transition-colors" />
      </div>
      <div className="lg:hidden">
        <div className="hover:text-text size-6 transition-colors">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="flex flex-row justify-between items-center pr-10">
                  <Link href="/">
                    <p className="text-text text-2xl font-normal font-jersey10">
                      Stefan <span className="text-primary">.</span>
                    </p>
                  </Link>
                  <div className="flex flex-row gap-5">
                    <div className="hover:text-text size-5 transition-colors">
                      <Link
                        href="https://github.com/FonsiIsland"
                        target="_blank"
                        passHref={true}
                      >
                        <Github size={20} />
                        <span className="sr-only">Github Link</span>
                      </Link>
                    </div>
                    <LanguageSwitcher
                      triggerComp={
                        <div className="hover:text-text size-5 transition-colors">
                          <Languages size={20} />
                          <span className="sr-only">Switch Language</span>
                        </div>
                      }
                    />
                    <AnimatedThemeToggler
                      className="hover:text-text size-5 transition-colors"
                      iconStyle="size-5"
                    />
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex justify-center pt-8">
                    <NavLinks
                      sheetCloseWrapper
                      links={pageLinks}
                      className="flex-col gap-8 text-center text-xl w-[200px]"
                    />
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
