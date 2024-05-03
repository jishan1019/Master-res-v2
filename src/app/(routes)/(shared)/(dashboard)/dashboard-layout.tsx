"use client"

import LogoHelper from "@/components/logo-helper"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import UserDropdown from "@/components/user-dropdown"
import { Config } from "@/config"
import { HiOutlineMenuAlt4 } from "@/constant"
import { TTokenUser } from "@/types"
import { navLinks } from "@/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

export default function DashboardLayout({ user, children }: { user: TTokenUser, children: ReactNode }) {
          const pathname = usePathname();

          return (
                    <div className="grid min-h-screen w-full lg:grid-cols-[350px_1fr]">
                              <div className="hidden border-r bg-muted lg:block">
                                        <div className="flex flex-col gap-2 sticky top-0">
                                                  <div className="flex flex-col items-center border-b px-4 lg:px-6 py-6 gap-3">
                                                            <Link href="/">
                                                                      <LogoHelper className="flex items-center justify-center sm:pt-6" imgClassName="w-24" />
                                                            </Link>
                                                            <p className="text-sm text-muted-foreground font-medium text-center">
                                                                      {Config.tagLine}
                                                            </p>
                                                  </div>
                                                  <ScrollArea className="mx-1 h-[calc(100vh-11rem)]">
                                                            <nav className="grid items-start px-2 text-lg lg:px-4 gap-2">
                                                                      {navLinks.map((link, i) => (
                                                                                <Link
                                                                                          key={i}
                                                                                          href={link.href}
                                                                                          className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all 
                                                                                          ${pathname === link.href ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-primary"}
                                                                                          ${!link.roles.includes(user?.role) && "hidden"}
                                                                                          ${link?.isHidden && "hidden"}
                                                                                          `}
                                                                                >
                                                                                          {link.icon} {link.label}
                                                                                </Link>
                                                                      ))}
                                                            </nav>
                                                  </ScrollArea>
                                        </div>
                              </div>
                              <div className="flex flex-col">
                                        <header className="sticky top-0 flex h-20 items-center gap-4 border-b bg-muted px-4 lg:h-[60px] lg:px-6">
                                                  <Sheet>
                                                            <SheetTrigger asChild>
                                                                      <Button
                                                                                variant="outline"
                                                                                size="sm"
                                                                                className="shrink-0 lg:hidden bg-muted"
                                                                      >
                                                                                <HiOutlineMenuAlt4 className="h-5 w-5" />
                                                                                <span className="sr-only">Toggle navigation menu</span>
                                                                      </Button>
                                                            </SheetTrigger>
                                                            <SheetContent side="left" className="flex flex-col px-3 w-[85%] sm:w-full">
                                                                      <div className="flex flex-col items-center border-b px-4 lg:px-6 py-6 gap-3">
                                                                                <Link href="/">
                                                                                          <LogoHelper className="flex items-center justify-center" imgClassName="w-24" />
                                                                                </Link>
                                                                                <p className="text-sm text-muted-foreground font-medium text-center">
                                                                                          {Config.tagLine}
                                                                                </p>
                                                                      </div>
                                                                      <ScrollArea className="flex-1">
                                                                                <nav className="grid gap-2 text-sm sm:text-lg px-3">
                                                                                          {navLinks.map((link, i) => (
                                                                                                    <SheetClose
                                                                                                              key={i} asChild>
                                                                                                              <Link
                                                                                                                        href={link.href}
                                                                                                                        className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 
                                                                                                                        ${pathname === link.href ? "bg-primary text-primary-foreground" : "text-muted-foreground sm:hover:bg-muted sm:hover:text-primary"}
                                                                                                                        ${!link.roles.includes(user?.role) && "hidden"}
                                                                                                                        ${link?.isHidden && "hidden"}
                                                                                                                        `}
                                                                                                              >
                                                                                                                        {link.icon} {link.label}
                                                                                                              </Link>
                                                                                                    </SheetClose>
                                                                                          ))}
                                                                                </nav>
                                                                      </ScrollArea>
                                                            </SheetContent>
                                                  </Sheet>
                                                  <div className="w-full flex-1">
                                                            <h1 className="text-lg font-semibold hidden md:block">
                                                                      Welcome to <span className="text-primary">{Config.title}</span> {user?.role !== "user" && <span className="capitalize">{user?.role}</span>} Dashboard
                                                            </h1>
                                                            <h1 className="text-lg font-semibold md:hidden">
                                                                      <span className="text-primary">{Config.title}</span>
                                                            </h1>
                                                  </div>
                                                  <div className="flex items-center gap-2">
                                                            <ModeToggle />
                                                            <UserDropdown user={user} contentClassName='mr-2 sm:mr-5' />

                                                  </div>
                                        </header>
                                        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                                                  {children}
                                        </main>
                              </div>
                    </div>
          )
}