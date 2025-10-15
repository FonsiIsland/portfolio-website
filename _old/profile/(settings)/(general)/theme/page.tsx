'use client';

import {
  SettingsMenuPage,
  SettingsMenuPageItem,
} from '@/components/general-components/settings-menu/settings-menu-page-utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DynamicIcon } from '@/components/utils/icons';
import { languages, Locale, routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Minus, Moon, Sun, SunMoon, Upload } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Imperial_Script } from 'next/font/google';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import lightThemeSelect from '@/../public/assets/light.png';
import darkThemeSelect from '@/../public/assets/dark.png';
import systemThemeSelect from '@/../public/assets/system.png';

const ProfileThemePage = () => {
  const form = useFormContext();
  //   const { isLoaded, isSignedIn, user } = useUser();

  //   if (!isLoaded || !isSignedIn) return;

  return (
    <SettingsMenuPage headerLabel='Theme / Design' headerDescription='Wähle dein bevorzugtes App Design aus.'>
      <SettingsMenuPageItem align='vertical' label='Design' description='Ändere die Anzeigeeinstellung für die App'>
        <FormField
          control={form.control}
          name='theme'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup.Root
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-row justify-between h-[222px]'
                >
                  <FormItem>
                    <FormControl>
                      <RadioGroup.Item value='light' className='group'>
                        <Card className='h-full w-[276px] p-0 items-start border-2 transition-colors group-data-[state=checked]:border-unique2 overflow-hidden'>
                          <CardContent className='w-full h-full p-0'>
                            <div className='h-[calc(100%-52px)] w-full bg-card-v-1 relative'>
                              <Image
                                src={lightThemeSelect}
                                width={201}
                                height={140}
                                alt='selection-img'
                                className='absolute right-0 bottom-0'
                              />
                            </div>

                            <div className='h-[52px] w-full bg-card flex gap-1.5 items-center px-3'>
                              <Sun className='size-4' />
                              <span className='text-foreground text-base'>Hell</span>
                            </div>
                          </CardContent>
                        </Card>
                      </RadioGroup.Item>
                    </FormControl>
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <RadioGroup.Item value='dark' className='group'>
                        <Card className='h-full w-[276px] p-0 items-start border-2 transition-colors group-data-[state=checked]:border-unique2 overflow-hidden'>
                          <CardContent className='w-full h-full p-0'>
                            <div className='h-[calc(100%-52px)] w-full bg-card-v-1 relative'>
                              <Image
                                src={darkThemeSelect}
                                width={201}
                                height={140}
                                alt='selection-img'
                                className='absolute right-0 bottom-0'
                              />
                            </div>

                            <div className='h-[52px] w-full bg-card flex gap-1.5 items-center px-3'>
                              <Moon className='size-4' />
                              <span className='text-foreground text-base'>Dunkel</span>
                            </div>
                          </CardContent>
                        </Card>
                      </RadioGroup.Item>
                    </FormControl>
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <RadioGroup.Item value='system' className='group'>
                        <Card className='h-full w-[276px] p-0 items-start border-2 transition-colors group-data-[state=checked]:border-unique2 overflow-hidden'>
                          <CardContent className='w-full h-full p-0'>
                            <div className='h-[calc(100%-52px)] w-full bg-card-v-1 relative'>
                              <Image
                                src={systemThemeSelect}
                                width={201}
                                height={140}
                                alt='selection-img'
                                className='absolute right-0 bottom-0'
                              />
                            </div>

                            <div className='h-[52px] w-full bg-card flex gap-1.5 items-center px-3'>
                              <SunMoon className='size-4' />
                              <span className='text-foreground text-base'>Automatisch</span>
                            </div>
                          </CardContent>
                        </Card>
                      </RadioGroup.Item>
                    </FormControl>
                  </FormItem>
                </RadioGroup.Root>
              </FormControl>
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
export default ProfileThemePage;
