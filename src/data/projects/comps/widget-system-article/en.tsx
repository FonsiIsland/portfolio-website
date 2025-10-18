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

      <h2>A modular, interactive widget framework in React</h2>
      <p>
        The <strong>React Widget System</strong> is a flexible and animated
        dashboard framework I&apos;m currently developing as part of another
        project. The goal is to create a reusable system that allows building
        custom user interfaces from freely placeable, interactive widgets.
      </p>
      <p>
        Once the system is mature enough, it will be released as a standalone{" "}
        <strong>npm library</strong>, enabling other developers to easily use it
        in dashboards, admin tools, or custom homepages.
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
          Comparison: Normal mode (left) vs. Editor mode with active grid
          (right)
        </p>
      </div>

      <h3>Features Overview</h3>
      <ul className="list-disc ml-6">
        <li>
          <strong>Drag & Drop support:</strong> Each widget can be freely moved
          on a flexible grid-with smooth animations thanks to{" "}
          <code>@use-gesture/react</code> and <code>@react-spring/web</code>.
        </li>
        <li>
          <strong>Dynamic resizing:</strong> Widgets can be resized
          interactively, and the layout adjusts automatically.
        </li>
        <li>
          <strong>Z-index control:</strong> Widgets can be brought forward or
          backward as needed.
        </li>
        <li>
          <strong>Animated grid & editor mode:</strong> The editor mode displays
          the grid with smooth animations using <code>framer-motion</code>.
        </li>
        <li>
          <strong>Responsive grid adjustment:</strong> The layout scales
          dynamically based on the container ratio-in <code>width</code>,{" "}
          <code>height</code>, or <code>separate</code> mode.
        </li>
        <li>
          <strong>Component-based widget system:</strong> Each widget is a React
          component and can be customized or replaced freely.
        </li>
      </ul>

      <h3>Example Widgets</h3>
      <p>
        The system already includes several example widgets that serve as
        templates for custom components:
      </p>
      <ul className="list-disc ml-6">
        <li>🕒 Clock widget (3x2)</li>
        <li>☀️ Weather widget (3x2)</li>
        <li>📅 Calendar widget (2x3)</li>
        <li>📊 Statistics widget (3x3)</li>
        <li>🔔 Notifications (4x2)</li>
      </ul>

      <h3>Technologies & Frameworks</h3>
      <p>
        The widget system is built entirely with <strong>React</strong> using
        modern hooks and animated transitions. Technologies used include:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <code>@react-spring/web</code> - smooth animations and transitions
        </li>
        <li>
          <code>@use-gesture/react</code> - gesture handling for drag & resize
        </li>
        <li>
          <code>framer-motion</code> - UI animations and transition effects
        </li>
        <li>
          <code>lucide-react</code> - modern icon library
        </li>
        <li>
          <code>Tailwind CSS</code> - high-performance utility styling
        </li>
      </ul>

      <h3>Technical Concept</h3>
      <p>
        The grid system divides available space into dynamic cells that adapt
        automatically to the container size. Widgets are managed in state and
        respond in real-time to drag, resize, and z-index actions. Using{" "}
        <code>useImperativeHandle</code>, widgets can be added, removed, or
        queried programmatically.
      </p>
      <p>
        The combination of <code>@react-spring</code> and{" "}
        <code>framer-motion</code> creates a reactive user experience, ideal for
        dashboards and interactive interfaces.
      </p>

      <h3>Current Development Status</h3>
      <p>The project is currently under active development, with a focus on:</p>
      <ul className="list-disc ml-6">
        <li>Performance optimization for many simultaneously active widgets</li>
        <li>Improving grid stability for dynamic sizes</li>
        <li>Expanding the API for external control and persistence</li>
      </ul>
      <p>
        The project is currently <strong>closed source</strong>, as many core
        components are still in active development. Once a stable version is
        reached, the <strong>React Widget System</strong> will be released as an{" "}
        <strong>open-source project</strong> on GitHub.
      </p>

      <h3>Planned Release</h3>
      <p>
        After development is complete, the project will be published as an{" "}
        <strong>npm package</strong> (e.g., <code>react-widget-system</code>),
        including documentation, TypeScript support, and integration examples.
      </p>

      <h4>Vision</h4>
      <p>
        The goal is to create a universal widget framework that is flexible,
        performant, and easy to integrate. Developers should be able to add
        custom widgets with minimal effort and build complex dashboards without
        external dependencies.
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
          Contact me
        </Link>
      </div>
    </ArticleEntry>
  );
};

export default WidgetSystemArticle;
