import { Config } from "@/config"
import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"

type LogoHelperProps = {
          className?: string
          imgClassName?: string
          darkImg?: string | StaticImageData
          lightImg?: string | StaticImageData
}

export default function LogoHelper({ className, imgClassName, darkImg, lightImg }: LogoHelperProps) {
          return (
                    <div className={cn(className)}>
                              <Image
                                        src={lightImg || Config.logo}
                                        alt={Config.title}
                                        width={5334}
                                        height={2521}
                                        draggable={false}
                                        className={cn("w-8 select-none block dark:hidden", imgClassName)}
                              />
                              <Image
                                        src={darkImg || Config.logoWhite}
                                        alt={Config.title}
                                        width={727}
                                        height={343}
                                        draggable={false}
                                        className={cn("w-8 select-none hidden dark:block", imgClassName)}
                              />
                    </div>
          )
}