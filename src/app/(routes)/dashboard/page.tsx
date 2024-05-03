import Dashboard from "@/app/(routes)/(shared)/(dashboard)/dashboard";
import { Config } from '@/config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
          title: `Dashboard | ${Config.title}`,
          description: Config.description,
}

export default function Page() {
          return (
                    <>
                              <Dashboard />
                    </>
          )
}
