import ArticleEntry from "@/components/utils/article-entry";
import { Github, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import React from "react";

const ElectronNodejsSmarthomeArticle = () => {
  return (
    <ArticleEntry>
      <h1>SmartHome System 🏠</h1>

      <h2>
        Ein flexibles, automatisiertes und erweiterbares Smarthome-Ökosystem
      </h2>
      <p>
        Das <strong>SmartHome System</strong> ist aktuell in Entwicklung. Es
        soll ein zentrales Ökosystem für Hausautomatisierung werden, das Geräte
        wie Lampen, Steckdosen, Sensoren oder Panels steuert, überwacht und
        miteinander vernetzt.
      </p>
      <p>
        Das System besteht aus mehreren Sub-Projekten, die gerade aufgebaut
        werden - darunter Desktop-App, Backend-Controller und Module. Die
        Desktop-App nutzt das <strong>Electron Plugin System</strong> für
        flexible UI-Erweiterungen, während der Backend-Controller das{" "}
        <strong>Node.js Plugin System</strong> für modulare Backend-Funktionen
        einsetzt.
      </p>
      <p>
        Kommunikation läuft über <strong>Sockets</strong>, abgesichert durch ein{" "}
        <strong>custom RBAC mTLS-Pairing-System</strong> zwischen Main Backend
        Controller und Clients. Für anpassbare Dashboards kommt das{" "}
        <strong>Widget-System</strong> zum Einsatz.
      </p>
      <p>
        Für mehr Infos zu den Plugin-Systemen siehe die jeweiligen Projekte.
      </p>

      <h3>Technologien & Frameworks</h3>
      <ul className="list-disc ml-6">
        <li>Node.js - Backend & Plugin-System</li>
        <li>Electron - Desktop-App</li>
        <li>Socket.io - Echtzeit-Kommunikation</li>
        <li>Custom RBAC + mTLS - Authentifizierung & Zugriff</li>
        <li>Widget-System - Flexible Dashboards</li>
      </ul>

      <h3>Aktueller Stand</h3>
      <ul className="list-disc ml-6">
        <li>Sub-Projekte werden gerade aufgebaut</li>
        <li>Plugin-Systeme in Client und Backend integriert</li>
        <li>Socket-Kommunikation aktiv</li>
        <li>RBAC mTLS Authentifizierung in Arbeit</li>
        <li>Widget-System für Dashboards größtenteils integriert</li>
      </ul>

      <h3>Vision</h3>
      <p>
        Ein universelles Smarthome-Ökosystem mit modularen Erweiterungen,
        sicheren Verbindungen, flexiblen Automatisierungen und anpassbaren
        Dashboards, das sowohl für Entwickler:innen als auch Nutzer:innen
        einfach erweiterbar ist.
      </p>

      <div className="flex gap-2 items-center justify-center mt-4 mb-2">
        <Github size={20} className="text-text/40" />
        <p
          className="cursor-default pointer-events-auto text-text/40"
          aria-disabled="true"
        >
          Github Link
        </p>

        <p className="text-sm mb-0">|</p>

        <MessageCircleMore size={20} className="text-text/60" />
        <Link href="/contact" className="underline cursor-pointer text-text/60">
          Kontaktiere mich
        </Link>
      </div>
    </ArticleEntry>
  );
};

export default ElectronNodejsSmarthomeArticle;
