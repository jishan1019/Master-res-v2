"use client"

import LogoHelper from "@/components/logo-helper"
import MDFLogoHelper from "@/components/mdf-logo-helper"
import { Config } from "@/config"
import { RiFacebookCircleFill, RiInstagramFill, RiYoutubeFill } from "@/constant"
import { cn } from "@/lib/utils"

export default function Footer({ className }: { className?: string }) {
          return (
                    <div className={cn("text-secondary-foreground bg-secondary pt-6 sm:pt-16 border-t", className)}>
                              <div className="grid gap-7 sm:gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-4">
                                        <div className="sm:col-span-1">
                                                  <div className="inline-flex items-center">
                                                            <LogoHelper imgClassName="w-28 -ml-1" />
                                                  </div>
                                                  <p className="text-xs dark:text-fourth sm:text-sm">
                                                            {Config.tagLine}.
                                                  </p>
                                                  <p className="text-xs dark:text-fourth sm:text-sm">
                                                            {Config.tagLine2}.
                                                  </p>
                                                  <SocialLink className="hidden sm:flex mt-4" />
                                        </div>
                                        <div className="text-xs sm:text-sm -mt-4 sm:mt-0">
                                                  <p className="text-base font-bold tracking-wide mt-3 text-primary">Address</p>
                                                  <p className="capitalize">
                                                            {Config.address.street}, <br /> {Config.address.city}, {Config.address.county}, {Config.address.postcode}
                                                  </p>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                                  <p className="text-base font-bold tracking-wide text-primary">Contact</p>
                                                  <div className="flex text-xs sm:text-sm">
                                                            <p className="mr-1">Phone:</p>
                                                            <a
                                                                      href={`tel:${Config.contact.phone}`}
                                                                      aria-label="Our phone"
                                                                      title="Our phone"
                                                                      className="transition-colors duration-300 hover:text-primary"
                                                            >
                                                                      <span className="hover:underline font-semibold">{Config.contact.phone}</span>
                                                            </a>
                                                  </div>
                                                  <div className="flex text-xs sm:text-sm">
                                                            <p className="mr-1">Email:</p>
                                                            <a
                                                                      href={`mailto:${Config.contact.email}`}
                                                                      aria-label="Our email"
                                                                      title="Our email"
                                                                      className="transition-colors duration-300 hover:text-primary"
                                                            >
                                                                      <span className="hover:underline font-semibold">{Config.contact.email}</span>
                                                            </a>
                                                  </div>
                                                  <div className="text-xs  sm:text-sm">
                                                            <p>Privacy Policy</p>
                                                  </div>
                                        </div>
                                        <div>
                                                  <p className="text-base font-bold tracking-wide text-primary">Opening Hours</p>
                                                  <div className="mt-1 sm:max-w-sm text-xs sm:text-sm">
                                                            <p>Weekdays: {Config.openingHours.weekdays}</p>
                                                            <p>Weekend: {Config.openingHours.weekend}</p>
                                                            <p className="mt-2">Open 7 days (including Bank Holiday)</p>
                                                            <p>Delivery available within 3 miles radius.</p>
                                                  </div>
                                        </div>
                                        <SocialLink className="flex sm:hidden" />
                              </div>
                              <div className="py-8 border-t bg-black dark:bg-background text-primary-foreground px-4 sm:px-0 md:px-4">
                                        <div className="px-4">
                                                  <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-between items-center gap-5">
                                                            <p className="text-xs sm:text-sm text-center sm:text-start">
                                                                      &copy; Copyright {new Date().getFullYear()} | <span className="uppercase font-semibold">{Config.title}</span> All
                                                                      rights reserved.
                                                            </p>
                                                            <a
                                                                      href="https://www.facebook.com/mealdealfinderuk"
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
                                                            >
                                                                      <MDFLogoHelper lightImg={Config.mdfLogoWhite} imgClassName="w-52" />
                                                            </a>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}

function SocialLink({ className }: { className?: string }) {
          return (
                    <div className={cn("items-center space-x-3 text-xs", className)}>
                              <RiFacebookCircleFill className="h-8 w-9 p-1 text-primary-foreground bg-primary rounded-lg cursor-pointer" />
                              <RiYoutubeFill className="h-8 w-9 p-1 text-primary-foreground bg-primary rounded-lg cursor-pointer" />
                              <RiInstagramFill className="h-8 w-9 p-1 text-primary-foreground bg-primary rounded-lg cursor-pointer" />
                    </div>
          )
}