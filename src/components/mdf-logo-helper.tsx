import { Config } from "@/config"
import { cn } from "@/lib/utils"
import Image from "next/image"

type MDFLogoHelperProps = {
          className?: string
          imgClassName?: string
}

export default function MDFLogoHelper({ className, imgClassName }: MDFLogoHelperProps) {
          return (
                    <div className={cn(className)}>
                              <Image
                                        src={Config.mdfLogoWhite}
                                        alt={Config.title}
                                        width={842}
                                        height={148}
                                        draggable={false}
                                        className={cn("w-8 select-none", imgClassName)}
                              />
                    </div>
          )
}