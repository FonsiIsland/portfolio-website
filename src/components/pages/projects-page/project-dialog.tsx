"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProjectCard from "./project-card";
import { BadgeName } from "./project-badges";
import { useLocale, useTranslations } from "next-intl";
import { safeT } from "@/components/utils/safe-translation";

interface ProjectDialogProps {
  titleKey: string;
  descriptionKey: string;
  date: string;
  imageUrl: string;
  article: React.ReactNode;
  badges: BadgeName[];
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  titleKey,
  descriptionKey,
  date,
  imageUrl,
  article,
  badges,
}) => {
  const t = useTranslations("pages.projectsPage.article.project");

  return (
    <Dialog>
      <DialogTrigger>
        <ProjectCard
          titleKey={titleKey}
          descriptionKey={descriptionKey}
          date={date}
          imageUrl={imageUrl}
          badges={badges}
        />
      </DialogTrigger>
      <DialogContent
        className="max-w-4xl h-[750px] rounded-4xl"
        showCloseX={false}
      >
        <ScrollArea className="h-[calc(750px-48px)] pr-4">
          <div className="w-full h-64 relative rounded-2xl overflow-hidden mb-4">
            <Image
              src={imageUrl}
              alt={safeT(t, titleKey)}
              fill
              className="object-cover"
            />
          </div>
          <section className="blog-news">{article}</section>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
