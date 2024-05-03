"use client"

import { TUser } from "@/types"

export default function AdminDashboard({ user }: { user: TUser }) {
          return (
                    <>
                              <h1 className="text-xl sm:text-2xl font-medium">
                                        Welcome, <span className="text-primary">{user?.name?.split(" ")[0]}</span>! How are you today?
                              </h1>
                              <div className="flex flex-col flex-1 items-center justify-center gap-2">
                                        <h1 className="text-4xl tracking-tight">Admin Dashboard</h1>
                              </div>
                    </>
          )
}