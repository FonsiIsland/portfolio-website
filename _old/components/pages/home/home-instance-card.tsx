import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarFold, ChartNoAxesCombined, CircleUser, Users } from 'lucide-react';
import { redirect } from 'next/navigation';
import { motion } from 'framer-motion';

const HomeInstanceCard = ({
  data,
  animationDelay = 0,
}: {
  data: { name: string; id: string };
  animationDelay?: number;
}) => {
  console.log(animationDelay);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay, duration: 0.5, ease: 'easeOut' }}
    >
      <Card
        className='w-[362px] h-[260px] rounded-4xl border-none hover:bg-card-v-1 cursor-pointer transition-colors'
        onClick={() => redirect(`/home/${data.id}`)}
      >
        <CardHeader>
          <CardTitle className='text-2xl font-medium truncate'>{data.name}</CardTitle>
          <CardDescription className='text-lg text-card-foreground-v-2 truncate'>
            My peaceful place bove the city ✨
          </CardDescription>
        </CardHeader>
        <CardContent className='size-full'>
          <div className='size-full flex flex-col gap-4 justify-between text-lg text-card-foreground-v-2'>
            <span className='flex gap-2 items-center h-4.5'>
              <CircleUser className='size-4.5' />
              Eigentümer: Du
            </span>

            <span className='flex gap-2 items-center h-4.5'>
              <Users className='size-4.5' />
              Mitglieder: 3
            </span>

            <span className='flex gap-2 items-center h-4.5'>
              <CalendarFold className='size-4.5' />
              Erstellt am: 12.06.2024
            </span>

            <span className='flex gap-2 items-center h-4.5'>
              <ChartNoAxesCombined className='size-4.5' />
              Status: <span className='text-[#26FF55]'>Verbunden & Aktiv</span>
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
export default HomeInstanceCard;
