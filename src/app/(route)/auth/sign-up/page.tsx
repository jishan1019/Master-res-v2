import { Config } from '@/config';
import type { Metadata } from 'next';
import SignUp from "./sign-up";

export const metadata: Metadata = {
          title: `Sign Up | ${Config.fullTitle}`,
          description: Config.description,
};

export default function Page() {
          return (
                    <>
                              <SignUp />
                    </>
          )
}