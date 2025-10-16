"use client";

import { IconCloud } from "@/components/magicui/icon-cloud";
import { TechStackCloud } from "@/components/pages/landing-page/tech-stack-cloud";
import GlowCard from "@/components/pages/skills-page/glow-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import doodleArrowIcon from "@/../public/assets/doodle-arrow.svg";
import { DoodleArrowIcon } from "@/components/pages/skills-page/doodle-arrow-icon";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AppsPage = () => {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="mx-auto w-7xl h-screen flex py-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full flex flex-row justify-between"
        >
          <div className="w-[440px] flex flex-col justify-around">
            <GlowCard
              key={"card1"}
              variants={cardVariants}
              className="w-sm ml-auto h-36"
            >
              <CardHeader>
                <CardTitle>Tech Skills</CardTitle>
                <CardDescription>
                  Seit 2-3 Jahren arbeite ich aktiv mit JavaScript bzw.
                  TypeScript, sowohl im Frontend als auch im Backend. Davor habe
                  ich einige Jahre Erfahrung mit OOP in C# gesammelt und
                  gestartet hat die Reise mit Java.
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </GlowCard>
            <GlowCard
              key={"card2"}
              variants={cardVariants}
              className="w-sm mr-auto h-36 relative"
            >
              <CardHeader>
                <CardTitle>Projekte</CardTitle>
                <CardDescription>
                  Aktuell arbeite ich an einem Fullstack Smart-Home System, das
                  bald Open Source verfügbar sein wird. Dazu erste Versuche mit
                  mobilen Apps sowie diverse Web-, Desktop- und experimentelle
                  Projekte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={"/projects"}
                  className="absolute bottom-2 right-3 h-6 transition-colors flex flex-row gap-1 items-center text-text/60 hover:text-accent"
                >
                  <p className="text-sm">Mehr</p>
                  <ArrowRight size={16} />
                </Link>
              </CardContent>
            </GlowCard>
            <GlowCard
              key={"card3"}
              variants={cardVariants}
              className="w-sm ml-auto h-36"
            >
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
                <CardDescription>
                  Teamwork und Kommunikation liegen mir - ich arbeite gerne
                  gemeinsam an Projekten. Probleme packe ich kreativ an und bin
                  immer motiviert, Neues zu lernen und Herausforderungen zu
                  meistern.
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </GlowCard>
          </div>
          <div className="w-[440px] flex flex-col justify-around">
            <GlowCard
              key={"card4"}
              variants={cardVariants}
              className="w-sm mr-auto h-36"
            >
              <CardHeader>
                <CardTitle>Kreative Skills</CardTitle>
                <CardDescription>
                  Kreativ in UI/UX Design - liebe es, Interfaces in Figma zum
                  Leben zu erwecken. Spielerisch mit Animationen und
                  interaktiven Projekten experimentieren
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </GlowCard>
            <GlowCard
              key={"card5"}
              variants={cardVariants}
              className="w-sm ml-auto h-36"
            >
              <CardHeader>
                <CardTitle>Learning</CardTitle>
                <CardDescription>
                  Immer neugierig und motiviert zu lernen - aktuell Deep Dive in
                  IoT Device Communication über Sockets und MQTT sowie neue
                  JS-Frameworks.
                  <br />
                  TypeScript wird dabei ständig weiter vertieft.
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </GlowCard>
            <GlowCard
              key={"card6"}
              variants={cardVariants}
              className="w-sm mr-auto h-36"
            >
              <CardHeader>
                <CardTitle>Fun / Extras</CardTitle>
                <CardDescription>
                  Open Source, kleine Experimente und Gaming-Projekte gehören zu
                  meinen Hobbys. Liebe es, kreative Ideen auszuprobieren und
                  spielerisch Neues zu entwickeln.
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </GlowCard>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-1/2 size-[400px]">
        <TechStackCloud />
      </div>

      <div className="absolute top-[37%] left-[37%]">
        <DoodleArrowIcon />
      </div>
    </div>
  );
};
export default AppsPage;
