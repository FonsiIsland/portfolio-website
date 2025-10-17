"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Variants } from "framer-motion";
import React from "react";
import GlowCard from "../skills-page/glow-card";
import Link from "next/link";
import { ArrowRight, CalendarDaysIcon } from "lucide-react";

import Image from "next/image";
import cardVariants from "@/lib/constants";
import { useTranslations } from "next-intl";

interface NewsCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  date,
  imageUrl,
}) => {
  const tCard = useTranslations("components.card");

  return (
    <GlowCard
      variants={cardVariants}
      className={`w-[880px] h[350px]`}
      rounded="rounded-4xl"
    >
      <CardContent>
        <div className="w-full h-64 relative rounded-2xl overflow-hidden">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
        <div className="absolute bottom-6 right-6 h-fit transition-colors flex flex-row gap-1 items-center text-text/60 hover:text-accent">
          <p className="text-sm">{tCard("read-more")}</p>
          <ArrowRight size={16} />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row justify-between">
            <p>{title}</p>
            <div className="flex gap-1 items-center">
              <CalendarDaysIcon size={16} className="text-text/60" />
              <p className="text-sm font-light text-text/60">{date}</p>
            </div>
          </div>
        </CardTitle>
        <CardDescription className="text-left">{description}</CardDescription>
      </CardHeader>
    </GlowCard>
  );
};

export default NewsCard;
