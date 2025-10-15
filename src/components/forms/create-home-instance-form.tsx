import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCreateHomeInstance } from '@/hooks/use-create-home-instance';
import { useEffect, useState } from 'react';

const CreateHomeInstanceForm = ({ closeModal }: { closeModal: Function }) => {
  const { errors, isPending, onFormSubmit, register, form } = useCreateHomeInstance();

  const [finished, setFinished] = useState(false);

  const customSubmit = async (e?: React.BaseSyntheticEvent) => {
    await onFormSubmit(e);

    setFinished(true);
  };

  useEffect(() => {
    if (finished && !isPending) {
      closeModal();
    }
  }, [isPending, finished]);

  return (
    <Form {...form}>
      <form onSubmit={customSubmit} className='flex flex-col gap-y-6 py-6'>
        {/* <FormGenerator
        register={register}
        name='name'
        placeholder='Workspace Name'
        label='Name'
        errors={errors}
        inputType='input'
        type='text'
      /> */}

        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input {...field} placeholder='Name' type='text' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className='text-sm w-full mt-2' type='submit' disabled={isPending}>
          {/* <Loader state={isPending}>Create Workspace</Loader> */}
          Smarthome erstellen
        </Button>
      </form>
    </Form>
  );
};
export default CreateHomeInstanceForm;
