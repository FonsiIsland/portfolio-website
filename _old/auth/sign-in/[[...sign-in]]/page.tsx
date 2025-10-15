import SignInForm from "../../../components/pages/auth/sign-in-form";
import { SignIn, SignUp } from "@clerk/nextjs";
import { useTranslations } from "next-intl";

const Page = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SignInForm />
    </div>
  );
};
export default Page;
