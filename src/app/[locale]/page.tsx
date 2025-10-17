"use client";

import { useTranslations } from "next-intl";
import { AuroraText } from "@/components/magicui/aurora-text";
import { useEffect } from "react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { TechStackCloud } from "@/components/pages/landing-page/tech-stack-cloud";
import { useRouter } from "next/navigation";
import ModelRenderer from "@/components/pages/landing-page/model-renderer";

const HomePage = () => {
  const router = useRouter();
  const t = useTranslations("pages.homePage");
  const tButton = useTranslations("labels.button");

  return (
    <main className="w-screen h-screen">
      <div className="mx-auto w-7xl h-screen flex items-center">
        <div className="w-full h-[500px] flex flex-row justify-between items-center">
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <p className="text-7xl font-bold">
                {t("heroTitle")} <AuroraText>Stefan</AuroraText>,
              </p>
              <TypingAnimation
                words={[
                  "Fullstack Dev ⚡",
                  "Web Dev 🎨", // klassischer Entwickler-Look
                  "Api Designer 🔌", // Stecker für API-Verbindungen
                  "Backend Dev 🧩", // Puzzle für Backend-Logik
                ]}
                loop
                className="text-7xl font-bold"
                cursorStyle="underscore"
                pauseDelay={3400}
                typeSpeed={200}
                deleteSpeed={100}
              />
            </div>

            <p className="w-[600px] text-base font-light">
              {t.rich("heroSubtitle", { br: () => <br /> })}
            </p>
            <InteractiveHoverButton
              className="w-fit mt-6"
              onClick={() => router.push("/contact")}
            >
              {tButton("contact-me")}
            </InteractiveHoverButton>
          </div>

          <div className="size-[500px] border">
            <ModelRenderer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
