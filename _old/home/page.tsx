import HomeInstanceOverview from "../components/pages/home/home-instance-overview";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CalendarFold,
  ChartNoAxesCombined,
  CircleUser,
  Users,
} from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <ScrollArea className="h-[calc(100%-80px)] mt-[80px] w-full">
        <div className="flex flex-row justify-center items-center">
          <div className="w-[1190px] h-fit min-h-56 flex flex-col gap-4 py-[60px]">
            <div className="w-full h-[64px] flex flex-row gap-8 items-center">
              <span className="text-4xl font-bold">Deine Homes</span>
              <span className="text-2xl font-bold text-card-foreground-v-3">
                6/12
              </span>
            </div>
            <div className="w-[1150px] mx-auto h-auto">
              <HomeInstanceOverview />
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
export default HomePage;
