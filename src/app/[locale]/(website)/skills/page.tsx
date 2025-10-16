import { IconCloud } from "@/components/magicui/icon-cloud";
import { TechStackCloud } from "@/components/pages/landing-page/tech-stack-cloud";
import { Card, CardContent } from "@/components/ui/card";

const AppsPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="size-[400px]">
        <TechStackCloud />
      </div>
    </div>
  );
};
export default AppsPage;
