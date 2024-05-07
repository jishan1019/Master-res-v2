"use client"

import { Button } from "@/components/ui/button";

interface OrderButtonsProps {
          isRestaurantOpen: boolean;
          onClickOrder: (type: string) => void;
}

export default function OrderButtons({ isRestaurantOpen, onClickOrder }: OrderButtonsProps) {
          return (
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                              {isRestaurantOpen ? (
                                        <Button size="sm" onClick={() => onClickOrder("online")}>
                                                  Order Online
                                        </Button>
                              ) : (
                                        <Button size="sm" onClick={() => onClickOrder("pre-order")}>
                                                  Pre Order
                                        </Button>
                              )}
                              <Button size="sm" onClick={() => onClickOrder("book-table")}>
                                        Book a table
                              </Button>
                    </div>
          )
}