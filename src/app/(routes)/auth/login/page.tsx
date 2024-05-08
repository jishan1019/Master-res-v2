import Header from '@/app/(routes)/(home)/header';
import { Config } from '@/config';
import type { Metadata } from 'next';
import Login from './login';

export const metadata: Metadata = {
          title: `Login | ${Config.fullTitle}`,
          description: Config.description,
};

export default function Page() {
          return (
                    <Header>
                              <Login />
                    </Header>
          )
}