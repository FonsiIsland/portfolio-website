import ArticleEntry from "@/components/utils/article-entry";
import { Github, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import React from "react";

const ElectronNodejsSmarthomeArticle = () => {
  return (
    <ArticleEntry>
      <h1>SmartHome System 🏠</h1>

      <h2>A flexible, automated, and expandable smart home ecosystem</h2>
      <p>
        The <strong>SmartHome System</strong> is currently in development. It's
        designed to become a central ecosystem for home automation -
        controlling, monitoring, and connecting devices such as lamps, sockets,
        sensors, and panels.
      </p>
      <p>
        The system consists of several subprojects that are currently being
        built - including the desktop app, backend controller, and modules. The
        desktop app uses the <strong>Electron Plugin System</strong> for
        flexible UI extensions, while the backend controller uses the{" "}
        <strong>Node.js Plugin System</strong> for modular backend
        functionality.
      </p>
      <p>
        Communication is handled via <strong>sockets</strong>, secured through a{" "}
        <strong>custom RBAC mTLS pairing system</strong> between the main
        backend controller and clients. For customizable dashboards, my{" "}
        <strong>widget system</strong> is used.
      </p>
      <p>
        For more information about the plugin systems, see the respective
        projects.
      </p>

      <h3>Technologies & Frameworks</h3>
      <ul className="list-disc ml-6">
        <li>Node.js - Backend & Plugin System</li>
        <li>Electron - Desktop App</li>
        <li>Socket.io - Real-time Communication</li>
        <li>Custom RBAC + mTLS - Authentication & Access</li>
        <li>Widget System - Flexible Dashboards</li>
      </ul>

      <h3>Current Status</h3>
      <ul className="list-disc ml-6">
        <li>Subprojects are currently being developed</li>
        <li>Plugin systems integrated in client and backend</li>
        <li>Socket communication active</li>
        <li>RBAC mTLS authentication in progress</li>
        <li>Widget system for dashboards mostly integrated</li>
      </ul>

      <h3>Vision</h3>
      <p>
        A universal smart home ecosystem with modular extensions, secure
        connections, flexible automations, and customizable dashboards - easily
        expandable for both developers and end users.
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

export default ElectronNodejsSmarthomeArticle;
