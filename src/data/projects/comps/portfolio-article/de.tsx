import ArticleEntry from "@/components/utils/article-entry";
import { Github, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import React from "react";

const PortfolioArticle = () => {
  return (
    <ArticleEntry>
      <h1>Portfolio Launch 🚀</h1>

      <h2>Meine neue Portfolio-Website ist live!</h2>
      <p>
        Nach intensiver Arbeit ist meine neue Portfolio-Website endlich online!
        Sie bietet einen umfassenden Überblick über meine aktuellen Projekte,
        vergangenen Arbeiten und kreativen Lösungsansätze. Ich habe großen Wert
        darauf gelegt, die Seite übersichtlich und ansprechend zu gestalten,
        sodass Besucher schnell einen Eindruck von meinem Stil und meiner
        Arbeitsweise erhalten.
      </p>

      <h3>Technologien & Frameworks</h3>
      <p>
        Das Herzstück der Website bildet <strong>Next.js</strong>, ein modernes
        React-basiertes Framework, das serverseitiges Rendering und optimierte
        Performance ermöglicht. Für das Styling setze ich auf{" "}
        <strong>Tailwind CSS</strong>, kombiniert mit{" "}
        <strong>Framer Motion</strong> für flüssige Animationen und
        <strong>Three.js</strong> für beeindruckende 3D-Modelle und interaktive
        Visualisierungen.
      </p>

      <h3>Komponentenbibliotheken & Wiederverwendbarkeit</h3>
      <p>
        Um die UI sauber und modern zu gestalten, verwende ich bekannte
        Komponentenbibliotheken wie <strong>shadcn/ui</strong> und{" "}
        <strong>MagicUI</strong>. Diese ermöglichen es, wiederverwendbare
        Elemente zu implementieren, die sowohl funktional als auch visuell
        ansprechend sind, ohne die Performance der Seite zu beeinträchtigen.
      </p>

      <h3>Design, Interaktivität & User Experience</h3>
      <p>
        Neben Technik stand das Design im Vordergrund: Ein modernes Layout,
        animierte Übergänge und interaktive 3D-Elemente sorgen dafür, dass
        Besucher durch die Projekte navigieren und die Inhalte auf intuitive
        Weise erleben können. Die Seite ist für Desktop, Tablet und Mobile
        optimiert und garantiert eine flüssige und professionelle
        Benutzererfahrung.
      </p>

      <h4>Schau es dir an & Feedback willkommen!</h4>
      <p>
        Entdecke meine neuesten Projekte, erfahre, wie ich Herausforderungen
        angehe und wie kreative Ideen umgesetzt werden. Feedback, Anregungen
        oder ein kurzer Austausch über spannende Themen sind jederzeit herzlich
        willkommen!
      </p>

      <div className="flex gap-2 items-center justify-center mt-4 mb-2">
        <Github size={20} className="text-text/60" />
        <Link
          href={"https://github.com/FonsiIsland/portfolio-website"}
          target="_blank"
          className="underline cursor-pointer text-text/60"
        >
          Github Link
        </Link>

        <p className="text-sm mb-0">|</p>

        <MessageCircleMore size={20} className="text-text/60" />
        <Link href="/contact" className="underline cursor-pointer text-text/60">
          Kontaktiere mich
        </Link>
      </div>
    </ArticleEntry>
  );
};

export default PortfolioArticle;
