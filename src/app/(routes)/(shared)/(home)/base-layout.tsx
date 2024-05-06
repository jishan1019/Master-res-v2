"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type BaseLayoutProps = {
          children: ReactNode,
          className?: string
}

export default function BaseLayout({ children, className }: BaseLayoutProps) {
          return (
                    <div className={cn("max-w-[1600px] mx-auto", className)}>
                              {children}
                    </div>
          )
}