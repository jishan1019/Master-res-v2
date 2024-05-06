"use client"

import BaseLayout from "@/app/(routes)/(shared)/(home)/base-layout";
import Header from "./header";
import Order from "./order";

export default function HomePage({ token }: { token: string }) {
          return (
                    <BaseLayout>
                              <Header />
                              <Order />
                    </BaseLayout>
          )
}