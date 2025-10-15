'use client';

import {
  SettingsMenuPage,
  SettingsMenuPageItem,
} from '@/components/general-components/settings-menu/settings-menu-page-utils';
import { Card, CardContent } from '@/components/ui/card';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import lightThemeSelect from '@/../public/assets/light.png';
import darkThemeSelect from '@/../public/assets/dark.png';
import systemThemeSelect from '@/../public/assets/system.png';
import { Input } from '@/components/ui/input';

const SessionsPage = () => {
  const form = useFormContext();

  return (
    <SettingsMenuPage headerLabel='Theme / Design' headerDescription='Wähle dein bevorzugtes App Design aus.'>
      <SettingsMenuPageItem label='Zeitzone'>
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
      </SettingsMenuPageItem>
    </SettingsMenuPage>
  );
};
export default SessionsPage;
