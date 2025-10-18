import ArticleEntry from "@/components/utils/article-entry";
import Link from "next/link";
import React from "react";

const PortfolioArticle = () => {
  return (
    <ArticleEntry>
      <h1>Portfolio Launch 🚀</h1>

      <h2>Meine neue Portfolio-Website ist live!</h2>

      <p>
        Nach intensiver Arbeit ist meine neue Portfolio-Website endlich online!
        Auf der Seite findest du einen Überblick über meine aktuellen Projekte,
        vergangenen Arbeiten und kreative Lösungsansätze.
      </p>

      <p>
        Die Seite wurde mit <strong>Next.js</strong> für schnelle Performance,
        <strong>Tailwind CSS</strong> für flexibles Styling,{" "}
        <strong>Framer Motion</strong>
        für Animationen und <strong>Three.js</strong> für 3D-Visualisierungen
        umgesetzt.
      </p>

      <p>
        Schau dir interaktive Projekte, animierte Übergänge und moderne
        UI-Komponenten an, die zeigen, wie ich Technik und Design kombiniere.
        {/* Die Website ist sowohl auf Desktop als auch mobil perfekt nutzbar. */}
      </p>

      <p>
        Für mehr Details zu diesen oder andere Projekten, schau gerne auf meiner{" "}
        <Link
          href="/projects"
          className="underline cursor-pointer text-text/60"
        >
          Projekte
        </Link>{" "}
        Seite vorbei!
      </p>
    </ArticleEntry>
  );
};

export default PortfolioArticle;
