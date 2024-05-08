"use client"

import { cn } from "@/lib/utils"
import { LoaderCircle } from "lucide-react"

type LoadingProps = {
          className?: string
}

export default function Loading({ className }: LoadingProps) {
          return (
                    <div className={cn("flex flex-col flex-1 justify-center items-center gap-3", className)}>
                              <LoaderCircle size={30} className="animate-spin text-primary" />
                              <p>Loading...</p>
                    </div>
          )
}