"use client";

import SignUpForm from "../../../components/pages/auth/sign-up-form";
import { SignUp } from "@clerk/nextjs";
import { useLocale, useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";
import { useTheme } from "next-themes";

const Page = () => {
  const { theme } = useTheme();
  const locale = useLocale();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* <SignUpForm /> */}

      <SignUp unsafeMetadata={{ locale, theme }} />
    </div>
  );
};
export default Page;
