import ModifiedSeparator from '@/components/utils/modified-separator';
import { cn } from '@/lib/utils';
import { Children } from 'react';

export const SettingsMenuPage = ({
  headerLabel,
  headerDescription,
  children,
}: {
  headerLabel: string;
  headerDescription: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <span className='text-[28px] font-semibold text-foreground leading-7'>{headerLabel}</span>
        <span className='text-base text-card-foreground-v-1 leading-4'>{headerDescription}</span>
      </div>
      <ModifiedSeparator />
      <div className='px-3'>
        {Children.toArray(children).flatMap((item, index, arr) =>
          index < arr.length - 1 ? [item, <ModifiedSeparator key={`sep-${index}`} />] : [item]
        )}
      </div>
    </div>
  );
};

export const SettingsMenuPageItem = ({
  label,
  description,
  children,
  className,
  align = 'horizontal',
}: React.ComponentProps<'div'> & {
  label: string;
  description?: string;
  children: React.ReactNode;
  align?: 'vertical' | 'horizontal';
}) => {
  return align == 'horizontal' ? (
    <div className='flex flex-row items-center'>
      <div className='flex flex-col gap-2 w-[429px] justify-center'>
        <span className='text-xl font-medium text-foreground leading-5'>{label}</span>
        {description && <span className='text-sm font-light text-card-foreground-v-1 leading-3.5'>{description}</span>}
      </div>
      <div className={cn('w-[429px] flex flex-row gap-4 items-center', className)}>{children}</div>
    </div>
  ) : (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col gap-2 w-[429px] justify-center'>
        <span className='text-xl font-medium text-foreground leading-5'>{label}</span>
        {description && <span className='text-sm font-light text-card-foreground-v-1 leading-3.5'>{description}</span>}
      </div>
      <div className={cn('w-[858px]', className)}>{children}</div>
    </div>
  );
};
