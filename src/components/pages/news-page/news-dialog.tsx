"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import NewsCard from "./news-card";
import { useTranslations } from "next-intl";
import { safeT } from "@/components/utils/safe-translation";
import { VisuallyHidden } from "radix-ui";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

interface NewsDialogProps {
  titleKey: string;
  descriptionKey: string;
  date: string;
  imageUrl: string;
  article: React.ReactNode;
}

const NewsDialog: React.FC<NewsDialogProps> = ({
  titleKey,
  descriptionKey,
  date,
  imageUrl,
  article,
}) => {
  const t = useTranslations("pages.newsPage.article.project");

  return (
    <Dialog>
      <DialogTrigger>
        <NewsCard
          titleKey={titleKey}
          descriptionKey={descriptionKey}
          date={date}
          imageUrl={imageUrl}
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

        <VisuallyHidden.Root>
          <DialogTitle>News Dialog</DialogTitle>
          <DialogDescription>News Dialog</DialogDescription>
        </VisuallyHidden.Root>
      </DialogContent>
    </Dialog>
  );
};

export default NewsDialog;
