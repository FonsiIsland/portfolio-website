'use server';

import { getHomeInstances } from '@/actions/home-instance';
import { onAuthendticateUser } from '@/actions/user';
import { dehydrate, HydrationBoundary, QueryClient, usePrefetchQuery } from '@tanstack/react-query';
import { redirect } from 'next/navigation';

const layout = async ({ children, homes }: { children: React.ReactNode; homes: React.ReactNode }) => {
  const auth = await onAuthendticateUser();

  if (auth.status !== 200 && auth.status !== 201) return redirect(`/auth/sign-in`);

  // const query = new QueryClient();
  // await query.prefetchQuery({
  //   queryKey: ['workspace-folders'],
  //   // queryFn: () => getWorkSpaceFolders(workSpaceId),
  //   queryFn: () => {
  //     return { data: 'test' };
  //   },
  // });

  // const query = await usePrefetchQuery({
  //   queryKey: ['user-home-instances'],
  //   queryFn: () => getHomeInstances(),
  // })

  const query = new QueryClient();

  await query.prefetchQuery({
    queryKey: ['user-home-instances'],
    queryFn: () => getHomeInstances(),
  });

  return (
    <HydrationBoundary state={dehydrate(query)}>
      {/* <HomeHeader /> */}
      {children}
      {homes}
    </HydrationBoundary>
  );
};

export default layout;
