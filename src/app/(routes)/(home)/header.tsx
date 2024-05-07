"use client"

import BaseLayout from "@/app/(routes)/(shared)/(home)/base-layout";
import { ModeToggle } from "@/components/mode-toggle";
import RestaurantOpenTimes from "@/components/restaurant-open-times";
import { notifySuccess } from "@/components/toast";
import { Button } from "@/components/ui/button";
import UserDropdown from "@/components/user-dropdown";
import { Config } from "@/config";
import { Images } from "@/constant";
import { AiOutlineClose, CiPhone, Fa6Icons, IoMdShare, MdMenu } from "@/constant/icons";
import { logOut } from "@/lib/action";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

const isRestaurantOpen = true;
const discount = {
          title: "Mother's Day Special Offer",
          description: `Spend ${Config.currency}15+ on food and get 30% OFF`
}

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

export default function Header({ children }: { children: ReactNode }) {
          const auth = useAppSelector((state) => state.auth);

          const { token, updatedUser: user } = auth;

          const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

          const router = useRouter();
          const pathname = usePathname();

          const dispatch = useAppDispatch();

          const toggleMenu = () => {
                    setIsOpenMenu(!isOpenMenu);
          };

          const handleLogout = async () => {
                    await logOut();
                    dispatch(logout());
                    toggleMenu();
                    notifySuccess("Success", "You have been logged out successfully!");
                    pathname !== "/" && router.push('/');
          };

          return (
                    <BaseLayout>
                              <div className="bg-secondary pt-3 sm:pt-6 border-r border-l">
                                        <div className="flex items-center md:items-start justify-between gap-4 px-4">
                                                  <Link href={pathname === "/" ? "#" : "/"} className="text-primary text-2xl md:text-3xl font-bold">
                                                            {Config.title}
                                                  </Link>
                                                  <div className="md:hidden flex items-center gap-4">
                                                            <IoMdShare size={20}
                                                                      onClick={() => navigator.share({
                                                                                title: Config.title,
                                                                                text: Config.description,
                                                                                url: typeof window !== "undefined" && window.location.href || ""
                                                                      })}
                                                            />
                                                            <MdMenu className="size-7 cursor-pointer" onClick={toggleMenu} />
                                                  </div>
                                                  <div className="md:block hidden">
                                                            {
                                                                      token ? (
                                                                                <div className="flex items-center gap-3">
                                                                                          <h1 className="font-semibold text-sm">
                                                                                                    Hey, {user?.name?.split(" ")[0]}!
                                                                                          </h1>
                                                                                          <UserDropdown contentClassName="mr-2 lg:mr-0 mt-2 sm:mt-2" />
                                                                                </div>
                                                                      ) : (
                                                                                <Link href="/auth/login" className="flex items-center gap-2 border px-2 py-2 rounded-full">
                                                                                          <p className="font-semibold text-xs">
                                                                                                    Sign Up/Sign In
                                                                                          </p>
                                                                                          <Fa6Icons.FaRegCircleUser className="size-4 cursor-pointer" />
                                                                                </Link>
                                                                      )
                                                            }
                                                  </div>
                                        </div>
                                        <div className="py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 w-full">
                                                  <div className="flex items-center gap-4 w-full">
                                                            <div className="flex items-center gap-1">
                                                                      <CiPhone className="size-5 text-primary" />
                                                                      <p className="font-medium text-sm">
                                                                                <a href="tel:01883717373">01883717373</a> <span className="text-primary">|</span> <a href="tel:01883712052">01883712052</a>
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
                                                            <div className="w-full flex justify-end">
                                                                      <RestaurantOpenTimes />
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                              <div className="bg-red-700 md:flex items-center gap-2 hidden px-3">
                                        {navLinks.map((link, index) => (
                                                  <Link
                                                            key={index}
                                                            href={link.href}
                                                            className={`font-medium text-primary-foreground md:hover:bg-primary duration-300 px-2 py-2.5 ${pathname === link.href ? "bg-primary" : ""}`}
                                                  >
                                                            {link.name}
                                                  </Link>
                                        ))}
                              </div>
                              <div className="bg-gray-800 py-2 sm:py-4 flex flex-col md:flex-row items-center justify-center gap-1 px-3 md:px-0 text-primary-foreground">
                                        <h1 className="text-lg md:text-2xl font-semibold">
                                                  {discount.title}
                                        </h1>
                                        <p className="text-xs md:text-sm">
                                                  {discount.description}
                                        </p>
                              </div>
                              <div className="w-full h-full">
                                        <Image
                                                  src={Images.Banner}
                                                  alt="Banner"
                                                  width={4608}
                                                  height={2592}
                                                  className="w-full h-full sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                                        />
                              </div>
                              <div className={`fixed top-0 left-0 md:hidden w-full h-full bg-background z-50 p-5 transition-all duration-300 transform ${isOpenMenu ? "translate-x-0" : "translate-x-full"}`}>
                                        <AiOutlineClose
                                                  className="text-2xl absolute top-5 right-5"
                                                  onClick={toggleMenu}
                                        />
                                        <div>
                                                  <Link href={pathname === "/" ? "#" : "/"} className="text-primary text-2xl md:text-3xl font-bold"
                                                            onClick={toggleMenu}
                                                  >
                                                            {Config.title}
                                                  </Link>
                                                  <p className="text-sm">
                                                            {Config.tagLine}
                                                  </p>
                                                  <div className="grid gap-3 pt-5">
                                                            {navLinks.map((link, index) => (
                                                                      <Link
                                                                                key={index}
                                                                                href={link.href}
                                                                                className={`font-medium px-3 py-2 rounded-md ${pathname === link.href ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
                                                                                onClick={toggleMenu}
                                                                      >
                                                                                {link.name}
                                                                      </Link>
                                                            ))}
                                                            {
                                                                      token ? (
                                                                                <>
                                                                                          <Link href="/dashboard" className="font-medium px-3 py-2 rounded-md bg-secondary text-secondary-foreground"
                                                                                                    onClick={toggleMenu}
                                                                                          >
                                                                                                    Dashboard
                                                                                          </Link>
                                                                                          <p className="font-medium px-3 py-2 rounded-md bg-secondary text-secondary-foreground"
                                                                                                    onClick={handleLogout}
                                                                                          >
                                                                                                    Logout
                                                                                          </p>
                                                                                </>
                                                                      ) : (
                                                                                <Link href="/auth/login" className="font-medium px-3 py-2 rounded-md bg-secondary text-secondary-foreground"
                                                                                          onClick={toggleMenu}
                                                                                >
                                                                                          Sign Up/Sign In
                                                                                </Link>
                                                                      )
                                                            }
                                                            <div className="flex justify-end">
                                                                      <p className="bg-secondary text-secondary-foreground rounded-md">
                                                                                <ModeToggle />
                                                                      </p>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                              <div>
                                        {children}
                              </div>
                    </BaseLayout>
          )
}