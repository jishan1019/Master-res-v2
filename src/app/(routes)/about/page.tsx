import { Config } from "@/config";
import type { Metadata } from "next";
import Header from "../(home)/header";
import About from "./about";

export const metadata: Metadata = {
          title: `About | ${Config.fullTitle}`,
          description: Config.description,
};

export default function Page() {
          return (
                    <Header>
                              <About />
                    </Header>
          )
}