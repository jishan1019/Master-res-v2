"use client"

import { notifyError, notifySuccess } from "@/components/toast"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SlMagnifier } from "@/constant"
import { postCodeCheckSchema } from "@/lib/schema"
import { useGetAllPostCodesQuery } from "@/redux/features/post-code/postCodeApi"
import { TPostCode } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm, UseFormReturn } from "react-hook-form"
import { z } from "zod"

interface PostCodeCheckProps {
          onClickDeliveryType: (type: string) => void;
          orderType: string | null;
          deliveryType: string | null;
}

export default function PostCodeCheck({ onClickDeliveryType, orderType, deliveryType }: PostCodeCheckProps) {
          const { data, isLoading } = useGetAllPostCodesQuery(undefined);
          const postCodes = data?.data as TPostCode[];

          const [isError, setIsError] = useState<boolean>(false);

          const router = useRouter();

          const form = useForm<z.infer<typeof postCodeCheckSchema>>({
                    resolver: zodResolver(postCodeCheckSchema),
                    defaultValues: {
                              code: "",
                    },
          }) as UseFormReturn<z.infer<typeof postCodeCheckSchema>>;

          const onSubmit = async (values: z.infer<typeof postCodeCheckSchema>) => {
                    const { code } = values;

                    try {
                              if (postCodes?.length > 0) {
                                        const postCode = postCodes.find((p) => p?.postCode?.toLowerCase() === code?.slice(0, 5).toLowerCase());

                                        if (postCode) {
                                                  setIsError(false);
                                                  notifySuccess("Success", "Delivery available in your area. Redirecting to menu...", "top-center");
                                                  router.push(`/menu?order-type=${orderType}&delivery-type=${deliveryType}`);
                                        } else {
                                                  setIsError(true);
                                        }
                              }
                    } catch (error: any) {
                              notifyError("Error", "Sorry, this is not our delivery area. Alternative is to collect.", "bottom-left");
                    }
          }

          return (
                    <div className="w-full">
                              <h1 className="text-2xl md:text-3xl font-bold text-primary uppercase">Delivery</h1>
                              <p>Post code check</p>
                              <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-3 grid w-[85%] md:w-1/2 mx-auto">

                                                  <FormField
                                                            control={form.control}
                                                            name="code"
                                                            render={({ field }) => (
                                                                      <FormItem>
                                                                                <FormControl>
                                                                                          <div className="relative">
                                                                                                    <Input
                                                                                                              type="text"
                                                                                                              placeholder="Enter your post code"
                                                                                                              className="w-full bg-transparent h-12 border border-black/30 dark:border-primary-foreground focus-visible:ring-0 focus-visible:outline-none"
                                                                                                              {...field}
                                                                                                    />
                                                                                                    <button type="submit" disabled={isLoading} className="absolute top-1/2 right-3 transform -translate-y-1/2 select-none sm:cursor-pointer">
                                                                                                              <SlMagnifier size={20} />
                                                                                                    </button>
                                                                                          </div>
                                                                                </FormControl>
                                                                      </FormItem>
                                                            )}
                                                  />
                                        </form>
                              </Form>
                              {isError && (
                                        <div className="space-y-2 pt-4">
                                                  <p className="text-primary font-semibold text-sm mt-2 px-4 sm:px-0">Sorry, this is not our delivery area. Alternative is to collect.</p>
                                                  <Button size="sm" onClick={() => onClickDeliveryType("collection")}>
                                                            Collection
                                                  </Button>
                                        </div>
                              )}
                    </div>
          )
}