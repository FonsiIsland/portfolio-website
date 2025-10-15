// import { homeInstanceContext } from '@/app/[locale]/home/[homeInstanceId]/layout';
import { verifyAccessToHomeInstance } from '@/actions/home-instance';
import CreateHomeInstanceForm from '@/components/forms/create-home-instance-form';
import { HomeInstance } from '@prisma/client';
import { ChevronRight, CircleX } from 'lucide-react';
import { redirect } from 'next/navigation';
import { useContext } from 'react';

const HomeInstancePage = async ({ params }: { params: { homeInstanceId: string } }) => {
  const { homeInstanceId } = await params;

  // const homeInstance = await verifyAccessToHomeInstance(homeInstanceId);

  return redirect(`/home/${homeInstanceId}/informations`);

  // return (
  //   <div className='h-screen w-screen overflow-hidden'>
  //     {/* <ScrollArea className='h-[calc(100%-80px)] mt-[80px] w-full'> */}
  //     <div className='h-[calc(100%-80px)] mt-[80px]  w-full '>
  //       <div className='flex flex-row justify-center items-center'>
  //         <div className='w-[1190px] h-fit min-h-56 flex flex-col gap-4 py-[60px]'>
  //           <div className='w-full h-[64px] flex items-center justify-between'>
  //             <div className=' flex flex-row gap-4 items-center'>
  //               <span className='text-4xl font-bold'>{homeInstance.data?.homeInstance?.name}</span>
  //               <ChevronRight className='size-8 text-card-foreground-v-2' />
  //               <span className='text-3xl font-bold text-card-foreground-v-1'>Einstellungen</span>
  //             </div>
  //             <div className='size-fit'>
  //               <CircleX className='size-12 text-card-foreground-v-1 hover:text-card-foreground-v-2 transition-colors' />
  //             </div>
  //           </div>
  //           <div className='w-[1150px] mx-auto h-auto'>test</div>
  //         </div>
  //       </div>
  //     </div>
  //     {/* </ScrollArea> */}
  //   </div>
  // );
};
export default HomeInstancePage;
