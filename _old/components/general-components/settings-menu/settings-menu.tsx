'use client';

import SettingsMenuItem from '@/components/general-components/settings-menu/settings-menu-item';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import ModifiedScrollArea from '@/components/utils/modified-scroll-area';
import { ChevronRight, CircleX } from 'lucide-react';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { useBlockNavigation } from '@/hooks/use-block-navigation';
import { routing } from '@/i18n/routing';
import SaveChangesModal, { ModalHandle } from '@/components/general-components/settings-menu/save-changes-model';

const SettingsMenu = ({
  children,
  label,
  backLink,
  prePath,
  settingsLinks,
  formSchema,
  defaultValues,
  handleSubmit,
}: {
  children: React.ReactNode;
  label: string;
  backLink: string;
  prePath: string;
  settingsLinks: {
    header: string;
    items: {
      label: string;
      path: string;
    }[];
  }[];
  formSchema: z.ZodSchema;
  defaultValues: z.infer<typeof formSchema>;
  handleSubmit: (data: z.infer<typeof formSchema>) => void;
}) => {
  const modalRef = useRef<ModalHandle>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onNavigateAttempt = (url: string) => {
    console.log('SHOW MODEL', 'block: ', url);

    modalRef.current?.openModal();
  };

  useBlockNavigation({
    shouldBlock: form.formState.isDirty,
    onNavigateAttempt,
    allowSubPath: '/profile',
    locales: routing.locales,
  });

  // useEffect(() => {
  //   console.log('rest form because successfull');
  // }, [form.formState.isSubmitSuccessful]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // if (!isSignedIn || !isLoaded || !isSignedIn) return;

    console.log('TRIGGWE SUBMIT');

    handleSubmit(data);
    // form.reset({ ...data, profileImage: undefined });

    form.reset(data);

    // const resp = await user.update({
    //   username: data.username,
    // });

    // console.log('updated successfully: ');
    // console.log(resp);
  };

  return (
    <div className='h-screen w-screen overflow-hidden'>
      <ModifiedScrollArea className='h-[calc(100vh-80px)] mt-[80px] w-full'>
        <div className='flex flex-row justify-center items-center '>
          <div className='w-[1190px] h-fit min-h-56 flex flex-col gap-4 py-[60px]'>
            <div className='w-full h-[64px] flex items-center justify-between'>
              <div className=' flex flex-row gap-4 items-center'>
                <span className='text-4xl font-bold'>{label}</span>
                <ChevronRight className='size-8 text-card-foreground-v-2' />
                <span className='text-3xl font-bold text-card-foreground-v-1'>Einstellungen</span>
              </div>
              <div className='size-fit'>
                <Link href={backLink}>
                  <CircleX className='size-12 text-card-foreground-v-1 hover:text-card-foreground-v-2 transition-colors' />
                </Link>
              </div>
            </div>

            <div className='w-[1150px] mx-auto h-auto flex flex-row gap-12'>
              <nav className='w-[220px] h-auto '>
                {/* <HomeInstanceSettingsNavbar homeInstanceId={homeInstanceId} /> */}
                <SettingsMenuItem prePath={prePath} settingsLinks={settingsLinks} />
              </nav>
              <div className='w-[882px] h-auto '>
                <FormProvider {...form}>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                      {children}
                      {/* <div className='absolute bottom-8 right-8 p-3 rounded-[18px] bg-card flex flex-row gap-3 items-center'> */}
                      <AnimatePresence>
                        {(form.formState.isDirty || true) && (
                          <motion.div
                            key='buttons'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className='absolute bottom-8 right-8 p-3 rounded-[18px] bg-card flex flex-row gap-3 items-center'
                          >
                            <span className='pr-3 text-base font-light leading-4 text-card-foreground-v-1'>
                              Änderungen Speichern?
                            </span>
                            <Button
                              variant='outline'
                              type='button'
                              disabled={!form.formState.isDirty}
                              onClick={() => form.reset(defaultValues)}
                            >
                              Verwerfen
                            </Button>
                            <Button type='submit' disabled={!form.formState.isDirty}>
                              Speichern
                            </Button>

                            <Button type='submit'>Speichern</Button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      {/* </div> */}
                    </form>
                  </Form>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </ModifiedScrollArea>
      <SaveChangesModal
        ref={modalRef}
        handleSubmit={form.handleSubmit(onSubmit)}
        handleDismiss={() => form.reset(defaultValues)}
      />
    </div>
  );
};
export default SettingsMenu;
