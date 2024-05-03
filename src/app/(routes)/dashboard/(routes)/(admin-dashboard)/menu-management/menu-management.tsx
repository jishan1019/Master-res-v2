"use client"

import BreadCrumb from "@/components/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { categories } from '@/utils/category';
import Nestable from 'react-nestable';

export default function MenuManagement() {
          const items = categories.map((item, i) => {
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

          const handleOnChange = (items: any) => {
                    console.log(items);
          };

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
                                        onDragStart={(item: any) => console.log('onDragStart', item)}
                              />
                    </>
          )
}