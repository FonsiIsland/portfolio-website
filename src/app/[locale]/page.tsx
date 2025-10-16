"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/magicui/aurora-text";
// import { useAuthenticatedAxios } from "@/hooks/use-authenticated-axios";
// import { useSession, SessionProvider, signOut, signIn } from "next-auth/react";
import { useEffect } from "react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { LightRays } from "@/components/ui/light-rays";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { TechStackCloud } from "@/components/pages/landing-page/tech-stack-cloud";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  // const { getToken } = useAuth();

  // const axios = useAuthenticatedAxios();

  // const session = useSession();

  // useEffect(() => {
  //   console.log(session);
  // }, [session]);

  const fetchData = async () => {
    try {
      // const token = await getToken();
      // const response = await fetch('http://localhost:5000/api/v1/user/settings', {
      //   method: 'GET',
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     'Content-Type': 'application/json',
      //   },
      // });
      // console.log(response);
      // console.log(await response.text());
      // const result = await response.json();
      // console.log(result);
    } catch (error) {
      console.error("Fehler beim Laden:", error);
    } finally {
    }
  };

  const t = useTranslations("HomePage");
  return (
    // <div className='pt-20'>
    //   <h1>{t('title')}</h1>
    //   <Link href='/about'>{t('about')}</Link>

    //   <Button>Click me</Button>
    //   <ThemeToggler />
    //   <OldLanguageSwitcher />
    // </div>

    <main className="w-screen h-screen">
      <div className="mx-auto w-7xl h-screen flex pt-40">
        <div className="w-full h-[500px] flex flex-row justify-between items-center">
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <p className="text-7xl font-bold">
                Hi! I'm <AuroraText>Stefan</AuroraText>,
              </p>

              {/*  // Hey! Ich bin Stefan - Hi! Ich mein Name ist Stefan*/}
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
              {/* Fullstack Developer mit Fokus auf Design, Struktur und
              Performance. Ich verbinde visuelle Klarheit mit technischer
              Präzision.
              <br />
              Mein Anspruch: digitale Produkte, die inspirieren und zuverlässig
              sind. */}
              Fullstack Developer focused on design, structure, and performance.
              I combine visual clarity with technical precision.
              <br />
              My goal: digital products that inspire and deliver reliability.
            </p>
            <InteractiveHoverButton
              className="w-fit mt-6"
              onClick={() => router.push("/contact")}
            >
              Contact Me
            </InteractiveHoverButton>
          </div>

          <div className="size-[500px] border">
            <TechStackCloud />
          </div>
        </div>

        {/* <div className="w-fit h-fit flex flex-col gap-2 items-center justify-center">
        <span className="text-8xl">Comfort deserves an</span>
        <AuroraText className="text-8xl font-semibold">Upgrade</AuroraText>
        <Button
          onClick={() => {
            fetchData();
          }}
        >
          HELLO TEST FETCH
        </Button>

        {/* <Button onClick={() => signIn("keycloak")}>
          sign in with keycloak
        </Button>

        <p>Welcome {session?.data?.user?.name}</p>
        <p>{JSON.stringify(session)}</p>

        <Button onClick={() => signOut()}>sign in with keycloak</Button> * /}
      </div> */}
      </div>
    </main>
  );
};

export default HomePage;
