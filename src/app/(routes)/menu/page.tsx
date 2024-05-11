import { Config } from "@/config";
import type { Metadata } from "next";
import Header from "../(home)/header";
import Menu from "./menu";

export const metadata: Metadata = {
  title: `Menu | ${Config.fullTitle}`,
  description: Config.description,
};

export default function Page() {
  return (
    <Header>
      <Menu />
    </Header>
  );
}
