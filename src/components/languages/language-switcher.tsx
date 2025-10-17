"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { languages, Locale, routing } from "@/i18n/routing";
import { DynamicIcon } from "@/components/utils/icons";
import { ReactNode } from "react";

const LanguageSwitcher = ({
  triggerComp,
  className,
}: {
  triggerComp: ReactNode;
  className?: string;
}) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const createSelectItems = () => {
    return routing.locales.map((local: Locale) => (
      <DropdownMenuItem
        key={local}
        className={cn(locale === local ? "bg-accent/10" : "")}
        onClick={() => onSelectChange(local)}
      >
        <DynamicIcon
          countryCode={local}
          iconProps={{ className: "w-[16px] h-[16px] align-middle" }}
        />
        {languages.find(([lang]) => lang === local)?.[1]}
      </DropdownMenuItem>
    ));
  };

  const onSelectChange = (nextLocale: any) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{triggerComp}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={cn("flex flex-col gap-1 border-text/10", className)}
      >
        {createSelectItems()}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LanguageSwitcher;
