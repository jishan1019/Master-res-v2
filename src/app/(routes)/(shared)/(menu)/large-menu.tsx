import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";
import { Config } from "@/config";
import { Fa6Icons, Images } from "@/constant";
import { selectUser } from "@/redux/features/auth/authSlice";
import {
  setDrinkItems,
  setFoodItems,
} from "@/redux/features/basket/basketSlice";
import { useGetActiveDiscountQuery } from "@/redux/features/discount/discountApi";
import {
  useGetAllCategoriesQuery,
  useGetSingleMenuByCategoryIdQuery,
} from "@/redux/features/menu/menuApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TCategory, TFoodOrDrinksItem } from "@/types";
import { TItem } from "@/types/menu.type";
import Image from "next/image";
import { useEffect, useState } from "react";
import BasketCart from "../(cart)/basket-cart";
import CheckoutCart from "../(cart)/checkout-cart";

export default function LargeMenu() {
  const user = useAppSelector(selectUser);
  const role = user?.role;
  const dispatch = useAppDispatch();

  const [activeCategory, setActiveCategory] = useState<TCategory | null>(null);

  const { data: allCategories, isLoading: categoryLoading } =
    useGetAllCategoriesQuery(undefined);

  const { data: singleMenu, isFetching } = useGetSingleMenuByCategoryIdQuery(
    `sort=-createdAt&skipLimit=YES&category=${activeCategory?._id}`,
    {
      skip: !activeCategory?._id,
    }
  );

  const { data: activeDiscountData } = useGetActiveDiscountQuery(undefined);
  const excludedCategoryId =
    activeDiscountData?.data?.excludedCategory?.[0]?._id || "";

  useEffect(() => {
    if (allCategories?.data && allCategories?.data?.length > 0) {
      setActiveCategory(allCategories?.data?.[0]);
    }
  }, [allCategories?.data]);

  const handelAddToBasket = (
    item: TItem,
    activeCategoryId: string | undefined,
    discountCategoryId: string | undefined,
    userRole: string
  ) => {
    const isDiscountCategoryItem: boolean =
      activeCategoryId == discountCategoryId ? true : false;

    const singleItemPrice =
      userRole === "admin"
        ? item?.prices?.[0]?.priceTakeaway
        : item?.prices?.[0]?.priceOnline;

    const basketItem: TFoodOrDrinksItem = {
      itemId: item?._id,
      itemName: item?.itemName,
      singleItemPrice: singleItemPrice,
      singleItemQty: 1,
      priceId: item?.prices?.[0]?._id,
      categoryId: activeCategoryId,
      itemType: isDiscountCategoryItem ? "drink" : "food",
    };

    if (isDiscountCategoryItem) {
      dispatch(setDrinkItems(basketItem));
    } else {
      dispatch(setFoodItems(basketItem));
    }
  };

  if (categoryLoading) {
    return <Loading className="h-[80vh]" />;
  }

  return (
    <div className="p-5 relative">
      <section className="grid grid-cols-12 gap-6 mt-6 mb-16">
        <div className=" md:col-span-4 lg:col-span-3">
          <ul className="bg-secondary p-4 rounded-md border-2 space-y-2">
            {allCategories?.data?.map((category: TCategory) => (
              <li
                className={`cursor-pointer font-medium duration-300 ${category?._id === activeCategory?._id
                    ? "text-destructive dark:text-primary"
                    : "sm:hover:text-destructive dark:sm:hover:text-primary"
                  }`}
                key={category?._id}
                onClick={() => setActiveCategory(category)}
              >
                {category?.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-8 lg:col-span-6">
          <h3 className="font-bold text-3xl text-destructive dark:text-primary text-center">
            Menu
          </h3>
          <Image
            src={Images.OrnamentRed}
            alt="Menu Image"
            width={600}
            height={100}
            className="w-full -mt-6 ml-[6px] mx-auto"
          />
          {isFetching ? (
            <Loading className="h-[60vh]" />
          ) : (
            <div className="mt-4 p-2">
              <h3 className="px-2 mt-4 font-bold text-xl text-destructive dark:text-primary">
                {activeCategory?.name}
              </h3>
              <p className="border-b-2 border-primary/25 px-2 text-xs font-semibold py-1 ">
                {activeCategory?.isCategoryDesAvailable
                  ? activeCategory.categoryDes
                  : "No description available for this category."}
              </p>
              {singleMenu?.data?.items?.map((item: TItem) => (
                <div key={item?._id} className="border-b mt-3 pb-3 px-2">
                  <h5 className="font-bold text-[15px]">{item?.itemName}</h5>
                  <p className="text-xs font-semibold">
                    {item?.description?.isItemDesAvailable
                      ? item?.description?.itemDescription
                      : ""}
                  </p>
                  <div className="flex justify-end items-center space-x-4">
                    <p className="font-semibold">
                      {Config.currency}
                      {role === "admin"
                        ? item?.prices?.[0]?.priceTakeaway
                        : item?.prices?.[0]?.priceOnline}
                    </p>
                    <Button
                      className="bg-destructive dark:bg-primary"
                      size="sm"
                      onClick={() =>
                        handelAddToBasket(
                          item,
                          activeCategory?._id,
                          excludedCategoryId,
                          role
                        )
                      }
                    >
                      <Fa6Icons.FaPlus className="text-xl text-primary-foreground" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="md:col-span-12 lg:col-span-3">
          <BasketCart />
          <CheckoutCart />
        </div>
      </section>
    </div>
  );
}
