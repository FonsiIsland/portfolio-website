import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { ReactNode } from "react";
import NewsCard from "./news-card";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import CopyTextButton from "../contact-page/copy-text-button";
import Link from "next/link";
import { Github, MessageCircleMore } from "lucide-react";

interface NewsDialogProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

const NewsDialog: React.FC<NewsDialogProps> = ({
  title,
  description,
  date,
  imageUrl,
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <NewsCard
          title={title}
          description={description}
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
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          </div>
          <section className="blog-news">
            <h1>Portfolio Launch 🚀</h1>

            <h2>Meine neue Portfolio-Website ist live!</h2>
            <p>
              Nach intensiver Arbeit ist meine neue Portfolio-Website endlich
              online! Hier findest du einen umfassenden Überblick über meine
              aktuellen Projekte, vergangenen Arbeiten und kreativen
              Lösungsansätze. Ich habe großen Wert darauf gelegt, die Seite
              übersichtlich und ansprechend zu gestalten, damit Besucher schnell
              einen Eindruck von meinem Stil und meiner Arbeitsweise bekommen.
            </p>

            <h3>Technologien & Frameworks</h3>
            <p>
              Das Herzstück der Website bildet <strong>Next.js</strong>, das als
              modernes React-basiertes Framework für serverseitiges Rendering
              und optimierte Performance sorgt. Für das Styling setze ich auf{" "}
              <strong>Tailwind CSS</strong>, das schnelle und flexible
              Gestaltung ermöglicht, kombiniert mit{" "}
              <strong>Framer Motion</strong> für geschmeidige Animationen und{" "}
              <strong>Three.js</strong> für beeindruckende 3D-Modelle und
              interaktive Visualisierungen.
            </p>

            <h3>Komponentenbibliotheken</h3>
            <p>
              Um die UI sauber und modern zu gestalten, verwende ich bekannte
              Komponentenbibliotheken wie <strong>shadcn/ui</strong> und{" "}
              <strong>MagicUI</strong>. Damit konnte ich wiederverwendbare
              Elemente implementieren, die sowohl funktional als auch visuell
              ansprechend sind, ohne die Performance zu beeinträchtigen.
            </p>

            <h3>Design & Interaktivität</h3>
            <p>
              Neben Technik stand auch das Design im Vordergrund: Ein modernes
              Layout, animierte Übergänge und 3D-Elemente sorgen dafür, dass
              Besucher interaktiv durch die Projekte navigieren können. Alles
              ist so optimiert, dass die Seite sowohl auf Desktop als auch mobil
              flüssig läuft und einen professionellen Eindruck hinterlässt.
            </p>

            <h4>Schau es dir an & Feedback willkommen!</h4>
            <p>
              Entdecke meine neuesten Projekte, erfahre, wie ich
              Herausforderungen angehe und wie kreative Ideen umgesetzt werden.
              Feedback, Anregungen oder ein kurzer Austausch über spannende
              Themen sind jederzeit herzlich willkommen!
            </p>

            <div className="flex gap-2 items-center justify-center mt-4 mb-2">
              <Github size={20} className="text-text/60" />
              <Link
                href={"https://github.com/deinusername/portfolio"}
                target="_blank"
                className="underline cursor-pointer text-text/60"
              >
                Github Link
              </Link>

              <p className="text-sm mb-0">|</p>

              <MessageCircleMore size={20} className="text-text/60" />
              <Link
                href="/contact"
                className="underline cursor-pointer text-text/60"
              >
                Contact Me
              </Link>
            </div>
          </section>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default NewsDialog;
