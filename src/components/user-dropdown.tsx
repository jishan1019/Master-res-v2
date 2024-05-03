"use client"

import { notifySuccess } from "@/components/toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BiLogOut, GoGear, LuUser2, MdSpaceDashboard } from "@/constant/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type UserDropdownProps = {
          user: any;
          children: React.ReactNode;
          className?: string;
          contentClassName?: string;
}

export default function UserDropdown({ user, children, className, contentClassName }: UserDropdownProps) {
          const router = useRouter();
          const pathname = usePathname();

          const handleLogout = async () => {
                    notifySuccess("Success", "You have been logged out successfully!");
                    pathname !== "/" && router.push('/');
          };

          return (
                    <DropdownMenu>
                              <DropdownMenuTrigger className={cn("focus:bg-transparent focus-visible:outline-none focus-visible:ring-0", className)}>
                                        {children}
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className={cn("w-72 mt-4 relative rounded-xl", contentClassName)}>
                                        <DropdownMenuLabel>
                                                  <div className="flex flex-col justify-center items-center mt-5 mb-2">
                                                            <div className="p-1 ring-1 ring-primary rounded-full">
                                                                      <Avatar className="w-16 h-16">
                                                                                <AvatarImage src={`https://github.com/shadcn.png`} alt={user?.name} draggable={false} className="select-none" />
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
                                                                      <DropdownMenuItem className="flex items-center gap-2 py-3 cursor-pointer hover:bg-gray-100 duration-300">
                                                                                <MdSpaceDashboard /> Dashboard
                                                                      </DropdownMenuItem>
                                                            </Link>
                                                  ) : (
                                                            <>
                                                                      {
                                                                                !pathname.includes("/dashboard/profile") ? (
                                                                                          <Link href="/dashboard/profile?tab=me">
                                                                                                    <DropdownMenuItem className="flex items-center gap-2 py-3 cursor-pointer hover:bg-gray-100 duration-300">
                                                                                                              <LuUser2 /> Profile
                                                                                                    </DropdownMenuItem>
                                                                                          </Link>
                                                                                ) : null
                                                                      }
                                                            </>
                                                  )
                                        }
                                        <Link href="/dashboard/settings">
                                                  <DropdownMenuItem className="flex items-center gap-2 py-3 cursor-pointer hover:bg-gray-100 duration-300">
                                                            <GoGear /> Settings
                                                  </DropdownMenuItem>
                                        </Link>
                                        <DropdownMenuItem className="flex items-center gap-2 py-3 cursor-pointer hover:bg-gray-100 duration-300"
                                                  onClick={handleLogout}
                                        >
                                                  <BiLogOut /> Logout
                                        </DropdownMenuItem>
                              </DropdownMenuContent>
                    </DropdownMenu>
          )
}