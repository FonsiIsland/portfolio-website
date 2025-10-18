"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import GlowCard from "../skills-page/glow-card";
import {
  ArrowRight,
  CalendarDaysIcon,
  Code2,
  Github,
  Languages,
  LucideIcon,
  Moon,
  Rocket,
  Smartphone,
} from "lucide-react";

import Image from "next/image";
import cardVariants from "@/lib/constants";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import DynamicLucideIcon from "@/components/utils/lucide-icon";
import { BadgeName, BadgeRenderer } from "./project-badges";
import { safeT } from "@/components/utils/safe-translation";

interface ProjectCardProps {
  titleKey: string;
  descriptionKey: string;
  date: string;
  imageUrl: string;
  badges: BadgeName[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  titleKey,
  descriptionKey,
  date,
  imageUrl,
  badges,
}) => {
  const t = useTranslations("pages.projectsPage.article.project");
  const tCard = useTranslations("components.card");

  return (
    <GlowCard
      variants={cardVariants}
      className={`w-[880px] h[350px]`}
      rounded="rounded-4xl"
    >
      <CardContent>
        <div className="w-full h-64 relative rounded-2xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={safeT(t, titleKey)}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-6 right-6 h-fit transition-colors flex flex-row gap-1 items-center text-text/60 hover:text-accent">
          <p className="text-sm">{tCard("read-more")}</p>
          <ArrowRight size={16} />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row justify-between">
            <p>{safeT(t, titleKey)}</p>
            <div className="flex gap-1 items-center">
              <CalendarDaysIcon size={16} className="text-text/60" />
              <p className="text-sm font-light text-text/60">{date}</p>
            </div>
          </div>
        </CardTitle>
        <CardDescription className="text-left">
          {safeT(t, descriptionKey)}
        </CardDescription>
        <CardDescription>
          <BadgeRenderer badges={badges} />
        </CardDescription>
      </CardHeader>
    </GlowCard>
  );
};

export default ProjectCard;
