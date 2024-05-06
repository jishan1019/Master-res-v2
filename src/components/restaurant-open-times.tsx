"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Config } from "@/config"
import { cn } from "@/lib/utils"

export default function RestaurantOpenTimes({ className }: { className?: string }) {
          return (
                    <Select>
                              <SelectTrigger className={cn("w-[230px] md:w-2/5 lg:w-1/5 bg-secondary border-black/30 dark:border-primary-foreground focus:ring-0 focus:outline-none", className)}>
                                        <SelectValue placeholder={`${Config.openTimes[0].day.slice(0, 3)} ${Config.openTimes[0].open} - ${Config.openTimes[0].close} ${Config.openTimes[0].amPm}`} />
                              </SelectTrigger>
                              <SelectContent>
                                        {Config.openTimes.map((time, index) => (
                                                  <SelectItem key={index} value={time.day} disabled className="pl-2 data-[disabled]:opacity-100">
                                                            <span className="font-semibold">{time.day.slice(0, 3)}</span> {time.open} - {time.close} {time.amPm}
                                                  </SelectItem>
                                        ))}
                              </SelectContent>
                    </Select>
          )
}