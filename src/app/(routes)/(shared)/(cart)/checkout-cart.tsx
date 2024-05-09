import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Config } from "@/config";
import { BsBasket, Io5Icons } from "@/constant";
import { useState } from "react";

export default function CheckoutCart() {
  const [deliveryMethod, setDeliveryMethod] = useState<string>("delivery");

  return (
    <div className="w-full border border-t-0">
      <section className="grid grid-cols-2 gap-1 font-semibold text-center">
        <div className="bg-primary-foreground dark:bg-secondary py-2 flex justify-center items-center gap-3">
          <div className="inline-flex items-center gap-1">
            <p>
              <BsBasket
                size={20}
                className="text-destructive dark:text-primary"
              />
            </p>
            <p className="border border-destructive dark:border-primary rounded-full h-8 w-8 flex justify-center items-center bg-primary-foreground dark:bg-secondary -ml-2">
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
        <RadioGroup className="cursor-pointer">
          <div
            onClick={() => setDeliveryMethod("delivery")}
            className="bg-secondary py-2 flex justify-center items-center gap-3"
          >
            <RadioGroupItem
              value="delivery"
              checked={deliveryMethod === "delivery"}
              className="border-secondary-foreground dark:border-primary-foreground text-secondary-foreground dark:text-primary-foreground"
            />
            <Label htmlFor="delivery" className="cursor-pointer">
              Delivery
            </Label>
          </div>
        </RadioGroup>
        <RadioGroup className="cursor-pointer">
          <div
            onClick={() => setDeliveryMethod("collection")}
            className="bg-secondary py-2 flex justify-center items-center gap-3"
          >
            <RadioGroupItem
              value="collection"
              checked={deliveryMethod === "collection"}
              className="border-secondary-foreground dark:border-primary-foreground text-secondary-foreground dark:text-primary-foreground"
            />
            <Label htmlFor="collection" className="cursor-pointer">
              Collection
            </Label>
          </div>
        </RadioGroup>
      </section>
      <p className="text-sm font-semibold text-destructive dark:text-primary text-center bg-secondary mt-1 py-1">
        ALLERGY: Contact Restaurant
      </p>
    </div>
  );
}
