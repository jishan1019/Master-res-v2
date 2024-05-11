import Loading from "@/components/loading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Config } from "@/config";
import { Fa6Icons, Images } from "@/constant";
import { selectUser } from "@/redux/features/auth/authSlice";
import {
  useGetAllCategoriesQuery,
  useGetSingleMenuByCategoryIdQuery,
} from "@/redux/features/menu/menuApi";
import { useAppSelector } from "@/redux/hooks";
import { TCategory, TItem } from "@/types";
import Image from "next/image";
import { useState } from "react";

export default function SmallMenu() {
  const user = useAppSelector(selectUser);
  const role = user?.role;

  const [activeCategory, setActiveCategory] = useState<TCategory | null>(null);

  const { data: allCategories, isLoading: categoryLoading } =
    useGetAllCategoriesQuery(undefined);

  const { data: singleMenu, isFetching } = useGetSingleMenuByCategoryIdQuery(
    `sort=-createdAt&skipLimit=YES&category=${activeCategory?._id}`,
    {
      skip: !activeCategory?._id,
    }
  );

  if (categoryLoading) {
    return <Loading className="h-[80vh]" />;
  }

  return (
    <div className="p-5">
      <h3 className="font-bold text-3xl text-destructive dark:text-primary text-center mt-3">
        Menu
      </h3>
      <Image
        src={Images.OrnamentRed}
        alt="Menu Image"
        width={500}
        height={300}
        className="w-[600px] h-16 -mt-5 ml-1 mx-auto"
      />
      <Accordion type="single" collapsible className="w-full mb-36">
        {allCategories?.data?.map((category: TCategory) => (
          <AccordionItem
            key={category?._id}
            className="border-b-2 border-primary/25"
            value={category?._id}
            onClick={() => setActiveCategory(category)}
          >
            <AccordionTrigger className="text-destructive dark:text-primary font-semibold text-lg">
              {category?.name}
            </AccordionTrigger>
            <AccordionContent className=" font-semibold text-xs border-b mb-2">
              {category?.isCategoryDesAvailable ? category.categoryDes : ""}
            </AccordionContent>
            {isFetching ? (
              <AccordionContent className="font-semibold text-xs ">
                <Loading />
              </AccordionContent>
            ) : (
              singleMenu?.data?.items?.map((item: TItem) => (
                <AccordionContent key={item?._id} className="border-b-2 mt-2">
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
                    >
                      <Fa6Icons.FaPlus className="text-xl text-primary-foreground" />
                    </Button>
                  </div>
                </AccordionContent>
              ))
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
