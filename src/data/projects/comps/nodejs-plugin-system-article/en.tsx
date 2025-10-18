import ArticleEntry from "@/components/utils/article-entry";
import { Github, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import React from "react";

const NodeJsPluginSystemArticle = () => {
  return (
    <ArticleEntry>
      <h1>Node Plugin System 🔌</h1>

      <h2>A secure, modular plugin framework for local Node.js backends</h2>
      <p>
        The <strong>Node Plugin System</strong> is designed to make local
        backend APIs flexible, robust, and securely extensible. Developers can
        implement custom modules, API routes, or integrations-without
        compromising the stability of the main application. Each plugin runs
        fully isolated in a sandbox, with controlled access to databases, socket
        messaging, and other resources according to RBAC.
      </p>
      <p>
        The goal is a framework that offers maximum freedom for extensions
        without compromising security or stability.
      </p>

      <h3>Features</h3>
      <ul className="list-disc ml-6">
        <li>
          <strong>Isolated Execution:</strong> Plugins run in{" "}
          <code>isolated-vm</code> or Node.js Worker Threads and are fully
          separated from the main process.
        </li>
        <li>
          <strong>RBAC & Sandboxed Resource Management:</strong> Plugins only
          have access to the resources they are authorized for-whether database
          tables, sockets, or external APIs.
        </li>
        <li>
          <strong>Sandboxed SQLite & DB Access:</strong> All plugin database
          access goes through secure wrappers. Tables and queries are isolated,
          preventing plugins from accessing the main database.
        </li>
        <li>
          <strong>Digital Signatures & Tamper Protection:</strong> Only verified
          plugins are loaded. Runtime tampering is automatically detected and
          blocked.
        </li>
        <li>
          <strong>Flexible API Extensibility:</strong> Plugins can provide
          custom REST endpoints or WebSockets. Secure namespaces prevent
          conflicts with other plugins or the main application.
        </li>
        <li>
          <strong>Inter-Plugin Communication:</strong> Plugins can interact via
          a secure event bus without accessing the core application state.
          (Still in development)
        </li>
        <li>
          <strong>Dynamic Updates:</strong> Plugins can be automatically updated
          via the marketplace, including signature verification and database
          table migration-without restarting the main application. (Still in
          development)
        </li>
        <li>
          <strong>Lifecycle Hooks & Safe Shutdown:</strong> <code>onInit</code>,{" "}
          <code>onUpdate</code>, and <code>onExit</code> hooks allow controlled
          initialization, updates, and clean shutdowns.
        </li>
      </ul>

      <h3>Technologies & Frameworks</h3>
      <ul className="list-disc ml-6">
        <li>
          <code>Node.js</code> - server-side environment
        </li>
        <li>
          <code>isolated-vm</code> - secure sandbox execution
        </li>
        <li>
          <code>Express</code> - dynamic API routes for plugins
        </li>
        <li>
          <code>SQLite</code> in sandbox mode - secure, isolated databases
        </li>
        <li>
          <code>TypeScript</code> - type safety & maintainability
        </li>
        <li>
          <code>crypto</code> - digital signature verification
        </li>
        <li>
          <code>fs-extra & tar</code> - file system handling and archiving
        </li>
        <li>
          <code>axios</code> - secure HTTP requests for plugins and marketplace
        </li>
        <li>
          <code>EventEmitter3</code> - secure inter-plugin communication
        </li>
      </ul>

      <h3>Technical Concept</h3>
      <p>
        Each plugin is loaded in its own isolate and may only access resources
        via secure wrappers. This ensures that a plugin can only perform actions
        it is authorized for. The architecture allows multiple plugins to run
        simultaneously and define their own API routes or WebSocket events.
      </p>

      <h3>Development Status</h3>
      <p>The Node Plugin System is actively under development, focusing on:</p>
      <ul className="list-disc ml-6">
        <li>Stable sandbox execution for many concurrently active plugins</li>
        <li>Fast and secure API extensions via Express</li>
        <li>RBAC-protected SQLite access per plugin</li>
        <li>Marketplace integration for updates and installation</li>
        <li>Inter-plugin communication via event bus</li>
      </ul>

      <h3>Planned Release</h3>
      <p>
        Once development is complete, the system will be released as an
        open-source project, including plugin examples, marketplace integration,
        TypeScript types, and security documentation. It is currently part of a
        larger software ecosystem.
      </p>

      <h4>Vision</h4>
      <p>
        The goal is a universal Node.js plugin framework that works locally,
        securely, and modularly. Developers can create, extend, and distribute
        plugins while keeping the main application stable, performant, and safe.
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

export default NodeJsPluginSystemArticle;
