import { Button } from "@/components/ui/button";
import { Config } from "@/config";
import { BsBasket, Fa6Icons } from "@/constant";

export default function BasketCart() {
  const itemArr: string[] = ["Item1", "Item2", "Item3"];
  const drinksArr: string[] = ["drink1"];

  return (
    <div className="min-h-64 pb-8 border border-b-0">
      <header className="flex justify-center items-center bg-destructive dark:bg-secondary text-primary-foreground py-2 gap-2">
        <p>
          <BsBasket size={20} />
        </p>
        <h5>My Basket</h5>
      </header>
      <main className="w-full mx-auto py-1 pl-2">
        <section>
          <div className="grid grid-cols-12 font-semibold text-[17px] text-destructive dark:text-primary-foreground gap-3 mt-3">
            <p className="col-span-5 md:col-span-6">Food</p>
            <p className="col-span-2 md:hidden text-center">Price</p>
            <p className="col-span-5 md:col-span-6 text-center">
              <span
                className={drinksArr?.length > 0 ? "md:block" : "md:hidden"}
              >
                Qty
              </span>
            </p>
          </div>
          {itemArr?.length > 0 ? (
            <>
              <div className="grid grid-cols-12 text-sm gap-3 mt-2 font-semibold border-b-2 pb-2">
                <p className="col-span-5 md:col-span-6">Chicken Tikka</p>
                <p className="col-span-2 md:hidden text-center">
                  {Config.currency}4.20
                </p>
                <div className="col-span-5 md:col-span-6 flex justify-center items-center gap-2 sm:gap-2">
                  <Button
                    className="bg-secondary-foreground/50 dark:bg-primary"
                    size="xs"
                  >
                    <Fa6Icons.FaMinus
                      size={15}
                      className="text-primary-foreground"
                    />
                  </Button>
                  <p>0</p>
                  <Button className="bg-destructive dark:bg-primary" size="xs">
                    <Fa6Icons.FaPlus
                      size={15}
                      className="text-primary-foreground"
                    />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="text-sm font-semibold mt-2">Your basket is empty</p>
            </>
          )}
          <div className="grid grid-cols-12 font-bold text-sm gap-3 mt-2">
            <p className="col-span-5 md:col-span-6">Food Total</p>
            <p className="col-span-2 md:col-span-6 text-center">
              {Config.currency}00.00
            </p>
            <p className="col-span-5 md:hidden text-center">0</p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-12 font-semibold text-[17px] text-destructive dark:text-primary-foreground gap-3 mt-3">
            <p className="col-span-5 md:col-span-6">Drinks</p>
            <p className="col-span-2 md:hidden text-center">Price</p>
            <p className="col-span-5 md:col-span-6 text-center">
              <span
                className={drinksArr?.length > 0 ? "md:block" : "md:hidden"}
              >
                Qty
              </span>
            </p>
          </div>
          {drinksArr?.length > 0 ? (
            <>
              <div className="grid grid-cols-12 text-sm gap-3 mt-2 font-semibold border-b-2 pb-2">
                <p className="col-span-5 md:col-span-6">Chicken Tikka</p>
                <p className="col-span-2 md:hidden text-center">
                  {Config.currency}4.20
                </p>
                <div className="col-span-5 md:col-span-6 flex justify-center items-center gap-2 sm:gap-2">
                  <Button
                    className="bg-secondary-foreground/50 dark:bg-primary"
                    size="xs"
                  >
                    <Fa6Icons.FaMinus
                      size={15}
                      className="text-primary-foreground"
                    />
                  </Button>
                  <p>0</p>
                  <Button className="bg-destructive dark:bg-primary" size="xs">
                    <Fa6Icons.FaPlus
                      size={15}
                      className="text-primary-foreground"
                    />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="text-sm font-semibold mt-2">None selected</p>
            </>
          )}
          <div className="grid grid-cols-12 font-bold text-sm gap-3 mt-2">
            <p className="col-span-5 md:col-span-6">Drinks Total</p>
            <p className="col-span-2 md:col-span-6 text-center">
              {Config.currency}00.00
            </p>
            <p className="col-span-5 md:hidden text-center">0</p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-12 font-bold text-[16px] gap-3 mt-3 md:hidden">
            <p className="col-span-6">Order Total</p>
            <p className="col-span-6 text-center">{Config.currency}00.00</p>
          </div>
        </section>
      </main>
    </div>
  );
}
