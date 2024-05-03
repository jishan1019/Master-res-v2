"use client"

import { LoaderCircle } from "lucide-react"

export default function Loading() {
          return (
                    <div className="flex flex-col flex-1 justify-center items-center gap-3">
                              <LoaderCircle size={30} className="animate-spin text-primary" />
                              <p>Loading...</p>
                    </div>
          )
}