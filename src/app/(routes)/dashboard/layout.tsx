import DashboardLayout from '@/app/(routes)/(shared)/(dashboard)/dashboard-layout';
import { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
          return (
                    <DashboardLayout>
                              {children}
                    </DashboardLayout>
          )
}