'use client'

import Logo from '@/assets/icon/logo-default.png';
import Image from 'next/image';

type ToastProps = {
          title: string,
          message: string
};

export default function CustomToastMessage({ title, message }: ToastProps) {
          return (
                    <div className={`animate-leave rounded-lg shadow-lg bg-background dark:bg-primary text-primary dark:text-primary-foreground w-full flex`}
                              style={{ padding: '0.75rem 1rem', width: '20rem', borderRadius: '0.5rem' }}
                    >
                              <div className="flex-1 w-0">
                                        <div className="flex items-center justify-center gap-3">
                                                  <div className="flex-shrink-0">
                                                            <Image
                                                                      draggable={false}
                                                                      className="w-10 select-none"
                                                                      src={Logo}
                                                                      placeholder='blur'
                                                                      alt="FashionFlair Logo"
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
