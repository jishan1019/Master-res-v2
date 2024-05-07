"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Config } from "@/config"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import moment from "moment"

export default function RestaurantOpenTimes({ className }: { className?: string }) {
          const openTimes = Config.openTimes;

          const today = moment().format("dddd");
          const todayTime = openTimes.find(time => time.day === today);

          return (
                    <DropdownMenu>
                              <DropdownMenuTrigger className={cn("w-fit md:w-[36%] lg:w-[26%] rounded-md h-9 border bg-secondary border-black/30 dark:border-primary-foreground focus:ring-0 focus:outline-none", className)}>
                                        <DropdownMenuLabel className="flex justify-between items-center gap-2">
                                                  <p>{todayTime?.day.slice(0, 3)} {todayTime?.open} - {todayTime?.close}</p> <ChevronDown className="h-4 w-4 opacity-50" />
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