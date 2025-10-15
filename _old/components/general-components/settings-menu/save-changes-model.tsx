'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { forwardRef, MouseEventHandler, useImperativeHandle, useState } from 'react';

export type ModalHandle = {
  openModal: () => void;
};

type SaveChangesModalProps = {
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  handleDismiss: MouseEventHandler<HTMLButtonElement>;
};

const SaveChangesModal = forwardRef<ModalHandle, SaveChangesModalProps>(({ handleSubmit, handleDismiss }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setIsOpen(true),
  }));

  // useEffect(() => {
  //   setisOpen(open);
  //   console.log('Open changed:', open);
  // }, [open]);

  const handleModalDismiss = (e: any) => {
    handleDismiss(e);
    setIsOpen(false);
  };

  const handleModalSubmit = (e: any) => {
    handleSubmit(e);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent showCloseX={false} className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Änderungen speichern?</DialogTitle>
          <DialogDescription>Es wurden Änderungen gemacht. Möchtest du diese speichern?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type='submit' variant='outline' onClick={handleModalDismiss}>
            Verwerfen
          </Button>
          <Button type='button' onClick={handleModalSubmit}>
            Speichern
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
export default SaveChangesModal;
