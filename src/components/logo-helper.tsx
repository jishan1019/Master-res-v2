import { Config } from "@/config"
import { cn } from "@/lib/utils"
import Image from "next/image"

type LogoHelperProps = {
          className?: string
          imgClassName?: string
}

export default function LogoHelper({ className, imgClassName }: LogoHelperProps) {
          return (
                    <div className={cn(className)}>
                              <Image
                                        src={Config.logo}
                                        alt={Config.title}
                                        width={5334}
                                        height={2521}
                                        draggable={false}
                                        className={cn("w-8 select-none", imgClassName)}
                              />
                    </div>
          )
}