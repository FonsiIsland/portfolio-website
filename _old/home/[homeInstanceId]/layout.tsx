import { getHomeInstances, verifyAccessToHomeInstance } from '@/actions/home-instance';
import { onAuthendticateUser } from '@/actions/user';
import { HomeInstance } from '@prisma/client';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { redirect } from 'next/navigation';
import React from 'react';

// export const homeInstanceContext = createContext<HomeInstance | undefined>(undefined);

const layout = async ({ params, children }: { params: { homeInstanceId: string }; children: React.ReactNode }) => {
  // const auth = await onAuthendticateUser();

  const { homeInstanceId } = await params;

  // if (auth.status !== 200 && auth.status !== 201) return redirect(`/auth/sign-in`);

  const hasAccess = await verifyAccessToHomeInstance(homeInstanceId);

  if (hasAccess.status !== 200) {
    return redirect('/home');
  }

  if (!hasAccess.data?.homeInstance) return redirect('/home');

  // return <homeInstanceContext.Provider value={hasAccess.data.homeInstance}></homeInstanceContext.Provider>;
  return <div>{children}</div>;
};
export default layout;
