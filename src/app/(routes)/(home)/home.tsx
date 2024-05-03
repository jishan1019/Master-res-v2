"use client"

import LogoHelper from "@/components/logo-helper";
import { buttonVariants } from "@/components/ui/button";
import { Config } from "@/config";
import Link from "next/link";

export default function HomePage({ token }: { token: string }) {
          return (
                    <main className="flex justify-center items-center h-screen">
                              <section className="flex flex-col justify-center items-center gap-5 px-1 sm:px-0">
                                        <LogoHelper imgClassName="w-32" />
                                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                                                  Welcome to your new app! 🚀 <br />
                                                  <span className="uppercase text-primary">({Config.title})</span>
                                        </h1>
                                        <div className="flex items-center gap-4">
                                                  {
                                                            token ? (
                                                                      <Link href="/dashboard" className={buttonVariants({ size: "sm", className: "text-xs" })}>
                                                                                Dashboard
                                                                      </Link>
                                                            ) : (
                                                                      <Link href="/auth/login" className={buttonVariants({ size: "sm", className: "text-xs" })}>
                                                                                Get Started
                                                                      </Link>
                                                            )
                                                  }
                                        </div>
                              </section>
                    </main>
          )
}