"use client";

import { useAppSelector } from "@/redux/hooks";
import { TBasketInitialState } from "@/types";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import BasketCart from "../(shared)/(cart)/basket-cart";
import CheckoutCart from "../(shared)/(cart)/checkout-cart";
import LargeMenu from "../(shared)/(menu)/large-menu";
import SmallMenu from "../(shared)/(menu)/small-menu";

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
            exit={{ y: 100, opacity: 0 }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BasketCart />
          </motion.div>
        ) : (
          <motion.div
            key={"small-menu"}
            exit={{ y: 100, opacity: 0 }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
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

export default dynamic(() => Promise.resolve(Menu), { ssr: false });
