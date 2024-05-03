"use client"

import LogoHelper from "@/components/logo-helper";
import MDFLogoHelper from "@/components/mdf-logo-helper";
import { ModeToggle } from "@/components/mode-toggle";
import { notifySuccess } from "@/components/toast";
import { Button, buttonVariants } from "@/components/ui/button";
import { Config } from "@/config";
import Link from "next/link";

export default function HomePage() {
          const handleDiveIn = () => {
                    notifySuccess("Diving in! 🚀", `Welcome to your new app ${Config.title} ! 🎉`)
          }

          return (
                    <main className="flex justify-center items-center h-screen">
                              <section className="flex flex-col justify-center items-center gap-5 px-1 sm:px-0">
                                        <LogoHelper imgClassName="w-32" />
                                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                                                  Welcome to your new app! 🚀 <br />
                                                  <span className="uppercase text-destructive">({Config.title})</span>
                                        </h1>
                                        <div className="flex justify-center items-center gap-5 mt-3">
                                                  <Button variant="default" size="sm" onClick={handleDiveIn}>
                                                            Let&apos;s dive in!
                                                  </Button>
                                                  <ModeToggle />
                                        </div>
                                        <Link href="#" className={buttonVariants({ size: "sm", className: "text-xs" })}>
                                                  Top Loader
                                        </Link>

                                        <MDFLogoHelper className="mt-5" imgClassName="w-80" />
                              </section>
                    </main>
          )
}