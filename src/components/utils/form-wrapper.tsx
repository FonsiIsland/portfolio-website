'use client';

import { TestSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';

const FormWrapper = ({
  children,
  formSchema,
  handleSubmit,
}: {
  children: React.ReactNode;
  formSchema?: z.ZodSchema;
  handleSubmit?: (data: z.infer<typeof TestSchema>) => void;
}) => {
  const form = useForm<z.infer<typeof TestSchema>>({
    resolver: zodResolver(TestSchema),
    defaultValues: {},
  });

  const onSubmit = async (data: z.infer<typeof TestSchema>) => {
    // if (!isSignedIn || !isLoaded || !isSignedIn) return;

    //handleSubmit(data);

    console.log(data);

    // const resp = await user.update({
    //   username: data.username,
    // });

    // console.log('updated successfully: ');
    // console.log(resp);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};
export default FormWrapper;
