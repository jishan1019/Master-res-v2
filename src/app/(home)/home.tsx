"use client"

import CustomToastMessage from "@/components/custom-toast-message";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Config } from "@/config";
import Image from "next/image";
import toast from "react-hot-toast";

export default function HomePage() {
          const handleDiveIn = () => {
                    toast.custom(() => (
                              <CustomToastMessage
                                        title="Diving in! 🚀"
                                        message={`Welcome to your new app ${Config.siteTitle} ! 🎉`}
                              />
                    ))
          }

          return (
                    <main className="flex justify-center items-center h-screen">
                              <section className="flex flex-col justify-center items-center gap-5 px-1 sm:px-0">
                                        <div>
                                                  <Image
                                                            src={Config.siteLogo}
                                                            alt={Config.siteFullTitle}
                                                            width={100}
                                                            height={100}
                                                            draggable={false}
                                                            className="select-none"
                                                  />
                                        </div>
                                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                                                  Welcome to your new app! 🚀 <br />
                                                  ({Config.siteTitle})
                                        </h1>
                                        <p className="text-lg text-center">
                                                  Get started by editing{" "}
                                                  <code className="p-2 font-mono text-sm bg-gray-100 dark:bg-primary dark:text-primary-foreground shadow-md rounded-md">
                                                            src/app/page.tsx
                                                  </code>
                                        </p>
                                        <div className="flex justify-center items-center gap-5 mt-3">
                                                  <Button variant="default" size="sm" onClick={handleDiveIn}>
                                                            Let&apos;s dive in!
                                                  </Button>
                                                  <ModeToggle />
                                        </div>

                                        
                                        
                              </section>
                    </main>
          )
}