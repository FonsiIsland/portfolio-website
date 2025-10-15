'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TestSchema } from '@/schemas';
import { useSessionList, useUser } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const UserProfilePage = () => {
  //   const user = useUser();
  const { isLoaded, isSignedIn, user } = useUser();

  // const { isLoaded, sessions } = useSessionList();

  const form = useForm<z.infer<typeof TestSchema>>({
    resolver: zodResolver(TestSchema),
    defaultValues: {
      username: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof TestSchema>) => {
    if (!isSignedIn || !isLoaded || !isSignedIn) return;

    console.log(data);

    const resp = await user.update({
      username: data.username,
    });

    console.log('updated successfully: ');
    console.log(resp);
  };

  if (!isSignedIn || !isLoaded || !isSignedIn) return;

  //   console.log(JSON.stringify(sessions));

  return (
    <div className='h-screen w-screen overflow-hidden flex items-center justify-center'>
      <Card>
        <CardHeader>Test</CardHeader>

        <CardContent>
          <p>{user?.firstName}</p>
          <p>{user?.lastName}</p>
          <p>{user?.username}</p>

          <div className='size-12 rounded-full overflow-hidden flex items-center justify-center'>
            <Image
              src={user?.imageUrl || ''}
              alt='Profile Pic'
              width={48}
              height={48}
              className='object-cover w-full h-full'
            />
          </div>

          <div className='w-52'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
                <FormField
                  control={form.control}
                  name='username'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder='shadcn' {...field} />
                      </FormControl>
                      <FormDescription>This is your public display name.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type='submit'>Submit</Button>
              </form>
            </Form>
          </div>

          {/* <Avatar>
            <AvatarImage src={user?.imageUrl || ''} alt='profile pic' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}

          {/* {user} */}
        </CardContent>
      </Card>
    </div>
  );
};
export default UserProfilePage;
