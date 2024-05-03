import { dashboardAuthorizedRoutes } from '@/app/(routes)/(shared)/(dashboard)/authorized-route';
import DashboardLayout from '@/app/(routes)/(shared)/(dashboard)/dashboard-layout';
import { TTokenUser } from '@/types';
import { getUserFromToken } from '@/utils/cookies-token';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
          const user = await getUserFromToken() as TTokenUser;
          const role = user?.role;

          const route = await dashboardAuthorizedRoutes(role);

          if (!route && user) return redirect('/dashboard');

          return (
                    <DashboardLayout role={role}>
                              {children}
                    </DashboardLayout>
          )
}