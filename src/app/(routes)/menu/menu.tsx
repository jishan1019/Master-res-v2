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
        <div
          className={`transition-opacity duration-300 ${
            isBasketOpen ? "ease-in opacity-100" : "ease-out opacity-0 h-0"
          }`}
        >
          <BasketCart />
        </div>
        <div
          className={`transition-opacity duration-300 ${
            isBasketOpen
              ? "ease-out opacity-0 h-0 hidden"
              : "ease-in opacity-100"
          }`}
        >
          <SmallMenu />
        </div>
        <div className="fixed bottom-0 w-full">
          <CheckoutCart />
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Menu), { ssr: false });
