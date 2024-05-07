import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";
import { Config } from "@/config";
import { Fa6Icons } from "@/constant";
import {
  useGetAllCategoriesQuery,
  useGetAllMenuQuery,
} from "@/redux/features/menu/menuApi";
import { TCategory } from "@/types";
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
            <h3 className="border-b-2 px-2 border-destructive font-bold text-xl text-destructive">
              Starters
            </h3>

            <div className="border-b-2 border-destructive/30 mt-3 pb-3 px-2">
              <h5 className="font-bold text-[15px]">Chicken Tikka</h5>
              <p className="text-xs font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, dicta?
              </p>

              <div className="flex justify-end items-center space-x-4">
                <p className="font-semibold">{Config.currency}4.20</p>
                <Button className="bg-destructive" size="sm">
                  <Fa6Icons.FaPlus className="text-xl text-primary-foreground" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 border">My Basket</div>
      </section>
    </div>
  );
}
