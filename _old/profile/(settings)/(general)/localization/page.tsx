'use client';

import {
  SettingsMenuPage,
  SettingsMenuPageItem,
} from '@/components/general-components/settings-menu/settings-menu-page-utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DynamicIcon } from '@/components/utils/icons';
import { languages, Locale, routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import { Minus, Upload } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useFormContext } from 'react-hook-form';

const ProfileLocalizationPage = () => {
  const locale = useLocale();

  const form = useFormContext();
  // const { isLoaded, isSignedIn, user } = useUser();

  const createSelectItems = () => {
    return routing.locales.map((local: Locale) => (
      <SelectItem key={local} value={local}>
        <DynamicIcon countryCode={local} iconProps={{ className: 'w-[16px] h-[16px] align-middle' }} />
        {languages.find(([lang]) => lang === local)?.[1]}
      </SelectItem>
    ));
  };

  // if (!isLoaded || !isSignedIn) return;

  return (
    <SettingsMenuPage
      headerLabel='Sprache & Zeitzone'
      headerDescription='Wähle deine bevorzugte Sprache und Zeitzone aus.'
    >
      <SettingsMenuPageItem label='Region / Sprache' className=''>
        <FormField
          control={form.control}
          name='locale'
          render={({ field }) => (
            <FormItem>
              {/* <FormControl>
                <Input placeholder='Wähle ein Land & eine Sprache' className='w-[348px]' {...field} />
              </FormControl> */}

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className='w-[348px]'>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a verified email to display' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {/* <SelectItem value='m@example.com'>m@example.com1</SelectItem>
                  <SelectItem value='m@google.com'>m@google.com2</SelectItem>
                  <SelectItem value='m@support.com'>m@support.com3</SelectItem> */}

                  {createSelectItems()}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
      </SettingsMenuPageItem>
      {/* <SettingsMenuPageItem label='Zeitzone'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Wähle deine Zeitzone' className='w-[348px]' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </SettingsMenuPageItem> */}
    </SettingsMenuPage>
  );
};
export default ProfileLocalizationPage;
