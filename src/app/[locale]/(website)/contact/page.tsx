import ContactForm from "@/components/pages/contact-page/contact-form";
import CopyTextButton from "@/components/pages/contact-page/copy-text-button";
import { useTranslations } from "next-intl";

const PricingPage = () => {
  const t = useTranslations("pages.contactPage");
  return (
    <main className="w-screen h-screen">
      <div className="mx-auto w-7xl h-screen flex items-center">
        <div className="w-full h-[500px] flex flex-row justify-between items-center">
          <div className="flex flex-col gap-8 w-[500px]">
            <p className="text-7xl font-bold">{t("title")}</p>

            <p className="text-base font-light">{t("subtitle")}</p>

            <p className="text-base font-light">
              {t("manually")}{" "}
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
};
export default PricingPage;
