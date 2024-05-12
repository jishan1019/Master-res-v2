import { Config } from "@/config";
import type { Metadata } from "next";
import Header from "../../(home)/header";
import Checkout from "./checkout";

export const metadata: Metadata = {
          title: `Checkout | ${Config.fullTitle}`,
          description: Config.description,
};

export default function Page() {
          return (
                    <Header>
                              <Checkout />
                    </Header>
          )
}