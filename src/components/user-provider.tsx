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

          const auth = useAppSelector((state) => state.auth);

          const updatedUser = useAppSelector(selectUser)

          const { data } = useGetUserByTokenQuery(null, {
                    skip: !auth.token,
          });

          const user = data?.data;

          useEffect(() => {
                    if (updatedUser?._id !== user?._id && user) {
                              dispatch(setUpdatedUser(user));
                    }
          }, [user, dispatch, auth.token, updatedUser?._id]);

          return (
                    <>
                              {children}
                    </>
          )
}