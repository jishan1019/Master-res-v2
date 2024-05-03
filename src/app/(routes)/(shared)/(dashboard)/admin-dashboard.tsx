"use client"

import BreadCrumb from "@/components/breadcrumb"

export default function AdminDashboard() {
          return (
                    <>
                              <BreadCrumb />
                              <div className="flex flex-col flex-1 items-center justify-center gap-2">
                                        <h1 className="text-4xl font-bold tracking-tight">Admin Dashboard</h1>
                              </div>
                    </>
          )
}