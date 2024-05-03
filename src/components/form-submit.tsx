"use client"

import { Loader } from "lucide-react"
import { ReactNode } from "react"

type FormSubmitProps = {
          icon: ReactNode,
          loading: boolean,
          message: string,
          iconPosition: "left" | "right"
}

export default function FormSubmit({ loading, icon, message, iconPosition }: FormSubmitProps) {
          return (
                    <>
                              {
                                        iconPosition === "left" && (
                                                  loading ? <Loader size={14} className="animate-spin" /> : icon
                                        )
                              }
                              <span className={iconPosition === "left" ? "ml-2" : "mr-2"}>{message}</span>
                              {
                                        iconPosition === "right" && (
                                                  loading ? <Loader size={14} className="animate-spin" /> : icon
                                        )
                              }
                    </>
          )
}