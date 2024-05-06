"use client";

import { useGetUserByTokenQuery } from "@/redux/features/auth/authApi";
import { selectUser, setUpdatedUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

type UserProviderProps = {
          children: React.ReactNode;
};

export default function UserProvider({ children }: UserProviderProps) {
          const dispatch = useAppDispatch();

          const token = useAppSelector((state) => state.auth.token);

          const updatedUser = useAppSelector(selectUser)

          const { data } = useGetUserByTokenQuery(null, {
                    skip: !token,
          });

          const user = data?.data;

          useEffect(() => {
                    if (user && updatedUser?._id !== user?._id) {
                              dispatch(setUpdatedUser(user));
                    }
          }, [user, dispatch, token, updatedUser?._id]);

          return (
                    <>
                              {children}
                    </>
          )
}