"use client"

import { Button } from "@/components/ui/button";

interface DeliveryOptionsProps {
          onClickDeliveryType: (type: string) => void;
}

export default function DeliveryOptions({ onClickDeliveryType }: DeliveryOptionsProps) {
          return (
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                              <Button size="sm" onClick={() => onClickDeliveryType("delivery")}>
                                        Delivery
                              </Button>
                              <Button size="sm" onClick={() => onClickDeliveryType("collection")}>
                                        Collection
                              </Button>
                    </div>
          )
}