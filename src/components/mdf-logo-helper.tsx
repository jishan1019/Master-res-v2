import { Config } from "@/config"
import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"

type MDFLogoHelperProps = {
          className?: string
          imgClassName?: string
          darkImg?: string | StaticImageData
          lightImg?: string | StaticImageData
}

export default function MDFLogoHelper({ className, imgClassName, darkImg, lightImg }: MDFLogoHelperProps) {
          return (
                    <div className={cn(className)}>
                              <Image
                                        src={lightImg || Config.mdfLogo}
                                        alt={Config.title}
                                        width={842}
                                        height={148}
                                        draggable={false}
                                        className={cn("w-8 select-none block dark:hidden", imgClassName)}
                              />
                              <Image
                                        src={darkImg || Config.mdfLogoWhite}
                                        alt={Config.title}
                                        width={842}
                                        height={148}
                                        draggable={false}
                                        className={cn("w-8 select-none hidden dark:block", imgClassName)}
                              />
                    </div>
          )
}