import { Config } from "@/config";
import type { Metadata } from "next";
import Header from "../(home)/header";
import Services from "./services";

export const metadata: Metadata = {
          title: `Services | ${Config.fullTitle}`,
          description: Config.description,
};

export default function Page() {
          return (
                    <Header>
                              <Services />
                    </Header>
          )
}