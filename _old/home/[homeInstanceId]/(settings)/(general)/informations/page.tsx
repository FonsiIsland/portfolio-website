import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import ModifiedSeparator from '@/components/utils/modified-separator';

const InformationsPage = () => {
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <span className='text-[28px] font-semibold text-foreground leading-7'>Smarthome Informationen</span>
        <span className='text-base text-card-foreground-v-1 leading-4'>
          Ändere hier allgemeine Informationen deines Smarthomes
        </span>
      </div>
      <ModifiedSeparator />
      <div className='px-3'>
        <div className='flex flex-row'>
          <div className='flex flex-col gap-2 w-[429px]'>
            <span className='text-xl font-medium text-foreground leading-5'>Name deines Smarthomes</span>
            <span className='text-sm font-light text-card-foreground-v-1 leading-3.5'>
              Ändere die allgemine Bezeichnung deines Smarthomes
            </span>
          </div>
          <div className='w-[429px]'>
            <Input className='w-[320px]' placeholder='Name' />
          </div>
        </div>
      </div>
    </div>
  );
};
export default InformationsPage;
