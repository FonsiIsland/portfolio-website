import ArticleEntry from "@/components/utils/article-entry";
import { Github, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import React from "react";

const PortfolioArticle = () => {
  return (
    <ArticleEntry>
      <h1>Portfolio Launch 🚀</h1>

      <h2>My New Portfolio Website is Live!</h2>
      <p>
        After intense work, my new portfolio website is finally online! It
        provides a comprehensive overview of my current projects, past work, and
        creative solutions. I focused on making the site clear and visually
        appealing so visitors can quickly get a sense of my style and working
        approach.
      </p>

      <h3>Technologies & Frameworks</h3>
      <p>
        The core of the website is <strong>Next.js</strong>, a modern
        React-based framework that enables server-side rendering and optimized
        performance. For styling, I use <strong>Tailwind CSS</strong>, combined
        with <strong>Framer Motion</strong> for smooth animations and{" "}
        <strong>Three.js</strong> for impressive 3D models and interactive
        visualizations.
      </p>

      <h3>Component Libraries & Reusability</h3>
      <p>
        To keep the UI clean and modern, I use well-known component libraries
        like <strong>shadcn/ui</strong> and <strong>MagicUI</strong>. These
        allow implementing reusable elements that are both functional and
        visually appealing without affecting the site's performance.
      </p>

      <h3>Design, Interactivity & User Experience</h3>
      <p>
        Beyond technology, design was a priority: a modern layout, animated
        transitions, and interactive 3D elements ensure visitors can navigate
        projects and experience content intuitively. The site is optimized for
        desktop, tablet, and mobile, guaranteeing a smooth and professional user
        experience.
      </p>

      <h4>Check it Out & Feedback Welcome!</h4>
      <p>
        Explore my latest projects, see how I tackle challenges, and how
        creative ideas are implemented. Feedback, suggestions, or a quick chat
        about exciting topics are always welcome!
      </p>

      <div className="flex gap-2 items-center justify-center mt-4 mb-2">
        <Github size={20} className="text-text/60" />
        <Link
          href={"https://github.com/FonsiIsland/portfolio-website"}
          target="_blank"
          className="underline cursor-pointer text-text/60"
        >
          Github Link
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

export default PortfolioArticle;
