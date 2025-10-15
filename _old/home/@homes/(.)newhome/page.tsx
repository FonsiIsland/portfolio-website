'use client';

import CreateHomeInstanceForm from '@/components/forms/create-home-instance-form';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const NewHomePage = () => {
  const router = useRouter();
  const [isOpen, setisOpen] = useState(false);

  console.log('OPENING???: ', isOpen);

  useEffect(() => {
    console.log('doing something?');
    setisOpen(true);
  }, []);

  const handleCancel = () => {
    router.back();
    setisOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCancel}>
      <DialogContent className='w-[350px]'>
        <DialogHeader>
          <DialogTitle>Erstelle ein neues Smarthome</DialogTitle>
          {/* <DialogDescription></DialogDescription> */}
        </DialogHeader>
        {/* <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' placeholder='Name of your project' />
            </div>
          </div>
        </form> */}

        <CreateHomeInstanceForm closeModal={handleCancel} />

        {/* <DialogFooter>
          {/* <Button type='submit'>Save changes</Button> 

          <Button variant='outline'>Cancel</Button>
          <Button type='submit'>Create</Button>
        </DialogFooter> */}
      </DialogContent>

      {/* <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' placeholder='Name of your project' />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button variant='outline'>Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card> */}
    </Dialog>
  );
};

export default NewHomePage;
