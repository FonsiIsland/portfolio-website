"use client";

import { TechStackCloud } from "@/components/pages/landing-page/tech-stack-cloud";
import GlowCard from "@/components/pages/skills-page/glow-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { DoodleArrowIcon } from "@/components/pages/skills-page/doodle-arrow-icon";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import cardVariants from "@/lib/constants";

const AppsPage = () => {
  const t = useTranslations("pages.skillsPage");
  const tCard = useTranslations("components.card");

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardKeysLeft = ["card-0", "card-1", "card-2"];
  const cardKeysRight = ["card-3", "card-4", "card-5"];

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="mx-auto w-7xl h-screen flex py-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full flex flex-row justify-between"
        >
          <div className="w-[440px] flex flex-col justify-around">
            {cardKeysLeft.map((key, index) => (
              <GlowCard
                key={key}
                variants={cardVariants}
                className={`w-sm h-36 ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}
              >
                <CardHeader>
                  <CardTitle>{t(`${key}.title`)}</CardTitle>
                  <CardDescription>{t(`${key}.description`)}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Beispiel: Nur für die Projekte-Card einen Link */}
                  {key === "card-1" && (
                    <Link
                      href="/projects"
                      className="absolute bottom-2 right-3 h-6 transition-colors flex flex-row gap-1 items-center text-text/60 hover:text-accent"
                    >
                      <p className="text-sm">{tCard("more")}</p>
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </CardContent>
              </GlowCard>
            ))}
          </div>
          <div className="w-[440px] flex flex-col justify-around">
            {cardKeysRight.map((key, index) => (
              <GlowCard
                key={key}
                variants={cardVariants}
                className={`w-sm h-36 ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
              >
                <CardHeader>
                  <CardTitle>{t(`${key}.title`)}</CardTitle>
                  <CardDescription>{t(`${key}.description`)}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Beispiel: Nur für die Projekte-Card einen Link */}
                  {key === "card-1" && (
                    <Link
                      href="/projects"
                      className="absolute bottom-2 right-3 h-6 transition-colors flex flex-row gap-1 items-center text-text/60 hover:text-accent"
                    >
                      <p className="text-sm">{tCard("more")}</p>
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </CardContent>
              </GlowCard>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-1/2 size-[400px]">
        <TechStackCloud />
      </div>

      <div className="absolute top-[37%] left-[37%]">
        <DoodleArrowIcon />
      </div>
    </div>
  );
};
export default AppsPage;
