"use client"

import Loading from "@/components/loading";
import { Config } from "@/config";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import BookTable from "./book-table";
import DeliveryOptions from "./delivery-options";
import OrderButtons from "./order-buttons";
import PostCodeCheck from "./post-code-check";
import PreOrder from "./pre-order";

function OrderProcessSuspense() {
          const isRestaurantOpen = Config.isRestaurantOpen;

          const router = useRouter();
          const searchparams = useSearchParams();
          const orderTypeFromUrl = searchparams.get("order-type");
          const deliveryTypeFromUrl = searchparams.get("delivery-type");

          const handleOrderClick = (type: string) => {
                    router.push(`?order-type=${type}`);
          };

          const handleDeliveryTypeClick = (type: string) => {
                    router.push(`?order-type=${orderTypeFromUrl}&delivery-type=${type}`);

                    if (type === "collection") {
                              router.push(`/menu?order-type=${orderTypeFromUrl}&delivery-type=${type}`);
                    }
          };

          return (
                    <div className="flex flex-col justify-center items-center w-[90%] md:w-2/3 mx-auto rounded-lg my-5 sm:my-10 py-5 md:py-10 space-y-3 border bg-secondary text-center">
                              {deliveryTypeFromUrl === null && (
                                        <>
                                                  <h3 className="text-lg">Welcome to</h3>
                                                  <h1 className="text-2xl md:text-3xl font-bold text-primary">{Config.title}</h1>
                                                  <p className="text-lg">Please Select</p>
                                        </>
                              )}

                              {orderTypeFromUrl === null && (
                                        <OrderButtons isRestaurantOpen={isRestaurantOpen} onClickOrder={handleOrderClick} />
                              )}

                              {orderTypeFromUrl === "online" && deliveryTypeFromUrl === null && (
                                        <DeliveryOptions onClickDeliveryType={handleDeliveryTypeClick} />
                              )}

                              {orderTypeFromUrl === "pre-order" && (
                                        <PreOrder />
                              )}

                              {orderTypeFromUrl === "book-table" && (
                                        <BookTable />
                              )}

                              {deliveryTypeFromUrl === "delivery" && (
                                        <PostCodeCheck onClickDeliveryType={handleDeliveryTypeClick} orderType={orderTypeFromUrl} deliveryType={deliveryTypeFromUrl} />
                              )}
                    </div>
          )
}

export default function OrderProcess() {
          return (
                    <Suspense fallback={<Loading />}>
                              <OrderProcessSuspense />
                    </Suspense>
          )
}