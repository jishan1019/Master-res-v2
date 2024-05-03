"use client"

import { notifySuccess } from "@/components/toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BiLogOut, GoGear, LuUser2, MdSpaceDashboard } from "@/constant/icons";
import { cn } from "@/lib/utils";
import { TTokenUser } from "@/types";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type UserDropdownProps = {
          user: TTokenUser;
          profile?: string;
          className?: string;
          contentClassName?: string;
}

export default function UserDropdown({ user, profile, className, contentClassName }: UserDropdownProps) {
          const router = useRouter();
          const pathname = usePathname();

          const handleLogout = async () => {
                    notifySuccess("Success", "You have been logged out successfully!");
                    pathname !== "/" && router.push('/');
          };

          return (
                    <DropdownMenu>
                              <DropdownMenuTrigger className={cn("focus:bg-transparent focus-visible:outline-none focus-visible:ring-0", className)}>
                                        <div className="p-1 ring-1 ring-primary rounded-full">
                                                  <Avatar className="w-6 h-6">
                                                            <AvatarImage src={profile ?? "https://github.com/shadcn.png"} draggable={false} className="select-none" />
                                                            <AvatarFallback>
                                                                      {user?.name?.charAt(0)?.toUpperCase()}
                                                            </AvatarFallback>
                                                  </Avatar>
                                        </div>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className={cn("w-72 mt-4 sm:mt-6 relative rounded-xl bg-background", contentClassName)}>
                                        <DropdownMenuLabel>
                                                  <div className="flex flex-col justify-center items-center mt-5 mb-2">
                                                            <div className="p-1 ring-1 ring-primary rounded-full">
                                                                      <Avatar className="w-16 h-16">
                                                                                <AvatarImage src={profile ?? "https://github.com/shadcn.png"} alt={user?.name} draggable={false} className="select-none" />
                                                                                <AvatarFallback>
                                                                                          {user?.name?.charAt(0)?.toUpperCase()}
                                                                                </AvatarFallback>
                                                                      </Avatar>
                                                            </div>
                                                            <div className="text-center">
                                                                      <p className="text-sm sm:text-base font-semibold">
                                                                                {user?.name}
                                                                      </p>
                                                                      <p className="text-sm text-gray-500 dark:text-white">{user?.email}</p>
                                                            </div>
                                                  </div>
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        {
                                                  !pathname.includes("/dashboard") ? (
                                                            <Link href="/dashboard">
                                                                      <DropdownMenuItem className="flex items-center gap-2 py-3 cursor-pointer">
                                                                                <MdSpaceDashboard /> Dashboard
                                                                      </DropdownMenuItem>
                                                            </Link>
                                                  ) : (
                                                            <>
                                                                      {
                                                                                !pathname.includes("/dashboard/profile") ? (
                                                                                          <Link href="/dashboard/profile">
                                                                                                    <DropdownMenuItem className="flex items-center gap-2 py-3 cursor-pointer">
                                                                                                              <LuUser2 /> Profile
                                                                                                    </DropdownMenuItem>
                                                                                          </Link>
                                                                                ) : null
                                                                      }
                                                                      {
                                                                                !pathname.includes("/dashboard/settings") ? (
                                                                                          <Link href="/dashboard/settings">
                                                                                                    <DropdownMenuItem className="flex items-center gap-2 py-3 cursor-pointer">
                                                                                                              <GoGear /> Settings
                                                                                                    </DropdownMenuItem>
                                                                                          </Link>
                                                                                ) : null
                                                                      }
                                                            </>
                                                  )
                                        }
                                        <DropdownMenuItem className="flex items-center gap-2 py-3 cursor-pointer"
                                                  onClick={handleLogout}
                                        >
                                                  <BiLogOut /> Logout
                                        </DropdownMenuItem>
                              </DropdownMenuContent>
                    </DropdownMenu>
          )
}