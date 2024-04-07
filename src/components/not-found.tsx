"use client"

import NotFoundImg from "@/assets/not-found.webp";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

export default function NotFound() {
          return (
                    <div className="flex items-center justify-center h-screen">
                              <div className="flex flex-col justify-center items-center">
                                        <Image src={NotFoundImg} alt="Not Found" width={563} height={450} className="select-none w-96" placeholder="blur" priority={true} draggable={false} />
                                        <p className="text-base md:text-lg mt-3 px-4 md:px-0 text-center">The page you are looking for does not exist.</p>
                                        <Link href="/" className={buttonVariants({ size: "sm", className: "mt-5 text-xs flex items-center gap-2" })}>
                                                  <HiOutlineArrowLongLeft />
                                                  Go home
                                        </Link>
                              </div>
                    </div>
          )
}