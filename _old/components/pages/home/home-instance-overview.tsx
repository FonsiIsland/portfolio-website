"use client";

import { getHomeInstances } from "@/actions/home-instance";
import { ShineBorder } from "@/components/magicui/shine-border";
import HomeInstanceCard from "./home-instance-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQueryData } from "@/hooks/use-query-data";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const HomeInstanceOverview = () => {
  const { data, isFetched } = useQueryData(
    ["user-home-instances"],
    getHomeInstances
  );

  return (
    <div className="flex flex-wrap gap-8 w-[1150px]">
      <Link href="/home/newhome">
        <Card className="w-[362px] h-[260px] relative -z-10 overflow-hidden rounded-4xl border-none hover:bg-card-v-1 cursor-pointer transition-colors">
          <ShineBorder
            shineColor={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}
            borderWidth={6}
            duration={20}
          />
          <CardContent className="size-full flex items-center justify-center text-center ">
            <span className="text-3xl font-medium">
              Neues Smarthome erstellen
            </span>
          </CardContent>
        </Card>
      </Link>

      {isFetched ? (
        data?.data &&
        data.data.homeInstance.map((homeInstance, index) => (
          <HomeInstanceCard
            key={homeInstance.id}
            data={homeInstance}
            animationDelay={index * 0.1}
          />
        ))
      ) : (
        <>
          <Skeleton className="w-[350px] h-[240px] rounded-3xl" />
          <Skeleton className="w-[350px] h-[240px] rounded-3xl" />
          <Skeleton className="w-[350px] h-[240px] rounded-3xl" />
        </>
      )}

      {/* <p>SPLIT</p>
      {data?.data && data.data.members.map((member) => <p key={member.homeInstance?.id}>{member.homeInstance?.id}</p>)} */}
    </div>
  );
};
export default HomeInstanceOverview;
