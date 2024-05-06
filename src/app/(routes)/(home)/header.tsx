"use client"

import BaseLayout from "@/app/(routes)/(shared)/(home)/base-layout";
import { Button } from "@/components/ui/button";
import { Config } from "@/config";
import { AiOutlineClose, BiLogIn, BiLogOut, CiPhone, Fa6Icons, IoMdShare, MdMenu, MdSpaceDashboard } from "@/constant/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import RestaurantOpenTimes from "./restaurant-open-times";

const isRestaurantOpen = true;

const navLinks = [
          {
                    name: "Home",
                    href: "/",
          },
          {
                    name: "About",
                    href: "/about",
          },
          {
                    name: "Menu",
                    href: "/menu",
          },
          {
                    name: "Services",
                    href: "/services",
          },
];

export default function Header({ token }: { token: string }) {
          const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

          const pathname = usePathname();

          const toggleMenu = () => {
                    setIsOpenMenu(!isOpenMenu);
          };

          return (
                    <main className="bg-secondary border-b shadow-sm px-4">
                              <BaseLayout className="space-y-2 py-6">
                                        <div className="flex items-center md:items-start justify-between gap-4">
                                                  <div>
                                                            <Link href={pathname === "/" ? "#" : "/"} className="text-primary text-lg font-semibold">
                                                                      {Config.title}
                                                            </Link>
                                                  </div>
                                                  <div className="md:hidden flex items-center gap-4">
                                                            <IoMdShare size={20} />
                                                            <MdMenu className="size-7 cursor-pointer" onClick={toggleMenu} />
                                                  </div>
                                                  <div className="md:block hidden">
                                                            <Link href="/auth/login" className="flex items-center gap-2 border px-2 py-2 rounded-full">
                                                                      <p className="font-semibold text-xs">
                                                                                Sign Up/Sign In
                                                                      </p>
                                                                      <Fa6Icons.FaRegCircleUser className="size-4 cursor-pointer" />
                                                            </Link>
                                                  </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
                                                  <div className="flex items-center gap-4 w-full">
                                                            <div className="flex items-center gap-1">
                                                                      <CiPhone className="size-5 text-primary" />
                                                                      <p className="font-medium text-sm">
                                                                                <a href="/num1">01883717373</a> <span className="text-primary">|</span> <a href="/num2">01883712052</a>
                                                                      </p>
                                                            </div>
                                                  </div>
                                                  <div className="w-full hidden md:block">
                                                            <Button disabled className="disabled:opacity-100"
                                                                      variant={isRestaurantOpen ? "green" : "default"}
                                                                      size="sm"
                                                            >
                                                                      Now {isRestaurantOpen ? "Open" : "Closed"}
                                                            </Button>
                                                  </div>
                                                  <RestaurantOpenTimes className="hidden md:flex" />
                                                  <div className="flex items-center justify-between md:hidden">
                                                            <div className="w-full">
                                                                      <Button disabled className="disabled:opacity-100"
                                                                                variant={isRestaurantOpen ? "green" : "default"}
                                                                                size="sm"
                                                                      >
                                                                                Now {isRestaurantOpen ? "Open" : "Closed"}
                                                                      </Button>
                                                            </div>
                                                            <RestaurantOpenTimes />
                                                  </div>
                                        </div>
                              </BaseLayout>
                              <div className={`fixed top-0 left-0 md:hidden w-full h-full bg-background z-50 p-5 transition-all duration-300 transform ${isOpenMenu ? "translate-x-0" : "translate-x-full"}`}>
                                        <AiOutlineClose
                                                  className="text-2xl absolute top-5 right-5"
                                                  onClick={toggleMenu}
                                        />
                                        <div className="flex flex-col items-center gap-5 pt-16">
                                                  {navLinks.map((link, index) => (
                                                            <Link
                                                                      key={index}
                                                                      href={link.href}
                                                                      className={`font-medium ${pathname === link.href ? "text-primary underline decoration-primary" : "text-gray-600 dark:text-white"}`}
                                                                      onClick={toggleMenu}
                                                            >
                                                                      {link.name}
                                                            </Link>
                                                  ))}
                                                  {
                                                            !token ? (
                                                                      <Link href="/auth/login" onClick={toggleMenu}>
                                                                                <Button className="shadow-md flex items-center gap-2">
                                                                                          <BiLogIn /> Login
                                                                                </Button>
                                                                      </Link>
                                                            ) : (
                                                                      <>
                                                                                <Link href="/dashboard" onClick={toggleMenu}>
                                                                                          <Button className="shadow-md flex items-center gap-2">
                                                                                                    <MdSpaceDashboard /> Dashboard
                                                                                          </Button>
                                                                                </Link>
                                                                                <Button className="shadow-md flex items-center gap-2"
                                                                                          onClick={() => {
                                                                                                    toggleMenu();
                                                                                          }}
                                                                                >
                                                                                          <BiLogOut /> Logout
                                                                                </Button>
                                                                      </>
                                                            )
                                                  }
                                        </div>
                              </div>
                    </main>
          )
}