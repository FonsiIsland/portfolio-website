import ArticleEntry from "@/components/utils/article-entry";
import { Github, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import React from "react";

const ElectronPluginSystemArticle = () => {
  return (
    <ArticleEntry>
      <h1>Electron Plugin System 🧩</h1>

      <h2>
        A secure, flexible, and modular plugin framework for Electron apps
      </h2>
      <p>
        The <strong>Electron Plugin System</strong> is a framework I developed
        to extend Electron applications modularly. It allows downloading,
        verifying, installing, and seamlessly integrating plugins from a
        marketplace into the app&apos;s frontend.
      </p>
      <p>
        The goal is a reusable, secure, and scalable system that standardizes
        plugin development, installation, and management. Once the system is
        stable, it can be released as a standalone <strong>npm library</strong>,
        allowing developers to use it in their own Electron desktop
        applications.
      </p>

      <h3>Feature Overview</h3>
      <ul className="list-disc ml-6">
        <li>
          <strong>Modular plugin architecture:</strong> Plugins can be
          developed, installed, updated, or removed independently without
          affecting other parts of the app.
        </li>
        <li>
          <strong>Secure execution:</strong> Each plugin runs in an isolated{" "}
          <code>WebView</code>
          with sandboxing and context isolation, strictly controlling access to
          system resources and IPC.
        </li>
        <li>
          <strong>Cryptographic verification:</strong> Plugins are verified
          using SHA-256 hashes and digital signatures before execution.
        </li>
        <li>
          <strong>Frontend extension:</strong> Plugins have their own WebView
          where their UI is rendered, allowing them to extend the main UI
          without accessing sensitive app resources.
        </li>
        <li>
          <strong>Socket communication:</strong> Plugins can listen for socket
          messages sent by the backend controller and react accordingly.
        </li>
        <li>
          <strong>API access with RBAC:</strong> Plugins can only access shared
          API endpoints defined via role-based access control (RBAC).
        </li>
        <li>
          <strong>Asset management:</strong> Plugin assets are loaded via a
          secure <code>plugin-asset://</code> handler.
        </li>
        <li>
          <strong>Automatic monitoring:</strong> File watchers detect tampering
          in the plugin directory and disable unsafe plugins.
        </li>
        <li>
          <strong>Versioning & locking:</strong> Concurrent installations are
          locked, and active plugins cannot be accidentally deleted or
          overwritten.
        </li>
      </ul>

      <h3>Technologies & Frameworks</h3>
      <ul className="list-disc ml-6">
        <li>
          <code>Electron</code> - desktop environment for isolated plugin
          WebViews
        </li>
        <li>
          <code>Node.js</code> - backend logic and file operations
        </li>
        <li>
          <code>pino</code> - structured logging
        </li>
        <li>
          <code>tar</code> - secure plugin unpacking and archiving
        </li>
        <li>
          <code>crypto</code> - signature and hash verification
        </li>
        <li>
          <code>fs-extra</code> - enhanced file operations with promise support
        </li>
      </ul>

      <h3>Technical Concept</h3>
      <p>
        Each plugin is treated as an isolated unit. After downloading and
        unpacking, its signature and hash are verified. The plugin runs inside
        its own WebView and only has access to defined API endpoints and secure
        IPC channels. It can dynamically communicate with the backend via socket
        messages.
      </p>
      <p>
        The system actively monitors plugin integrity, prevents overload via
        rate-limiting, and protects the main app from tampering and security
        risks.
      </p>

      <h3>Current Development Status</h3>
      <ul className="list-disc ml-6">
        <li>
          Stable plugin management with installation, removal, and updates
        </li>
        <li>Sandboxed WebViews for secure plugin execution</li>
        <li>Fully implemented cryptographic signature and hash verification</li>
        <li>Secure IPC communication and socket integration active</li>
        <li>RBAC-restricted API access implemented</li>
      </ul>

      <h3>Planned Release</h3>
      <p>
        Once fully stabilized, the project will be released as{" "}
        <strong>open-source</strong>, including documentation, TypeScript types,
        and sample plugins to facilitate integration into custom Electron
        projects.
      </p>

      <h4>Vision</h4>
      <p>
        The goal is a universal, secure, and modular plugin system that allows
        developers to flexibly extend Electron apps. Developers should be able
        to create, distribute, and manage their own plugins with minimal effort,
        without compromising the security or stability of the main application.
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

export default ElectronPluginSystemArticle;
