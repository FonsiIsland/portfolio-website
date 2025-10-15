"use client";

import SettingsMenu from "@/components/general-components/settings-menu/settings-menu";
import { profileLinks } from "./profile-links";
import { Locale } from "@/i18n/routing";
import { UserProfileSettingsSchema } from "@/schemas";
import { useAuth, useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { useLocale } from "next-intl";
import * as z from "zod";
import { UserResource } from "@clerk/types";
import { useAuthenticatedAxios } from "@/hooks/use-authenticated-axios";
import { useQueryData } from "@/hooks/use-query-data";
import { getUserSettings } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/utils/loading-spinner";

const UserProfileSettingsMenu = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data, isPending, refetch } = useQuery({
    queryKey: ["user-profile-settings"],
    queryFn: () => getUserSettings(),
  });

  if (isPending)
    return (
      <LoadingSpinner className="absolute top-[50%] left-[50%] -translate-[50%] size-16" />
    );

  const defaultValues = data.data as z.infer<typeof UserProfileSettingsSchema>;

  const handleSaveData = (data: z.infer<typeof UserProfileSettingsSchema>) => {
    console.log(data);

    const diffs = checkDiffs(defaultValues, data);

    //const updateObj: Record<string, any> = { unsafeMetadata: {} };

    Object.entries(diffs).forEach(([key, change]) => {
      if (change) {
        const handler =
          handlers[key as keyof z.infer<typeof UserProfileSettingsSchema>];
        if (handler) {
          // handler(change as any, updateObj as any, user);
          console.log("would handle");
        } else {
          //console.log(`Kein spezieller Handler für ${key}, Standard speichern`);
          //console.log(key, 'From: ' + change.from, 'To: ' + change.to);

          //updateObj.unsafeMetadata[key] = change.to;
          console.log(key);

          // image & email problem lösen ? Wie mach ich das mit dem clerk image?
        }
      }
    });

    // console.log(diffs);

    // console.log(updateObj);

    console.log(diffs);

    if (Object.keys(diffs).length !== 0) {
      //user.update({ ...updateObj });
      console.log("would save settings");
    } else {
      console.log("no diffs");
    }
  };

  return (
    <SettingsMenu
      backLink="/"
      label={
        defaultValues.firstName + " " + defaultValues.lastName || "Loading ..."
      }
      prePath={`/profile`}
      settingsLinks={profileLinks}
      formSchema={UserProfileSettingsSchema}
      defaultValues={defaultValues}
      handleSubmit={(data: z.infer<typeof UserProfileSettingsSchema>) =>
        handleSaveData(data)
      }
    >
      {children}
    </SettingsMenu>
  );
};
export default UserProfileSettingsMenu;

type Difference<T> = {
  [K in keyof T]?: { from: T[K] | undefined; to: T[K] | undefined };
};

const checkDiffs = <T extends object>(obj1: T, obj2: T): Difference<T> => {
  const diffs = {} as Difference<T>;

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      diffs[key] = { from: obj1[key], to: obj2[key] };
    }
  }

  return diffs;
};

type ChangeHandlerMap<T> = {
  [K in keyof T]?: (
    change: { from: T[K]; to: T[K] },
    updateObj: { [key in keyof T]: T[key] },
    user: UserResource
  ) => void;
};

const handlers: ChangeHandlerMap<z.infer<typeof UserProfileSettingsSchema>> = {
  firstName: ({ from, to }, updateObj) => {
    //console.log(`Fistname speichern: ${from} → ${to}`);

    updateObj.firstName = to;
  },
  lastName: ({ from, to }, updateObj) => {
    //console.log(`Lastname speichern: ${from} → ${to}`);

    updateObj.lastName = to;
  },
  username: ({ from, to }, updateObj) => {
    //console.log(`Nutzername speichern: ${from} → ${to}`);

    updateObj.username = to;
  },
  profileImage: ({ from, to }, updateObj, user) => {
    //console.log(`Profilebild speichern: ${from} → ${to}`);

    if (to === "removeImage") {
      user.setProfileImage({ file: null });
    } else {
      if (to) user.setProfileImage({ file: to });
    }

    // set user profile pic
  },
};
