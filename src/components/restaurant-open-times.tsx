"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Config } from "@/config"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export default function RestaurantOpenTimes({ className }: { className?: string }) {
          return (
                    <DropdownMenu>
                              <DropdownMenuTrigger className={cn("w-fit md:w-1/2 lg:w-1/3 rounded-md h-9 border bg-secondary border-black/30 dark:border-primary-foreground focus:ring-0 focus:outline-none", className)}>
                                        <DropdownMenuLabel className="flex justify-between items-center gap-2">
                                                  <p>{Config.openTimes[0].day.slice(0, 3)} {Config.openTimes[0].open} - {Config.openTimes[0].close}</p> <ChevronDown className="h-4 w-4 opacity-50" />
                                        </DropdownMenuLabel>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                        {Config.openTimes.map((time, index) => (
                                                  <DropdownMenuItem key={index} disabled className="pl-2 data-[disabled]:opacity-100">
                                                            <p>
                                                                      <span className="font-semibold">{time.day.slice(0, 3)}</span> {time.open} - {time.close}
                                                            </p>
                                                  </DropdownMenuItem>
                                        ))}
                              </DropdownMenuContent>
                    </DropdownMenu>
          )
}