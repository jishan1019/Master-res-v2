"use client"

import Footer from "../(shared)/(home)/footer";
import OrderProcess from "./(order-process)/order-process";
import Header from "./header";

export default function HomePage() {
          return (
                    <Header>
                              <OrderProcess />
                              <Footer className="mt-24 sm:mt-96" />
                    </Header>
          )
}