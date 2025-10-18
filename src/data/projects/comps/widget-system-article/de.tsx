import {
  Comparison,
  ComparisonHandle,
  ComparisonItem,
} from "@/components/shadcnio/comparison-slider";
import ArticleEntry from "@/components/utils/article-entry";
import { Github, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WidgetSystemArticle = () => {
  return (
    <ArticleEntry>
      <h1>React Widget System 🧩</h1>

      <h2>Ein modulares, interaktives Widget-Framework in React</h2>
      <p>
        Das <strong>React Widget System</strong> ist ein flexibles und
        animiertes Dashboard-Framework, das ich aktuell im Zuge eines anderen
        Projektes entwickle. Ziel ist es, ein wiederverwendbares System zu
        schaffen, mit dem sich eigene Benutzeroberflächen aus frei
        platzierbaren, interaktiven Widgets zusammenstellen lassen.
      </p>
      <p>
        Sobald das System ausgereift genug ist, wird es als eigenständige{" "}
        <strong>npm-Library</strong> veröffentlicht, um anderen Entwickler:innen
        den einfachen Einsatz in Dashboards, Admin-Tools oder individuellen
        Startseiten zu ermöglichen.
      </p>

      <div className="w-full my-8">
        <Comparison className="mx-auto aspect-[440/157] w-[700px]">
          <ComparisonItem position="left">
            <Image
              alt="Widget System Editor Mode"
              height={256}
              src="/images/projects/react-widget-system-detail1.1.png"
              unoptimized
              width={800}
            />
          </ComparisonItem>
          <ComparisonItem position="right">
            <Image
              alt="Widget System"
              height={256}
              src="/images/projects/react-widget-system-detail1.2.png"
              unoptimized
              width={800}
            />
          </ComparisonItem>
          <ComparisonHandle />
        </Comparison>
        <p className="text-center text-sm font-light text-text/60 mt-2">
          Vergleich: Normaler Modus (links) vs. Editor-Modus mit aktivem Grid
          (rechts)
        </p>
      </div>

      <h3>Funktionsübersicht</h3>
      <ul className="list-disc ml-6">
        <li>
          <strong>Drag & Drop-Unterstützung:</strong> Jedes Widget kann frei auf
          einem flexiblen Grid verschoben werden - mit flüssigen Animationen
          dank <code>@use-gesture/react</code> und{" "}
          <code>@react-spring/web</code>.
        </li>
        <li>
          <strong>Dynamische Größenanpassung:</strong> Widgets lassen sich
          interaktiv in ihrer Größe verändern, das Layout passt sich automatisch
          an.
        </li>
        <li>
          <strong>Z-Index-Steuerung:</strong> Widgets können gezielt in den
          Vorder- oder Hintergrund gebracht werden.
        </li>
        <li>
          <strong>Animiertes Grid & Editor-Modus:</strong> Über den Editor-Modus
          lässt sich das Raster anzeigen, inklusive sanfter Animationen mit{" "}
          <code>framer-motion</code>.
        </li>
        <li>
          <strong>Responsive Grid-Anpassung:</strong> Das Layout skaliert
          dynamisch anhand des Containerverhältnisses - wahlweise im{" "}
          <code>width</code>-, <code>height</code>- oder <code>separate</code>
          -Modus.
        </li>
        <li>
          <strong>Komponentenbasiertes Widget-System:</strong> Jedes Widget
          basiert auf einer React-Komponente und kann frei angepasst oder
          ersetzt werden.
        </li>
      </ul>

      <h3>Beispiel-Widgets</h3>
      <p>
        Das System enthält bereits mehrere Beispiel-Widgets, die als Vorlage für
        eigene Komponenten dienen:
      </p>
      <ul className="list-disc ml-6">
        <li>🕒 Uhr-Widget (3x2)</li>
        <li>☀️ Wetter-Widget (3x2)</li>
        <li>📅 Kalender-Widget (2x3)</li>
        <li>📊 Statistik-Widget (3x3)</li>
        <li>🔔 Benachrichtigungen (4x2)</li>
      </ul>

      <h3>Technologien & Frameworks</h3>
      <p>
        Das Widget-System basiert vollständig auf <strong>React</strong> mit
        modernen Hooks und animierten Bewegungen. Zum Einsatz kommen unter
        anderem:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <code>@react-spring/web</code> - flüssige Bewegungen und Übergänge
        </li>
        <li>
          <code>@use-gesture/react</code> - Gestensteuerung für Drag & Resize
        </li>
        <li>
          <code>framer-motion</code> - UI-Animationen und Transition-Effekte
        </li>
        <li>
          <code>lucide-react</code> - moderne Icon-Bibliothek
        </li>
        <li>
          <code>Tailwind CSS</code> - performantes Utility-Styling
        </li>
      </ul>

      <h3>Technisches Konzept</h3>
      <p>
        Das Grid-System teilt den verfügbaren Platz in dynamische Zellen auf,
        die sich automatisch an die Containergröße anpassen. Widgets werden im
        State verwaltet und reagieren auf Drag-, Resize- und Z-Index-Aktionen in
        Echtzeit. Über <code>useImperativeHandle</code> können Karten gezielt
        hinzugefügt, gelöscht oder ausgelesen werden.
      </p>
      <p>
        Durch die Kombination aus <code>@react-spring</code> und{" "}
        <code>framer-motion</code> entsteht eine reaktive Benutzererfahrung, die
        sich besonders für Dashboards und interaktive Interfaces eignet.
      </p>

      <h3>Aktueller Entwicklungsstand</h3>
      <p>
        Das Projekt befindet sich aktuell in der aktiven Entwicklung. Der Fokus
        liegt derzeit auf:
      </p>
      <ul className="list-disc ml-6">
        <li>Performance-Optimierung bei vielen gleichzeitig aktiven Widgets</li>
        <li>Verbesserung der Grid-Stabilität bei dynamischen Größen</li>
        <li>Erweiterung der API für externe Steuerung und Persistenz</li>
      </ul>
      <p>
        Momentan ist das Projekt noch <strong>closed source</strong>, da sich
        viele Kernkomponenten in der aktiven Entwicklung befinden. Sobald eine
        stabile Version erreicht ist, wird das{" "}
        <strong>React Widget System</strong> jedoch als{" "}
        <strong>Open-Source-Projekt</strong> auf GitHub veröffentlicht.
      </p>

      <h3>Geplante Veröffentlichung</h3>
      <p>
        Nach Abschluss der Entwicklungsphase wird das Projekt als{" "}
        <strong>npm-Package</strong> (z. B. <code>react-widget-system</code>)
        veröffentlicht, inklusive Dokumentation, TypeScript-Unterstützung und
        Beispielen zur Integration in eigene Projekte.
      </p>

      <h4>Vision</h4>
      <p>
        Ziel ist es, ein universelles Widget-Framework zu schaffen, das
        flexibel, performant und leicht integrierbar ist. Entwickler:innen
        sollen eigene Widgets mit minimalem Aufwand einbinden und komplexe
        Dashboards ohne externe Abhängigkeiten aufbauen können.
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

export default WidgetSystemArticle;
