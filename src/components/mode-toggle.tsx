"use client"

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
          const { setTheme } = useTheme();

          return (
                    <Button
                              aria-label="Toggle theme"
                              className="flex items-center gap-2 hover:bg-transparent focus:bg-transparent focus-visible:outline-none focus-visible:ring-0"
                              variant="ghost"
                              size="sm"
                    >
                              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                                        onClick={() => setTheme("dark")}
                              />
                              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                                        onClick={() => setTheme("light")}
                              />
                              <span className="sr-only">Toggle theme</span>
                    </Button>
          )
}
