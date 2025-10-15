'use client';

import { cn } from '@/lib/utils';
import { Sun } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SettingsMenuItem = ({
  prePath,
  settingsLinks,
}: {
  prePath: string;
  settingsLinks: {
    header: string;
    items: {
      label: string;
      path: string;
    }[];
  }[];
}) => {
  const pathname = usePathname();

  return (
    <div className='w-full h-auto'>
      {settingsLinks.map((section) => (
        <div key={section.header} className='flex flex-col gap-3 pb-6'>
          <span className='text-base leading-4 text-card-foreground-v-1 '>{section.header}</span>
          <ul className='space-y-1.5'>
            {section.items.map((item) => {
              const isActive = pathname === item.path || pathname.startsWith(item.path) || pathname.includes(item.path);

              return (
                <li key={item.path}>
                  <Link
                    className={cn(
                      'flex flex-row gap-2 items-center p-2 rounded-md transition-colors',
                      isActive ? 'bg-card-v-1' : 'hover:bg-card-v-1 '
                    )}
                    href={prePath + item.path}
                  >
                    <Sun className='size-3' />
                    <span className='text-sm leading-3.5 text-card-foreground-v-1'>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default SettingsMenuItem;
