"use client"

import { usePathname } from "next/navigation";

export default function ComingSoon() {
          const pathname = usePathname();
          const paths = pathname.split("/").filter(Boolean);

          const lastPath = paths[paths.length - 1].split("-").join(" ");

          return (
                    <div className="flex flex-col flex-1 items-center justify-center gap-2">
                              <h1 className="text-4xl font-bold tracking-tight">Coming Soon</h1>
                              <p className="text-sm text-muted-foreground text-center"><span className="capitalize">{lastPath}</span> page is under construction. Check back soon!</p>
                    </div>
          )
}