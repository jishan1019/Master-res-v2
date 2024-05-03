"use client"

import { Button } from "@/components/ui/button"
import { CircleUser, Settings } from "lucide-react"

export default function SidebarFooter() {
          return (
                    <>
                              <Button
                                        className="text-lg h-12 sm:h-10 flex justify-start items-center gap-2 rounded-xl w-full bg-muted sm:hover:bg-primary sm:hover:text-primary-foreground sm:duration-300"
                                        variant="ghost"
                              >
                                        <Settings className="h-5 w-5" /> Settings
                              </Button>
                              <Button
                                        className="text-lg h-12 sm:h-10 flex justify-start items-center gap-2 rounded-xl w-full bg-muted sm:hover:bg-primary sm:hover:text-primary-foreground sm:duration-300"
                                        variant="ghost"
                              >
                                        <CircleUser className="h-5 w-5" /> Profile
                              </Button>
                    </>
          )
}