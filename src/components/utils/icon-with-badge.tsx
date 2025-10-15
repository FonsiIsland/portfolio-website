import React, { cloneElement } from 'react';
import { Bell, LucideIcon } from 'lucide-react';

interface IconWithBadgeProps {
  count?: number;
  lucideIcon: LucideIcon;
}

const IconWithBadge: React.FC<IconWithBadgeProps> = ({ count = 0, lucideIcon }) => {
  const LucideIcon = lucideIcon;
  return (
    <div className='relative w-fit'>
      <LucideIcon className='w-6 h-6 text-card-foreground-v-3 hover:text-card-foreground-v-1 transition-colors' />
      {count > 0 && (
        <span className='absolute -top-[5px] left-3 text-[8px] min-w-[12px] h-[12px] px-[4px] rounded-full bg-[#5190b7] text-white flex items-center justify-center'>
          {count > 99 ? '99+' : count}
        </span>
      )}
    </div>
  );
};

export default IconWithBadge;
