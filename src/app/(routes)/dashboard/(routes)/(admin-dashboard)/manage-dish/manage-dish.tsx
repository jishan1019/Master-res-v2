"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { categories } from '@/utils/category';
import Nestable from 'react-nestable';

export default function ManageDish() {
          const items = categories.map((item) => {
                    return {
                              id: item._id,
                              ...item
                    }
          });

          const renderItem = ({ item }: { item: any }) => {
                    return (
                              <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1">
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

          return (
                    <>
                              <Nestable
                                        items={items}
                                        renderItem={renderItem}
                              // onChange={(items) => console.log(items)}
                              />
                    </>
          )
}