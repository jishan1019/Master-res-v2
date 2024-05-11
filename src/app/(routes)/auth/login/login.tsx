"use client"

import { notifyError, notifySuccess } from "@/components/toast"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaRegEye, FaRegEyeSlash, Hi2Icons } from "@/constant"
import { login } from "@/lib/action"
import { LoginSchema, loginSchema } from "@/lib/schema"
import { useLoginUserMutation } from "@/redux/features/auth/authApi"
import { setToken, setUser } from "@/redux/features/auth/authSlice"
import { useAppDispatch } from "@/redux/hooks"
import { TTokenUser } from "@/types"
import { decodeToken } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm, UseFormReturn } from "react-hook-form"

const allowDirectDashboard = ["admin"];

export default function Login() {
          const [isShow, setIsShow] = useState<boolean>(false);
          const [loginUser, { isLoading }] = useLoginUserMutation();

          const dispatch = useAppDispatch();

          const router = useRouter();

          const form = useForm<LoginSchema>({
                    resolver: zodResolver(loginSchema),
                    defaultValues: {
                              email: "",
                              password: "",
                    },
          }) as UseFormReturn<LoginSchema>;

          const onSubmit = async (values: LoginSchema) => {
                    try {
                              const result = await loginUser(values).unwrap();

                              if (result?.success) {
                                        const token = result?.data?.accesstoken;

                                        const decodedUser = decodeToken(token) as TTokenUser;

                                        const userData = {
                                                  user: {
                                                            id: decodedUser?.id,
                                                            email: decodedUser?.email,
                                                            role: decodedUser?.role,
                                                  },
                                                  token,
                                        }

                                        await login(token);
                                        dispatch(setUser(userData));
                                        dispatch(setToken(token));

                                        notifySuccess("Success", "You have been logged in successfully!", "bottom-left");

                                        if (userData.user.role && allowDirectDashboard.includes(userData.user.role)) {
                                                  router.push("/dashboard");
                                        } else {
                                                  router.push("/");
                                        }

                                        form.reset();
                              }
                    } catch (error: any) {
                              notifyError("Error", "Invalid Credentials. Please check again.", "bottom-left");
                    }
          }

          return (
                    <div className="flex items-center justify-center mt-0 mb-5 sm:my-10">
                              <div className="sm:mx-auto grid w-full max-w-md gap-6 md:bg-secondary sm:rounded-lg sm:border">
                                        <div className="bg-mdf text-primary-foreground py-3 text-center sm:rounded-lg sm:rounded-bl-none sm:rounded-br-none">
                                                  <h1 className="text-lg sm:text-xl font-bold">Sign In</h1>
                                        </div>
                                        <p className="text-center text-sm font-semibold">
                                                  Please Sign In or <Link href="/auth/sign-up" className="underline text-blue-500">Sign Up</Link>
                                        </p>
                                        <Form {...form}>
                                                  <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 px-5 pb-5">
                                                            <FormField
                                                                      control={form.control}
                                                                      name="email"
                                                                      render={({ field }) => (
                                                                                <FormItem>
                                                                                          <div className="flex items-center gap-2">
                                                                                                    <FormLabel htmlFor="email">Email</FormLabel> {form.formState.errors.email ? <><Hi2Icons.HiArrowLongLeft className="text-destructive" /> <FormMessage /></> : <span className="text-destructive">*</span>}
                                                                                          </div>
                                                                                          <FormControl>
                                                                                                    <Input
                                                                                                              id="email"
                                                                                                              type="email"
                                                                                                              placeholder="m@example.com"
                                                                                                              {...field}
                                                                                                    />
                                                                                          </FormControl>
                                                                                </FormItem>
                                                                      )}
                                                            />
                                                            <FormField
                                                                      control={form.control}
                                                                      name="password"
                                                                      render={({ field }) => (
                                                                                <FormItem>
                                                                                          <div className="flex items-center gap-2">
                                                                                                    <FormLabel htmlFor="password">Password</FormLabel> {form.formState.errors.password ? <><Hi2Icons.HiArrowLongLeft className="text-destructive" /> <FormMessage /></> : <span className="text-destructive">*</span>}
                                                                                          </div>
                                                                                          <FormControl>
                                                                                                    <div className="relative">
                                                                                                              <Input
                                                                                                                        id="password"
                                                                                                                        type={isShow ? "text" : "password"}
                                                                                                                        placeholder="********"
                                                                                                                        {...field}
                                                                                                              />
                                                                                                              <div
                                                                                                                        className="z-10 absolute top-1/2 right-3 transform -translate-y-1/2 select-none sm:cursor-pointer"
                                                                                                                        onClick={() => setIsShow((state) => !state)}
                                                                                                              >
                                                                                                                        {isShow ? <FaRegEye size={20} className='text-black dark:text-white' /> : <FaRegEyeSlash size={20} className='text-black dark:text-white' />}
                                                                                                              </div>
                                                                                                    </div>
                                                                                          </FormControl>
                                                                                </FormItem>
                                                                      )}
                                                            />
                                                            <div className="flex justify-between items-center">
                                                                      <div className="flex items-center gap-2">
                                                                                <Checkbox
                                                                                          id="remember-me"
                                                                                          className="data-[state=checked]:bg-black border-black dark:border-primary-foreground"
                                                                                />
                                                                                <Label htmlFor="remember-me">
                                                                                          Remember me
                                                                                </Label>
                                                                      </div>
                                                                      <Link
                                                                                href="/auth/forgot-password"
                                                                                className="text-sm underline text-blue-500"
                                                                      >
                                                                                Forgot your password?
                                                                      </Link>
                                                            </div>
                                                            <div className="flex justify-center pt-5">
                                                                      <Button type="submit" disabled={form.formState.isSubmitting || isLoading} className="bg-mdf rounded-full w-[80%] h-12 font-semibold" size="lg">
                                                                                Log in
                                                                      </Button>
                                                            </div>
                                                  </form>
                                        </Form>
                              </div>
                    </div>
          )
}
