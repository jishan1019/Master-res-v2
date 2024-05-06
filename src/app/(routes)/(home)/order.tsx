"use client"

import { buttonVariants } from "@/components/ui/button"
import { Config } from "@/config"
import Link from "next/link"

export default function Order() {
          return (
                    <div className="flex flex-col justify-center items-center w-[90%] md:w-2/3 mx-auto rounded-lg my-5 sm:my-10 py-10 md:py-16 space-y-3 border bg-secondary">
                              <h3 className="text-lg">Welcome to</h3>
                              <h1 className="text-4xl font-bold text-primary">{Config.title}</h1>
                              <p className="text-lg">Please Select</p>
                              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                                        <Link href="/menu" className={buttonVariants({ size: "sm" })}>
                                                  Order Online
                                        </Link>
                                        <Link href="/menu" className={buttonVariants({ size: "sm" })}>
                                                  Book a table
                                        </Link>
                              </div>
                    </div>
          )
}