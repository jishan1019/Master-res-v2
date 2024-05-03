"use client"

import LogoHelper from "@/components/logo-helper"
import { ModeToggle } from "@/components/mode-toggle"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { HiOutlineMenuAlt4 } from "@/constant"
import { CircleUser, Home, LineChart, Package, Search, ShoppingCart, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
          const pathname = usePathname();

          const navLinks = [
                    {
                              href: "/dashboard",
                              icon: <Home className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Dashboard",
                    },
                    {
                              href: "/dashboard/orders",
                              icon: <ShoppingCart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Orders",
                              badge: 6,
                    },
                    {
                              href: "/dashboard/products",
                              icon: <Package className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Products",
                    },
                    {
                              href: "/dashboard/customers",
                              icon: <Users className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Customers",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics2",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics3",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics4",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics5",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics6",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics7",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics8",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics9",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics0",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics01",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics02",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics03",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics04",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics05",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics06",
                    },
                    {
                              href: "/dashboard/analytics",
                              icon: <LineChart className="h-5 w-5 sm:h-4 sm:w-4" />,
                              label: "Analytics07",
                    },
          ];

          return (
                    <div className="grid min-h-screen w-full lg:grid-cols-[350px_1fr]">
                              <div className="hidden border-r bg-muted/40 lg:block">
                                        <div className="flex flex-col gap-2">
                                                  <div className="flex items-center border-b px-4 lg:px-6 py-6">
                                                            <Link href="/" className="flex justify-center items-center mx-auto">
                                                                      <LogoHelper imgClassName="w-20" />
                                                            </Link>
                                                  </div>
                                                  <div className="flex-1">
                                                            <ScrollArea className="h-full">
                                                                      <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
                                                                                {navLinks.map((link) => (
                                                                                          <Link
                                                                                                    key={link.label}
                                                                                                    href={link.href}
                                                                                                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathname === link.href ? "bg-muted text-primary" : ""}`}
                                                                                          >
                                                                                                    {link.icon} {link.label} {link.badge && <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">{link.badge}</Badge>}
                                                                                          </Link>
                                                                                ))}
                                                                      </nav>
                                                            </ScrollArea>
                                                  </div>
                                                  <div className="mt-auto p-4">
                                                            <Card>
                                                                      <CardHeader>
                                                                                <CardTitle>Upgrade to Pro</CardTitle>
                                                                                <CardDescription>
                                                                                          Unlock all features and get unlimited access to our
                                                                                          support team.
                                                                                </CardDescription>
                                                                      </CardHeader>
                                                                      <CardContent>
                                                                                <Button size="sm" className="w-full">
                                                                                          Upgrade
                                                                                </Button>
                                                                      </CardContent>
                                                            </Card>
                                                  </div>
                                        </div>
                              </div>
                              <div className="flex flex-col">
                                        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                                                  <Sheet>
                                                            <SheetTrigger asChild>
                                                                      <Button
                                                                                variant="outline"
                                                                                size="sm"
                                                                                className="shrink-0 lg:hidden"
                                                                      >
                                                                                <HiOutlineMenuAlt4 className="h-5 w-5" />
                                                                                <span className="sr-only">Toggle navigation menu</span>
                                                                      </Button>
                                                            </SheetTrigger>
                                                            <SheetContent side="left" className="flex flex-col px-3">
                                                                      <Link href="/">
                                                                                <LogoHelper className="flex items-center justify-center pb-2 sm:pb-5 sm:pt-5" imgClassName="w-24" />
                                                                      </Link>
                                                                      <hr className="border-t border-border" />
                                                                      <ScrollArea className="flex-1">
                                                                                <nav className="grid gap-2 text-lg font-medium px-3">
                                                                                          {navLinks.map((link) => (
                                                                                                    <Link
                                                                                                              key={link.label}
                                                                                                              href={link.href}
                                                                                                              className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground sm:hover:text-foreground ${pathname === link.href ? "bg-muted text-foreground" : ""}`}
                                                                                                    >
                                                                                                              {link.icon} {link.label} {link.badge && <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">{link.badge}</Badge>}
                                                                                                    </Link>
                                                                                          ))}
                                                                                </nav>
                                                                      </ScrollArea>
                                                                      <div className="mt-auto">
                                                                                <Card>
                                                                                          <CardHeader>
                                                                                                    <CardTitle>Upgrade to Pro</CardTitle>
                                                                                                    <CardDescription>
                                                                                                              Unlock all features and get unlimited access to our
                                                                                                              support team.
                                                                                                    </CardDescription>
                                                                                          </CardHeader>
                                                                                          <CardContent>
                                                                                                    <Button size="sm" className="w-full">
                                                                                                              Upgrade
                                                                                                    </Button>
                                                                                          </CardContent>
                                                                                </Card>
                                                                      </div>
                                                            </SheetContent>
                                                  </Sheet>
                                                  <div className="w-full flex-1">
                                                            <form>
                                                                      <div className="relative">
                                                                                <Search className="absolute left-2.5 top-2.5 h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground" />
                                                                                <Input
                                                                                          type="search"
                                                                                          placeholder="Search products..."
                                                                                          className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                                                                />
                                                                      </div>
                                                            </form>
                                                  </div>
                                                  <div className="flex items-center gap-2">
                                                            <ModeToggle />
                                                            <DropdownMenu>
                                                                      <DropdownMenuTrigger asChild>
                                                                                <Button variant="secondary" size="icon" className="rounded-full">
                                                                                          <CircleUser className="h-5 w-5" />
                                                                                          <span className="sr-only">Toggle user menu</span>
                                                                                </Button>
                                                                      </DropdownMenuTrigger>
                                                                      <DropdownMenuContent align="end">
                                                                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                                                <DropdownMenuSeparator />
                                                                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                                                                <DropdownMenuItem>Support</DropdownMenuItem>
                                                                                <DropdownMenuSeparator />
                                                                                <DropdownMenuItem>Logout</DropdownMenuItem>
                                                                      </DropdownMenuContent>
                                                            </DropdownMenu>
                                                  </div>
                                        </header>
                                        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                                                  {children}
                                        </main>
                              </div>
                    </div>
          )
}