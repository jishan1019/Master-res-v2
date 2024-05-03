"use client"

import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"

type BreadCrumbProps = {
          title?: string
          description?: string
}

export default function BreadCrumb({ title, description }: BreadCrumbProps) {
          const pathname = usePathname();
          const paths = pathname.split("/").filter(Boolean);
          const filteredPaths = paths.slice(1, paths.length - 1);

          const firstPath = paths[0];
          const lastPath = paths[paths.length - 1].split("-").join(" ");

          return (
                    <div className="space-y-5">
                              <Breadcrumb>
                                        <BreadcrumbList>
                                                  <BreadcrumbItem>
                                                            {
                                                                      paths.length > 1 ? (
                                                                                <Link href={`/${firstPath}`} className="capitalize">{firstPath}</Link>
                                                                      ) : (
                                                                                <BreadcrumbPage className="capitalize">{firstPath}</BreadcrumbPage>
                                                                      )
                                                            }
                                                  </BreadcrumbItem>
                                                  {filteredPaths.length > 0 && (
                                                            <>
                                                                      <BreadcrumbSeparator />
                                                                      <BreadcrumbItem>
                                                                                <DropdownMenu>
                                                                                          <DropdownMenuTrigger className="flex items-center gap-1">
                                                                                                    <BreadcrumbEllipsis className="h-4 w-4" />
                                                                                                    <span className="sr-only">Toggle menu</span>
                                                                                          </DropdownMenuTrigger>
                                                                                          <DropdownMenuContent align="start" className="capitalize">
                                                                                                    {filteredPaths.map((path, index) => {
                                                                                                              const isLast = index === paths.length - 1;
                                                                                                              return (
                                                                                                                        <DropdownMenuItem key={path}>
                                                                                                                                  {isLast ? (
                                                                                                                                            <strong>{path}</strong>
                                                                                                                                  ) : (
                                                                                                                                            path
                                                                                                                                  )}
                                                                                                                        </DropdownMenuItem>
                                                                                                              )
                                                                                                    })}
                                                                                          </DropdownMenuContent>
                                                                                </DropdownMenu>
                                                                      </BreadcrumbItem>
                                                            </>
                                                  )}
                                                  {
                                                            paths.length > 1 && (
                                                                      <>
                                                                                <BreadcrumbSeparator />
                                                                                <BreadcrumbItem>
                                                                                          <BreadcrumbPage className="capitalize">
                                                                                                    {lastPath}
                                                                                          </BreadcrumbPage>
                                                                                </BreadcrumbItem>
                                                                      </>
                                                            )
                                                  }
                                        </BreadcrumbList>
                              </Breadcrumb>
                              {
                                        title || description ? (
                                                  <div>
                                                            {title && <h1 className="text-lg font-semibold">{title}</h1>}
                                                            {description && <p className="text-sm text-muted-foreground">{description}</p>}
                                                  </div>
                                        ) : null
                              }
                    </div>
          )
}