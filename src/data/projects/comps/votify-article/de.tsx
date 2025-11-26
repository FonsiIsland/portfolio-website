import ArticleEntry from "@/components/utils/article-entry";
import { Github, Globe2, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import React from "react";

const VotifyArticle = () => {
  return (
    <ArticleEntry>
      <h1>Votify — Open Source Live Polling 🚀</h1>

      <h2>Interaktive Umfragen in Echtzeit leicht gemacht</h2>
      <p>
        Ich freue mich, <strong>Votify</strong> vorzustellen, eine
        Open-Source-Plattform für Live-Umfragen und interaktive Abstimmungen.
        Mit Votify können Nutzer:innen blitzschnell Umfragen erstellen, über
        QR-Code oder Join-Code teilen und die Ergebnisse in Echtzeit mit
        ansprechenden Visualisierungen ansehen.
      </p>

      <h3>Perfekt für Schulen, Events & Workshops</h3>
      <p>
        Votify eignet sich ideal für verschiedenste Einsatzbereiche:
        <ul className="list-disc pl-5 mt-2">
          <li>📚 Schulen & Universitäten</li>
          <li>🎤 Live-Streams & Events</li>
          <li>🧠 Workshops & Meetings</li>
          <li>⭐ Schnelles Feedback sammeln</li>
        </ul>
        Teilnehmer:innen können ohne Login abstimmen, was die Teilnahme einfach
        und barrierefrei macht.
      </p>

      <h3>Features & Highlights</h3>
      <p>
        Votify bietet viele nützliche Funktionen:
        <ul className="list-disc pl-5 mt-2">
          <li>📊 Echtzeit-Ergebnisvisualisierung</li>
          <li>🔢 Single- und Multiple-Choice-Fragen</li>
          <li>📝 Freitext-Antworten</li>
          <li>📱 QR-Code-Join-System</li>
          <li>🖥️ Präsentationsmodus für große Bildschirme</li>
          <li>🔐 Geschütztes Admin-Dashboard</li>
          <li>
            🎨 Modernes, sauberes UI mit <strong>Framer Motion</strong>{" "}
            Animationen
          </li>
          <li>🔄 Responsives Design für Desktop & Mobile</li>
        </ul>
      </p>

      <h3>Technologien & Stack</h3>
      <p>
        Votify setzt auf ein modernes Full-Stack-Setup:
        <ul className="list-disc pl-5 mt-2">
          <li>
            <strong>Frontend:</strong> Next.js 15, React, TypeScript, Tailwind
            CSS, shadcn/ui, Framer Motion
          </li>
          <li>
            <strong>Backend:</strong> Next.js Server Actions, Prisma ORM
          </li>
          <li>
            <strong>Datenbank:</strong> MongoDB
          </li>
          <li>
            <strong>Auth & Validierung:</strong> Auth.js, Zod
          </li>
          <li>
            <strong>Datenfetching:</strong> React Query
          </li>
          <li>
            <strong>Charts & Visualisierung:</strong> Recharts
          </li>
        </ul>
      </p>

      <p>
        Contributions sind willkommen! 🙌 Egal ob Bugfixes, neue Features oder
        UI/UX-Verbesserungen - öffne ein Issue oder sende einen Pull Request.
      </p>

      <div className="flex gap-2 items-center justify-center mt-4 mb-2">
        <Github size={20} className="text-text/60" />
        <Link
          href="https://github.com/FonsiIsland/votify"
          target="_blank"
          className="underline cursor-pointer text-text/60"
        >
          Github Link
        </Link>
        <p className="text-sm mb-0">|</p>
        <Globe2 size={20} className="text-text/60" />
        <Link
          href="https://votifyapp.vercel.app/"
          target="_blank"
          className="underline cursor-pointer text-text/60"
        >
          Live Website Link
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

export default VotifyArticle;
