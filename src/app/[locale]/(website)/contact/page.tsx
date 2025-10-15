import ContactForm from "@/components/pages/contact-page/contact-form";
import CopyTextButton from "@/components/pages/contact-page/copy-text-button";
import { TechStackCloud } from "@/components/pages/landing-page/tech-stack-cloud";

const PricingPage = () => {
  return (
    <main className="w-screen h-screen">
      <div className="mx-auto w-7xl h-screen flex pt-40">
        <div className="w-full h-[500px] flex flex-row justify-between items-center">
          <div className="flex flex-col gap-8 w-[500px]">
            <p className="text-7xl font-bold">Let's get In Touch!</p>

            <p className="text-base text-card-foreground-v-1">
              I'm excited about interesting projects, collaborations, or just a
              friendly exchange. Feel free to send me a message - I'll get back
              to you as soon as possible!
            </p>

            <p className="text-base text-card-foreground-v-1">
              Or just reach out manually to{" "}
              <CopyTextButton text="stefanb05.portfolio@gmail.com" />
            </p>
          </div>

          <div className="w-[600px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );

  // Ich freue mich über spannende Projekte, Kooperationen oder einfach einen netten Austausch. Schreib mir gerne eine Nachricht – ich melde mich so schnell wie möglich!
};
export default PricingPage;
