"use client";

import { useGetAllCategoriesQuery } from "@/redux/features/menu/menuApi";
import { TCategory } from "@/types";
import { useEffect, useState } from "react";

export default function LargeMenu() {
  const { data: allCategories, isLoading } =
    useGetAllCategoriesQuery(undefined);

  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  useEffect(() => {
    if (allCategories?.data && allCategories?.data?.length > 0) {
      setActiveCategoryId(allCategories?.data?.[0]?._id);
    }
  }, [allCategories?.data]);

  if (isLoading) {
    return <div>Loading...</div>;
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

          <div className="border mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            eos, corporis quos itaque architecto repellat hic accusamus? In qui
            mollitia iusto eos facere! Quis earum deleniti harum nisi, aliquid
            expedita.
          </div>
        </div>

        <div className="col-span-3 border">My Basket</div>
      </section>
    </div>
  );
}
