"use client"

import BreadCrumb from "@/components/breadcrumb";
import Loading from "@/components/loading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useGetAllCategoriesQuery } from "@/redux/features/menu/menuApi";
import { TCategory } from "@/types";
import Nestable from 'react-nestable';

export default function MenuManagement() {
          const { data, isLoading } = useGetAllCategoriesQuery(undefined);

          const categories = data?.data || [] as TCategory[];

          const items = categories?.map((item: TCategory, i: number) => {
                    return {
                              id: i,
                              ...item
                    }
          });

          const renderItem = ({ item }: { item: any }) => {
                    return (
                              <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value={item.name}>
                                                  <AccordionTrigger>{item.name}</AccordionTrigger>
                                                  <AccordionContent>
                                                            {item.isCategoryDesAvailable && (
                                                                      <p>
                                                                                {item.categoryDes}
                                                                      </p>
                                                            )}
                                                  </AccordionContent>
                                        </AccordionItem>
                              </Accordion>
                    );
          };

          const handleOnChange = (dragItems: any) => {
                    const items = dragItems?.items;

                    console.log(items);
          };

          if (isLoading) return <Loading />

          return (
                    <>
                              <BreadCrumb
                                        title="Menu Management"
                                        description="Manage your menu items here"
                              />
                              <Nestable
                                        items={items}
                                        renderItem={renderItem}
                                        onChange={handleOnChange}
                              />
                    </>
          )
}