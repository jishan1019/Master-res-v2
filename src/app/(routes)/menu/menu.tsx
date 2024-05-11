"use client";

import { useAppSelector } from "@/redux/hooks";
import BasketCart from "../(shared)/(cart)/basket-cart";
import CheckoutCart from "../(shared)/(cart)/checkout-cart";
import LargeMenu from "../(shared)/(menu)/large-menu";
import SmallMenu from "../(shared)/(menu)/small-menu";
import { motion } from "framer-motion";
import { TBasketInitialState } from "@/types";
import dynamic from "next/dynamic";

const Menu = () => {
  const { isBasketOpen }: TBasketInitialState = useAppSelector(
    (state) => state.basket
  );

  return (
    <>
      <div className="p-5 hidden md:block">
        <LargeMenu />
      </div>
      <div className="md:hidden">
        {isBasketOpen ? (
          <motion.div
            key={"basket-cart"}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          >
            <BasketCart />
          </motion.div>
        ) : (
          <motion.div
            key={"small-menu"}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          >
            <SmallMenu />
          </motion.div>
        )}

        <div className="fixed bottom-0 w-full">
          <CheckoutCart />
        </div>
      </div>
    </>
  );
};

// export default Menu;

export default dynamic(() => Promise.resolve(Menu), { ssr: false });
