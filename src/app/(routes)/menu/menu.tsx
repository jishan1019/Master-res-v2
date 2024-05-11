"use client";

import { useAppSelector } from "@/redux/hooks";
import BasketCart from "../(shared)/(cart)/basket-cart";
import CheckoutCart from "../(shared)/(cart)/checkout-cart";
import LargeMenu from "../(shared)/(menu)/large-menu";
import SmallMenu from "../(shared)/(menu)/small-menu";
import dynamic from "next/dynamic";

const Menu = () => {
  const { isBasketOpen } = useAppSelector((state) => state.basket);

  return (
    <>
      <div className="p-5 hidden md:block">
        <LargeMenu />
      </div>
      <div className="md:hidden">
        {isBasketOpen ? <BasketCart /> : <SmallMenu />}
        <div className="fixed bottom-0 w-full">
          <CheckoutCart />
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Menu), { ssr: false });
