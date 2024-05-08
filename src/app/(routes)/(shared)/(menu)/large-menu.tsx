import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";
import { Config } from "@/config";
import { Fa6Icons } from "@/constant";
import {
  useGetAllCategoriesQuery,
  useGetAllMenuQuery,
} from "@/redux/features/menu/menuApi";
import { TCategory } from "@/types";
import { TGroupedItems, TItem } from "@/types/menu.type";
import { useEffect, useState } from "react";

export default function LargeMenu() {
  const { data: allCategories, isLoading: categoryLoading } =
    useGetAllCategoriesQuery(undefined);

  const { data: allMenus, isLoading: menuLoading } =
    useGetAllMenuQuery(undefined);

  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  useEffect(() => {
    if (allCategories?.data && allCategories?.data?.length > 0) {
      setActiveCategoryId(allCategories?.data?.[0]?._id);
    }
  }, [allCategories?.data, categoryLoading]);

  const groupedItems: TGroupedItems = allMenus?.data?.items?.reduce(
    (acc: TGroupedItems, item: TItem) => {
      const categoryName = item?.category?.name;

      if (categoryName) {
        if (!acc[categoryName]) {
          acc[categoryName] = [];
        }
        acc[categoryName].push(item);
      }
      return acc;
    },
    {}
  );

  const role: string = "user";

  if (categoryLoading || menuLoading) {
    return <Loading />;
  }

  return (
    <div className="p-5">
      <section className="grid grid-cols-12 gap-6 mt-6 mb-16">
        <div className="col-span-3">
          <ul className="bg-secondary p-4 rounded-md border-2 space-y-2">
            {allCategories?.data?.map((category: TCategory) => (
              <li
                className={`cursor-pointer ${
                  category?._id === activeCategoryId
                    ? "font-bold text-destructive"
                    : ""
                }`}
                key={category?._id}
                onClick={() => setActiveCategoryId(category?._id)}
              >
                {category?.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6">
          <h3 className="font-bold text-3xl text-destructive text-center">
            Menu
          </h3>

          <div className=" mt-4 p-2">
            {Object.entries(groupedItems).map(([categoryName, items]) => (
              <div key={categoryName}>
                <h3 className="border-b-2 px-2 mt-4 border-destructive font-bold text-xl text-destructive">
                  {categoryName}
                </h3>

                {items?.map((item) => (
                  <div
                    key={item?._id}
                    className="border-b-2 border-destructive/30 mt-3 pb-3 px-2"
                  >
                    <h5 className="font-bold text-[15px]">{item?.itemName}</h5>

                    <p className="text-xs font-semibold">
                      {item?.description?.isItemDesAvailable
                        ? item?.description?.itemDescription
                        : ""}
                    </p>

                    <div className="flex justify-end items-center space-x-4">
                      <p className="font-semibold">
                        {Config.currency}
                        {role === "user"
                          ? item?.prices?.[0]?.priceOnline
                          : item?.prices?.[0]?.priceTakeaway}
                      </p>
                      <Button className="bg-destructive" size="sm">
                        <Fa6Icons.FaPlus className="text-xl text-primary-foreground" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3 border">My Basket</div>
      </section>
    </div>
  );
}
