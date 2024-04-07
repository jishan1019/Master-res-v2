import { Config } from '@/config';
import type { Metadata } from 'next';
import ForgotPassword from "./forgot-password";

export const metadata: Metadata = {
          title: `Forgot Password | ${Config.siteFullTitle}`,
          description: Config.siteDescription,
};

export default function Page() {
          return (
                    <>
                              <ForgotPassword />
                    </>
          )
}