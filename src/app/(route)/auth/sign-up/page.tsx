import { Config } from '@/config';
import type { Metadata } from 'next';
import SignUp from "./sign-up";

export const metadata: Metadata = {
          title: `Sign Up | ${Config.siteFullTitle}`,
          description: Config.siteDescription,
};

export default function Page() {
          return (
                    <>
                              <SignUp />
                    </>
          )
}