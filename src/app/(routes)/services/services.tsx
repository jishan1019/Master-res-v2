"use client"

import Footer from "../(shared)/(home)/footer"

export default function Services() {
          return (
                    <>
                              <div className="flex flex-col w-[90%] md:w-2/3 mx-auto rounded-lg my-5 sm:my-10 py-5 md:py-10 space-y-3 border bg-secondary">
                                        <h1 className="text-xl sm:text-2xl font-bold text-center">Services we can provide</h1>
                                        <ul className="pl-10 sm:pl-20 pt-2 sm:pt-4 text-sm sm:text-base">
                                                  <li>- Outside Catering</li>
                                                  <li>- Wedding</li>
                                                  <li>- Birthdays</li>
                                        </ul>
                              </div>
                              <Footer className="mt-10 sm:mt-20" />
                    </>
          )
}