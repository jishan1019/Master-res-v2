'use client'

import LogoWhite from '@/assets/icon/logo-white.png';
import Logo from '@/assets/icon/logo.png';
import { Config } from '@/config';
import Image from 'next/image';

type ToastProps = {
          title: string,
          message: string,
          type: 'success' | 'error' | 'info' | 'warning'
};

export default function CustomToastMessage({ title, message, type }: ToastProps) {
          return (
                    <div className={`animate-leave rounded-lg shadow-lg 
                    ${type === "success" ? "bg-primary text-primary-foreground" : type === "info" ? "bg-sky-500 text-white" : type === "warning" ? "bg-yellow-500 text-black" : "bg-destructive text-white"} w-full flex`}
                              style={{ padding: '0.75rem 1rem', width: '20rem', borderRadius: '0.5rem' }}
                    >
                              <div className="flex-1 w-0">
                                        <div className="flex items-center justify-center gap-3">
                                                  <div className="flex-shrink-0">
                                                            <Image
                                                                      draggable={false}
                                                                      className="w-10 select-none"
                                                                      src={type === "success" ? Logo : type === "info" ? LogoWhite : type === "warning" ? Logo : LogoWhite}
                                                                      placeholder='blur'
                                                                      alt={`${Config.title} Logo`}
                                                            />
                                                  </div>
                                                  <div className="ml-3 w-0 flex-1">
                                                            <p className="text-sm font-semibold">
                                                                      {title}
                                                            </p>
                                                            <p className="mt-1 text-xs">
                                                                      {message}
                                                            </p>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          )
}
