import ArticleEntry from "@/components/utils/article-entry";
import { Github, Globe2, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import React from "react";

const VotifyArticleEN = () => {
  return (
    <ArticleEntry>
      <h1>Votify — Open Source Live Polling 🚀</h1>

      <h2>Making real-time interactive polls easy and fun</h2>
      <p>
        I&apos;m excited to introduce <strong>Votify</strong>, an open-source
        platform for live polls and interactive surveys. With Votify, users can
        quickly create polls, share them via QR code or join code, and see
        results in real-time with beautiful visualizations.
      </p>

      <h3>Perfect for schools, events & workshops</h3>
      <p>
        Votify is ideal for a variety of use cases:
        <ul className="list-disc pl-5 mt-2">
          <li>📚 Schools & universities</li>
          <li>🎤 Live streams & events</li>
          <li>🧠 Workshops & meetings</li>
          <li>⭐ Collect quick feedback</li>
        </ul>
        Participants can vote without logging in, making it fast and accessible
        for everyone.
      </p>

      <h3>Features & Highlights</h3>
      <p>
        Some of Votify&apos;s key features include:
        <ul className="list-disc pl-5 mt-2">
          <li>📊 Real-time result visualization</li>
          <li>🔢 Single and multiple-choice questions</li>
          <li>📝 Free-text responses</li>
          <li>📱 QR code join system</li>
          <li>🖥️ Presentation mode for big screens</li>
          <li>🔐 Protected admin dashboard</li>
          <li>
            🎨 Modern, clean UI with <strong>Framer Motion</strong> animations
          </li>
          <li>🔄 Mostly responsive and mobile-friendly</li>
        </ul>
      </p>

      <h3>Tech Stack</h3>
      <p>
        Votify is built with a modern full-stack setup:
        <ul className="list-disc pl-5 mt-2">
          <li>
            <strong>Frontend:</strong> Next.js 15, React, TypeScript, Tailwind
            CSS, shadcn/ui, Framer Motion
          </li>
          <li>
            <strong>Backend:</strong> Next.js Server Actions, Prisma ORM
          </li>
          <li>
            <strong>Database:</strong> MongoDB
          </li>
          <li>
            <strong>Auth & Validation:</strong> Auth.js, Zod
          </li>
          <li>
            <strong>Data fetching:</strong> React Query
          </li>
          <li>
            <strong>Charts & Visualization:</strong> Recharts
          </li>
        </ul>
      </p>

      <p>
        Contributions are welcome! 🙌 Whether it&apos;s bug fixes, new features,
        or UI/UX improvements — open an issue or submit a pull request.
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
          Contact me
        </Link>
      </div>
    </ArticleEntry>
  );
};

export default VotifyArticleEN;
