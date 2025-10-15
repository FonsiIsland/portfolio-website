"use server";

import SettingsMenu from "@/components/general-components/settings-menu/settings-menu";
import { profileLinks } from "../components/pages/profile/profile-links";
import { Locale } from "@/i18n/routing";
import { UserProfileSettingsSchema } from "@/schemas";
import { useAuth, useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { useLocale } from "next-intl";
import * as z from "zod";
import { UserResource } from "@clerk/types";
import { useAuthenticatedAxios } from "@/hooks/use-authenticated-axios";
import UserProfileSettingsMenu from "../components/pages/profile/user-profile-settings-menu";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getUserSettings } from "@/lib/axios";

const layout = async ({ children }: { children: React.ReactNode }) => {
  // const axios = useAuthenticatedAxios();

  // const fetchData = async () => {
  //   const data = await axios.get('/api/v1/user/settings');

  //   if (data.status === 200) return data.data;
  //   return null;
  // };

  // const { isLoaded, isSignedIn, user } = useUser();

  // if (!isLoaded || !isSignedIn || !user) return;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["user-profile-settings"],
    queryFn: () => getUserSettings(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserProfileSettingsMenu>{children}</UserProfileSettingsMenu>
    </HydrationBoundary>
  );
};
export default layout;
