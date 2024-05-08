import { Config } from "@/config";
import { FaIcons, Io5Icons } from "@/constant";
import { useState } from "react";

export default function CheckoutCart() {
  const [deliveryMethod, setDeliveryMethod] = useState<string>("delivery");

  return (
    <div className="w-full border border-black">
      <section className="grid grid-cols-2 gap-1 font-semibold text-center">
        <div className="bg-primary-foreground dark:bg-secondary py-2 flex justify-center items-center gap-3">
          <div className="inline-flex items-center">
            <p>
              <FaIcons.FaShoppingBasket
                size={24}
                className="text-destructive dark:text-primary"
              />
            </p>
            <p className="border border-destructive dark:border-primary rounded-full h-7 w-7 flex justify-center items-center bg-primary-foreground dark:bg-secondary -ml-2">
              12
            </p>
          </div>

          <p>{Config.currency}23.5</p>
        </div>
        <div className="bg-destructive text-primary-foreground py-2 inline-flex justify-around items-center">
          <p>
            <Io5Icons.IoCardOutline size={24} />
          </p>
          <p>Checkout</p>
        </div>
        <div className="bg-secondary py-2">
          <label
            htmlFor="delivery"
            className="flex justify-evenly items-center cursor-pointer"
          >
            <input
              type="radio"
              checked={deliveryMethod === "delivery"}
              onClick={() => setDeliveryMethod("delivery")}
            />
            Delivery
          </label>
        </div>
        <div className="bg-secondary py-2">
          <label
            htmlFor="collection"
            className="flex justify-evenly items-center cursor-pointer"
          >
            <input
              type="radio"
              checked={deliveryMethod === "collection"}
              onClick={() => setDeliveryMethod("collection")}
            />
            Collection
          </label>
        </div>
      </section>

      <p className="text-sm font-semibold text-destructive dark:text-primary text-center bg-secondary mt-1 py-1">
        ALLERGY: Contact Restaurant
      </p>
    </div>
  );
}
