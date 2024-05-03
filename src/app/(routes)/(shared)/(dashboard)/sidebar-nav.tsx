"use client"

import { SheetClose } from "@/components/ui/sheet"
import { TTokenUser } from "@/types"
import { navLinks } from "@/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type SidebarNavProps = {
          user: TTokenUser,
          mobile?: boolean
}

export default function SidebarNav({ user, mobile }: SidebarNavProps) {
          const pathname = usePathname();

          if (mobile) {
                    return (
                              <>
                                        {navLinks.map((link, i) => (
                                                  <SheetClose
                                                            key={i} asChild>
                                                            <Link
                                                                      href={link.href}
                                                                      className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 
                                                                      ${pathname === link.href ? "bg-primary text-primary-foreground" : "sm:hover:bg-muted sm:hover:text-primary"}
                                                                      ${!link.roles.includes(user?.role) && "hidden"}
                                                                      ${link?.isHidden && "hidden"}
                                                                      `}
                                                            >
                                                                      {link.icon} {link.label}
                                                            </Link>
                                                  </SheetClose>
                                        ))}
                              </>
                    )
          }

          return (
                    <>
                              {navLinks.map((link, i) => (
                                        <Link
                                                  key={i}
                                                  href={link.href}
                                                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all 
                                                  ${pathname === link.href ? "bg-primary text-primary-foreground" : "hover:bg-muted hover:text-primary"}
                                                  ${!link.roles.includes(user?.role) && "hidden"}
                                                  ${link?.isHidden && "hidden"}
                                                  `}
                                        >
                                                  {link.icon} {link.label}
                                        </Link>
                              ))}
                    </>
          )
}