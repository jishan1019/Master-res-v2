import { Button } from "@/components/ui/button";
import { Config } from "@/config";
import { BsBasket, Fa6Icons } from "@/constant";
import {
  setDecreaseQuantity,
  setIncreaseQuantity,
} from "@/redux/features/basket/basketSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  TBasketInitialState,
  TFoodOrDrinksItem,
  TTotalPriceQty,
} from "@/types";

export default function BasketCart() {
  const FOOD: string = "food";
  const DRINK: string = "drink";

  const { foodItems, drinksItems }: TBasketInitialState = useAppSelector(
    (state) => state.basket
  );

  const dispatch = useAppDispatch();

  const handelIncreaseQuantity = (itemId: string, itemType: string) => {
    const itemInfo = {
      itemId,
      itemType,
    };
    dispatch(setIncreaseQuantity(itemInfo));
  };

  const handelDecreaseQuantity = (itemId: string, itemType: string) => {
    const itemInfo = {
      itemId,
      itemType,
    };
    dispatch(setDecreaseQuantity(itemInfo));
  };

  const handelTotalPriceAndQuantity = (items: TFoodOrDrinksItem[]) => {
    const totalPriceAndQty: TTotalPriceQty = items?.reduce(
      (acc: TTotalPriceQty, currentItem: TFoodOrDrinksItem) => {
        acc.totalQty += currentItem?.singleItemQty;
        acc.totalPrice +=
          currentItem?.singleItemPrice * currentItem?.singleItemQty;
        return acc;
      },
      { totalQty: 0, totalPrice: 0 }
    );

    return totalPriceAndQty;
  };

  const allItems: TFoodOrDrinksItem[] = [...foodItems, ...drinksItems];

  const totalFoodItemPriceAndQty = handelTotalPriceAndQuantity(foodItems);
  const totalDrinksItemPriceAndQty = handelTotalPriceAndQuantity(drinksItems);
  const grandTotalDrinksItemPriceAndQty = handelTotalPriceAndQuantity(allItems);

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
                className={drinksItems?.length > 0 ? "md:block" : "md:hidden"}
              >
                Qty
              </span>
            </p>
          </div>

          {foodItems?.length > 0 ? (
            <>
              {foodItems?.map((item: TFoodOrDrinksItem) => (
                <div
                  key={item?.itemId}
                  className="grid grid-cols-12 text-sm gap-3 mt-2 font-semibold border-b-2 pb-2"
                >
                  <p className="col-span-5 md:col-span-6">{item?.itemName}</p>
                  <p className="col-span-2 md:hidden text-center">
                    {Config.currency}
                    {(item?.singleItemPrice * item?.singleItemQty).toFixed(2)}
                  </p>
                  <div className="col-span-5 md:col-span-6 flex justify-center items-center gap-2 sm:gap-2">
                    <Button
                      className="bg-secondary-foreground/50 dark:bg-primary"
                      size="xs"
                      onClick={() => handelDecreaseQuantity(item?.itemId, FOOD)}
                    >
                      <Fa6Icons.FaMinus
                        size={15}
                        className="text-primary-foreground"
                      />
                    </Button>
                    <p>{item?.singleItemQty}</p>
                    <Button
                      className="bg-destructive dark:bg-primary"
                      size="xs"
                      onClick={() => handelIncreaseQuantity(item?.itemId, FOOD)}
                    >
                      <Fa6Icons.FaPlus
                        size={15}
                        className="text-primary-foreground"
                      />
                    </Button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <p className="text-sm font-semibold mt-2">Your basket is empty</p>
            </>
          )}
          <div className="grid grid-cols-12 font-bold text-sm gap-3 mt-2">
            <p className="col-span-5 md:col-span-6">Food Total</p>
            <p className="col-span-2 md:col-span-6 text-center">
              {Config.currency}
              {totalFoodItemPriceAndQty?.totalPrice?.toFixed(2)}
            </p>
            <p className="col-span-5 md:hidden text-center">
              {totalFoodItemPriceAndQty?.totalQty}
            </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-12 font-semibold text-[17px] text-destructive dark:text-primary-foreground gap-3 mt-3">
            <p className="col-span-5 md:col-span-6">Drinks</p>
            <p className="col-span-2 md:hidden text-center">Price</p>
            <p className="col-span-5 md:col-span-6 text-center">
              <span
                className={drinksItems?.length > 0 ? "md:block" : "md:hidden"}
              >
                Qty
              </span>
            </p>
          </div>

          {drinksItems?.length > 0 ? (
            <>
              {drinksItems?.map((item: TFoodOrDrinksItem) => (
                <div
                  key={item?.itemId}
                  className="grid grid-cols-12 text-sm gap-3 mt-2 font-semibold border-b-2 pb-2"
                >
                  <p className="col-span-5 md:col-span-6">{item?.itemName}</p>
                  <p className="col-span-2 md:hidden text-center">
                    {Config.currency}
                    {(item?.singleItemPrice * item?.singleItemQty).toFixed(2)}
                  </p>
                  <div className="col-span-5 md:col-span-6 flex justify-center items-center gap-2 sm:gap-2">
                    <Button
                      className="bg-secondary-foreground/50 dark:bg-primary"
                      size="xs"
                      onClick={() =>
                        handelDecreaseQuantity(item?.itemId, DRINK)
                      }
                    >
                      <Fa6Icons.FaMinus
                        size={15}
                        className="text-primary-foreground"
                      />
                    </Button>
                    <p>{item?.singleItemQty}</p>
                    <Button
                      className="bg-destructive dark:bg-primary"
                      size="xs"
                      onClick={() =>
                        handelIncreaseQuantity(item?.itemId, DRINK)
                      }
                    >
                      <Fa6Icons.FaPlus
                        size={15}
                        className="text-primary-foreground"
                      />
                    </Button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <p className="text-sm font-semibold mt-2">None selected</p>
            </>
          )}

          <div className="grid grid-cols-12 font-bold text-sm gap-3 mt-2">
            <p className="col-span-5 md:col-span-6">Drinks Total</p>
            <p className="col-span-2 md:col-span-6 text-center">
              {Config.currency}
              {totalDrinksItemPriceAndQty.totalPrice?.toFixed(2)}
            </p>
            <p className="col-span-5 md:hidden text-center">
              {totalDrinksItemPriceAndQty?.totalQty}
            </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-12 font-bold text-[16px] gap-3 mt-3 md:hidden">
            <p className="col-span-6">Order Total</p>
            <p className="col-span-6 text-center">
              {Config.currency}
              {grandTotalDrinksItemPriceAndQty?.totalPrice?.toFixed(2)}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
