'use client';

import {
  SettingsMenuPage,
  SettingsMenuPageItem,
} from '@/components/general-components/settings-menu/settings-menu-page-utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useUser } from '@clerk/nextjs';
import { Minus, Upload } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const ProfileInformationPage = () => {
  const MAX_FILE_SIZE = 10 * 1024 * 1024;
  const form = useFormContext();
  const { isLoaded, isSignedIn, user } = useUser();

  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!form.formState.isSubmitted && !form.formState.isDirty) {
      console.log('triggered');

      if (preview) {
        if (form.getValues('profileImage') !== undefined) {
          // console.log('Submitete keep prev');
        } else {
          // console.log('clear prev');
          setPreview(null);
          fileRef.current && (fileRef.current.value = '');
        }
      }
    }
  }, [form.formState.isDirty]);

  if (!isLoaded || !isSignedIn) return;

  const openPicker = () => fileRef.current?.click();

  const toBase64 = (file: File) =>
    new Promise<string>((res, rej) => {
      const reader = new FileReader();
      reader.onload = () => res(reader.result as string);
      reader.onerror = () => rej(reader.error);
      reader.readAsDataURL(file);
    });

  const handleImageFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    console.log('TRIGGERED');

    console.log(file);

    if (!file) {
      form.setValue('profileImage', undefined, { shouldValidate: true, shouldDirty: true });
      form.clearErrors('profileImage');
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      form.setError('profileImage', { type: 'maxLength', message: 'File size is too large.' });
      return;
    }

    const b64 = await toBase64(file);
    form.setValue('profileImage', b64, { shouldValidate: true, shouldDirty: true });

    const check = await form.trigger('profileImage');
    if (check) setPreview(b64);
  };

  const handleRemoveImage = () => {
    setPreview('removeImage');
    fileRef.current && (fileRef.current.value = '');
    form.setValue('profileImage', 'removeImage', { shouldValidate: true, shouldDirty: true });
  };

  return (
    <SettingsMenuPage
      headerLabel='Profil Informationen'
      headerDescription='Hier kannst du allgemeine Einstellungen deines Kontos vornehmen'
    >
      <SettingsMenuPageItem
        label='Profilbild'
        description='Ändere dein Profilbild - Am besten im Format 1:1 - max 10MB'
      >
        <div className='size-12 rounded-full overflow-hidden flex items-center justify-center cursor-pointer'>
          {preview !== 'removeImage' ? (
            <Image
              src={preview || user?.imageUrl || ''}
              alt='Profile Pic'
              width={48}
              height={48}
              className='object-cover w-full h-full'
            />
          ) : (
            <Avatar className='size-12 bg-[#46bd2e]'>
              <AvatarFallback className='bg-transparent text-lg tracking-normal text-[#fff]'>
                {Array.from(user.firstName?.toUpperCase() || 'A')[0]}
                {Array.from(user.lastName?.toUpperCase() || 'B')[0]}
              </AvatarFallback>
            </Avatar>
          )}
        </div>

        <FormField
          control={form.control}
          name='profileImage'
          render={({ field }) => (
            <FormItem className='relative'>
              <FormControl>
                <Button type='button' onClick={openPicker}>
                  <Upload />
                  Hochladen
                </Button>
              </FormControl>
              <FormMessage className='absolute -bottom-6 w-[200px]' />
            </FormItem>
          )}
        />

        <Input hidden type='file' accept='image/*' ref={fileRef} onChange={handleImageFileChange} />

        <Button type='button' onClick={handleRemoveImage} disabled={!user.hasImage} variant='destructive'>
          <Minus />
          Entfernen
        </Button>

        {/* <Button type='button' onClick={() => console.log(form.getValues(), preview, fileRef.current?.files)}>
          Test
        </Button> */}
      </SettingsMenuPageItem>
      <SettingsMenuPageItem label='Vor- & Nachname' className=''>
        <FormField
          control={form.control}
          name='firstName'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Vorname' className='w-[166px]' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='lastName'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Nachname' className='w-[166px]' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </SettingsMenuPageItem>
      <SettingsMenuPageItem label='Nutzername'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Nutzername' className='w-[348px]' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </SettingsMenuPageItem>
    </SettingsMenuPage>
  );
};
export default ProfileInformationPage;
