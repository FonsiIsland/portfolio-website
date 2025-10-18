import ArticleEntry from "@/components/utils/article-entry";
import Link from "next/link";
import React from "react";

const PortfolioArticle = () => {
  return (
    <ArticleEntry>
      <h1>Portfolio Launch 🚀</h1>

      <h2>My new portfolio website is live!</h2>

      <p>
        After intensive work, my new portfolio website is finally online! On the
        site, you&apos;ll find an overview of my current projects, past work,
        and creative solutions.
      </p>

      <p>
        The site was built with <strong>Next.js</strong> for fast performance,
        <strong>Tailwind CSS</strong> for flexible styling,{" "}
        <strong>Framer Motion</strong> for animations, and{" "}
        <strong>Three.js</strong> for 3D visualizations.
      </p>

      <p>
        Check out interactive projects, animated transitions, and modern UI
        components that showcase how I combine technology and design.
        {/* The website is fully optimized for both desktop and mobile. */}
      </p>

      <p>
        For more details about these or other projects, feel free to visit my{" "}
        <Link
          href="/projects"
          className="underline cursor-pointer text-text/60"
        >
          Projects
        </Link>{" "}
        page!
      </p>
    </ArticleEntry>
  );
};

export default PortfolioArticle;
