"use client"

import { TTokenUser } from "@/types"
import AdminDashboard from "./admin-dashboard"
import UserDashboard from "./user-dashboard"

export default function Dashboard({ user }: { user: TTokenUser }) {
          return (
                    <>
                              {
                                        user?.role === 'admin' ? (
                                                  <AdminDashboard />
                                        ) : user?.role === 'user' ? (
                                                  <UserDashboard />
                                        ) : null
                              }
                    </>
          )
}