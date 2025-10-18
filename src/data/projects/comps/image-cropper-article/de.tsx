import ArticleEntry from "@/components/utils/article-entry";
import { Github, Globe2, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageCropperArticle = () => {
  return (
    <ArticleEntry>
      <h1>Image Cropper ✂️</h1>
      <h2>Ein leichtes, kostenloses Tool zum Zuschneiden von Bildern</h2>
      <p>
        Der <strong>Image Cropper</strong> ist ein einfaches, webbasiertes Tool,
        mit dem Nutzer:innen ihre Bilder schnell und unkompliziert zuschneiden
        können. Das Projekt entstand aus dem Bedürfnis einer Kollegin, ein
        unkompliziertes und dennoch flexibles Tool zu haben, das keine
        Installation erfordert und einfach die Arbeit erledigt.
      </p>
      <p>
        Das Tool unterstützt verschiedene Masken welche in der Seitenleiste
        Links umgestellt werden können. Ziel ist es, eine intuitive
        Benutzeroberfläche zu bieten, die für Einsteiger:innen und Profis
        gleichermaßen geeignet ist.
      </p>

      <div className="w-[730px] h-[346px] relative rounded-2xl overflow-hidden mx-auto mb-4 p-4">
        <Image
          src="/images/projects/image-cropper-detail1.png"
          alt="Image Cropper Example"
          fill
        />
      </div>

      <h3>Funktionsübersicht</h3>
      <ul className="list-disc ml-6">
        <li>
          <strong>Verschiedene Seitenverhältnisse:</strong> 16:9, 9:16, 2:1,
          1:1, 36:11, 9:2, 4:5 - flexibel auswählbar.
        </li>
        <li>
          <strong>Interaktives Zuschneiden:</strong> Rahmen kann frei verschoben
          und in der Größe angepasst werden.
        </li>
        <li>
          <strong>Zoom & Skalierung:</strong> Gesamtes Bild kann gezoomt werden,
          um präzises Zuschneiden zu ermöglichen.
        </li>
        <li>
          <strong>Dateigrößenbegrenzung:</strong> Optionaler Export mit maximal
          1 MB Dateigröße, ideal für Web-Uploads.
        </li>
        <li>
          <strong>Direkter Download:</strong> Zuschneiden und direkt als JPEG
          speichern, ohne zusätzliche Software.
        </li>
      </ul>

      <h3>Technologien & Frameworks</h3>
      <p>
        Das Projekt basiert auf modernen Webtechnologien und setzt auf einfache
        Integration und hohe Performance:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <code>p5.js</code> - für das interaktive Zeichnen und Zuschneiden von
          Bildern
        </li>
        <li>
          <code>Material Components Web</code> - für die UI-Komponenten
        </li>
        <li>
          <code>Vanilla JS</code> - für Logik, Bildmanipulation und Event
          Handling
        </li>
      </ul>

      <h3>Technisches Konzept</h3>
      <p>
        Das Tool lädt das Bild auf eine dynamische Canvas-Fläche, auf der der
        Zuschneiderahmen interaktiv verschoben und skaliert werden kann. Die
        Exportfunktion berücksichtigt optional die maximale Dateigröße und
        skaliert das Bild bei Bedarf automatisch. Alle Operationen erfolgen
        clientseitig, sodass keine Daten an einen Server gesendet werden müssen.
      </p>

      <h3>Aktueller Entwicklungsstand</h3>
      <p>
        Das Projekt ist voll funktionsfähig und wird aktuell nicht weiter
        entwickelt.
      </p>

      <h3>Verfügbarkeit</h3>
      <p>
        <strong>Image Cropper Free</strong> ist kostenlos nutzbar und als
        Web-App direkt im Browser verfügbar. Der Quellcode ist auf{" "}
        <a
          href="https://github.com/FonsiIsland/imagecrop"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        einsehbar.
      </p>

      <h4>Vision</h4>
      <p>
        Ziel war es, ein schlankes, leicht zugängliches Tool für schnelles
        Bild-Zuschneiden zu schaffen. Nutzer:innen sollen ohne Installation und
        komplizierte Einstellungen ihre Bilder zuschneiden und sofort verwenden
        können, das ist soweit gelungen.
      </p>

      <div className="flex gap-2 items-center justify-center mt-4 mb-2">
        <Github size={20} className="text-text/60" />
        <Link
          href="https://github.com/FonsiIsland/imagecrop"
          target="_blank"
          className="underline cursor-pointer text-text/60"
        >
          Github Link
        </Link>
        <p className="text-sm mb-0">|</p>
        <Globe2 size={20} className="text-text/60" />
        <Link
          href="https://fonsiisland.github.io/imagecrop/"
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

export default ImageCropperArticle;
