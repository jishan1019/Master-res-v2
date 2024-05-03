import DashboardLayout from '@/app/(routes)/(shared)/(dashboard)/dashboard-layout';
import { user } from '@/config/site-config';
import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
          return (
                    <DashboardLayout user={user}>
                              {children}
                    </DashboardLayout>
          )
}