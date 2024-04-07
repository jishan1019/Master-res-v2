import { Config } from '@/config';
import type { Metadata } from 'next';
import Login from './login';

export const metadata: Metadata = {
          title: `Login | ${Config.siteFullTitle}`,
          description: Config.siteDescription,
};

export default function Page() {
          return (
                    <>
                              <Login />
                    </>
          )
}