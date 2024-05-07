"use client"

import OrderProcess from "./(order-process)/order-process";
import Header from "./header";

export default function HomePage() {
          return (
                    <Header>
                              <OrderProcess />
                    </Header>
          )
}