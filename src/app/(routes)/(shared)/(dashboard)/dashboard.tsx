"use client"

import BreadCrumb from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
          return (
                    <>
                              <BreadCrumb />
                              <div
                                        className="flex flex-1 items-center justify-center shadow-sm"
                              >
                                        <div className="flex flex-col items-center gap-1 text-center">
                                                  <h3 className="text-2xl font-bold tracking-tight">
                                                            You have no products
                                                  </h3>
                                                  <p className="text-sm text-muted-foreground">
                                                            You can start selling as soon as you add a product.
                                                  </p>
                                                  <Button className="mt-4">Add Product</Button>
                                        </div>
                              </div>
                    </>
          )
}