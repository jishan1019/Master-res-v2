import { Config } from '@/config';
import type { Metadata } from 'next';
import ResetPassword from './reset-password';

export const metadata: Metadata = {
          title: `Forgot Password | ${Config.fullTitle}`,
          description: Config.description,
};

export default function Page() {
          return (
                    <>
                              <ResetPassword />
                    </>
          )
}