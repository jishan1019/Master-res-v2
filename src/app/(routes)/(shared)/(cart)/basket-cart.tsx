import { Button } from "@/components/ui/button";
import { Config } from "@/config";
import { BsBasket, Fa6Icons } from "@/constant";
import React from "react";

export default function BasketCart() {
  return (
    <div className="min-h-64 mb-8">
      <header className="flex justify-center items-center bg-destructive dark:bg-secondary text-primary-foreground py-2 gap-2">
        <p>
          <BsBasket size={20} />
        </p>
        <h5>My Basket</h5>
      </header>
      <main>
        <section className="w-full mx-auto py-1 pl-2">
          <div className="grid grid-cols-12 font-semibold text-[17px] text-destructive dark:text-primary-foreground gap-3">
            <p className="col-span-5">Food</p>
            <p className="col-span-2 text-center">Price</p>
            <p className="col-span-5 text-center">Qty</p>
          </div>

          <div className="grid grid-cols-12 text-sm gap-3 mt-2 font-semibold border-b-2 pb-2">
            <p className="col-span-5">Chicken Tikka</p>
            <p className="col-span-2">{Config.currency}4.20</p>
            <div className="col-span-5 flex justify-center items-center gap-2">
              <Button className="bg-destructive dark:bg-primary" size="xs">
                <Fa6Icons.FaMinus
                  size={15}
                  className="text-primary-foreground"
                />
              </Button>
              <p>5</p>
              <Button className="bg-destructive dark:bg-primary" size="xs">
                <Fa6Icons.FaPlus
                  size={15}
                  className="text-primary-foreground"
                />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-12 text-sm gap-3 mt-2 font-semibold border-b-2 pb-2">
            <p className="col-span-5">Chicken Tikka</p>
            <p className="col-span-2">{Config.currency}4.20</p>
            <div className="col-span-5 flex justify-center items-center gap-2">
              <Button className="bg-destructive dark:bg-primary" size="xs">
                <Fa6Icons.FaMinus
                  size={15}
                  className="text-primary-foreground"
                />
              </Button>
              <p>5</p>
              <Button className="bg-destructive dark:bg-primary" size="xs">
                <Fa6Icons.FaPlus
                  size={15}
                  className="text-primary-foreground"
                />
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full mx-auto py-1 pl-2">
          <div className="grid grid-cols-12 font-semibold text-[17px] text-destructive dark:text-primary-foreground gap-3">
            <p className="col-span-5">Drinks</p>
            <p className="col-span-2 text-center"></p>
            <p className="col-span-5 text-center">Qty</p>
          </div>

          <div className="grid grid-cols-12 text-sm gap-3 mt-2 font-semibold border-b-2 pb-2">
            <p className="col-span-5">Chicken Tikka</p>
            <p className="col-span-2">{Config.currency}4.20</p>
            <div className="col-span-5 flex justify-center items-center gap-2">
              <Button className="bg-destructive dark:bg-primary" size="xs">
                <Fa6Icons.FaMinus
                  size={15}
                  className="text-primary-foreground"
                />
              </Button>
              <p>5</p>
              <Button className="bg-destructive dark:bg-primary" size="xs">
                <Fa6Icons.FaPlus
                  size={15}
                  className="text-primary-foreground"
                />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-12 text-sm gap-3 mt-2 font-semibold border-b-2 pb-2">
            <p className="col-span-5">Chicken Tikka</p>
            <p className="col-span-2">{Config.currency}4.20</p>
            <div className="col-span-5 flex justify-center items-center gap-2">
              <Button className="bg-destructive dark:bg-primary" size="xs">
                <Fa6Icons.FaMinus
                  size={15}
                  className="text-primary-foreground"
                />
              </Button>
              <p>5</p>
              <Button className="bg-destructive dark:bg-primary" size="xs">
                <Fa6Icons.FaPlus
                  size={15}
                  className="text-primary-foreground"
                />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
