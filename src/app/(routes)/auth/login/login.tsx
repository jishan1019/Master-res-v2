"use client"

import FormSubmit from "@/components/form-submit"
import { notifyError, notifySuccess } from "@/components/toast"
import { Button, buttonVariants } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Images } from "@/constant"
import { AiOutlineLogin, FaRegEye, FaRegEyeSlash, Hi2Icons } from "@/constant/icons"
import { login } from "@/lib/action"
import { loginSchema } from "@/lib/schema"
import { useLoginUserMutation } from "@/redux/features/auth/authApi"
import { setToken, setUser } from "@/redux/features/auth/authSlice"
import { useAppDispatch } from "@/redux/hooks"
import { TTokenUser } from "@/types"
import { decodeToken } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm, UseFormReturn } from "react-hook-form"
import { z } from "zod"

const allowDirectDashboard = ["admin"];

export default function Login() {
          const [isShow, setIsShow] = useState<boolean>(false);
          const [loginUser, { isLoading }] = useLoginUserMutation();

          const dispatch = useAppDispatch();

          const router = useRouter();

          const form = useForm<z.infer<typeof loginSchema>>({
                    resolver: zodResolver(loginSchema),
                    defaultValues: {
                              email: "",
                              password: "",
                    },
          }) as UseFormReturn<z.infer<typeof loginSchema>>;

          const onSubmit = async (values: z.infer<typeof loginSchema>) => {
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
                    <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
                              <div className="flex items-center justify-center min-h-screen">
                                        <div className="sm:mx-auto grid w-full max-w-md gap-6 mx-4">
                                                  <div className="grid gap-2 text-center">
                                                            <h1 className="text-2xl sm:text-3xl font-bold uppercase">Login</h1>
                                                            <p className="text-balance text-muted-foreground">
                                                                      Enter your email below to login to your account
                                                            </p>
                                                  </div>
                                                  <Form {...form}>
                                                            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                                                                      <FormField
                                                                                control={form.control}
                                                                                name="email"
                                                                                render={({ field }) => (
                                                                                          <FormItem>
                                                                                                    <div className="flex items-center gap-2">
                                                                                                              <FormLabel>Email</FormLabel> {form.formState.errors.email ? <><Hi2Icons.HiArrowLongLeft className="text-destructive" /> <FormMessage /></> : <span className="text-destructive">*</span>}
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
                                                                                                    <div className="flex justify-between items-center">
                                                                                                              <div className="flex items-center gap-2">
                                                                                                                        <FormLabel>Password</FormLabel> {form.formState.errors.password ? <><Hi2Icons.HiArrowLongLeft className="text-destructive" /> <FormMessage /></> : <span className="text-destructive">*</span>}
                                                                                                              </div>
                                                                                                              <Link
                                                                                                                        href="/auth/forgot-password"
                                                                                                                        className="text-sm underline"
                                                                                                              >
                                                                                                                        Forgot your password?
                                                                                                              </Link>
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
                                                                                                                                  className="eye absolute right-3 top-2.5 sm:cursor-pointer z-10 select-none"
                                                                                                                                  onClick={() => setIsShow((state) => !state)}
                                                                                                                        >
                                                                                                                                  {isShow ? <FaRegEye size={20} className='text-black dark:text-white' /> : <FaRegEyeSlash size={20} className='text-black dark:text-white' />}
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    </FormControl>
                                                                                          </FormItem>
                                                                                )}
                                                                      />
                                                                      <div className="flex justify-end items-center gap-3">
                                                                                <Link href="/" className={buttonVariants({ className: "flex items-center gap-2", variant: "outline" })}>
                                                                                          <Hi2Icons.HiArrowLongLeft />
                                                                                          Go back
                                                                                </Link>
                                                                                <Button type="submit" disabled={form.formState.isSubmitting || isLoading}>
                                                                                          <FormSubmit loading={form.formState.isSubmitting || isLoading} message="Login" icon={<AiOutlineLogin />} iconPosition="left" />
                                                                                </Button>
                                                                      </div>
                                                            </form>
                                                  </Form>
                                                  <div className="mt-4 text-center text-sm">
                                                            Don&apos;t have an account?{" "}
                                                            <Link href="/auth/sign-up" className="underline">
                                                                      Sign up
                                                            </Link>
                                                  </div>
                                        </div>
                              </div>
                              <div className="hidden bg-muted lg:block">
                                        <Image
                                                  src={Images.Login}
                                                  alt="Image"
                                                  width="1920"
                                                  height="1080"
                                                  className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                                        />
                              </div>
                    </div>
          )
}
