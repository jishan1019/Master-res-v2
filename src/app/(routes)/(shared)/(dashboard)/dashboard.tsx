"use client"

import { selectUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import AdminDashboard from "./admin-dashboard";
import UserDashboard from "./user-dashboard";

export default function Dashboard() {
          const user = useAppSelector(selectUser);

          return (
                    <>
                              {
                                        user?.role === 'admin' ? (
                                                  <AdminDashboard user={user} />
                                        ) : user?.role === 'user' ? (
                                                  <UserDashboard user={user} />
                                        ) : null
                              }
                    </>
          )
}