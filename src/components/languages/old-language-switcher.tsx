'use client';

import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { getPathname, usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { Locale, routing } from '@/i18n/routing';
import { DynamicIcon } from '@/components/utils/icons';

export function OldLanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const createSelectItems = () => {
    return routing.locales.map((local: Locale) => (
      <SelectItem key={local} value={local}>
        <div className='flex item-center space-x-3'>
          <div className={cn('rounded-full', 'w-[20px]', 'h-[20px]')}>
            <DynamicIcon countryCode={local} iconProps={{ className: 'w-[20px] h-[20px] align-middle' }} />
          </div>
          <div className='text-sm'>{local.toUpperCase()}</div>
        </div>
      </SelectItem>
    ));
  };

  const onSelectChange = (nextLocale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  };

  return (
    <Select onValueChange={(value) => onSelectChange(value)} defaultValue={locale}>
      <SelectTrigger className='w-[140px] ring-offset-transparent focus:ring-transparent'>
        <SelectValue placeholder='Select Color' />
      </SelectTrigger>
      <SelectContent className='border-muted'>{createSelectItems()}</SelectContent>
    </Select>
  );
}
