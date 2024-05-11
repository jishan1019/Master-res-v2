"use client"

import { notifyError, notifySuccess } from "@/components/toast"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FaRegEye, FaRegEyeSlash, Hi2Icons } from "@/constant"
import { login } from "@/lib/action"
import { signUpSchema, SignUpSchema } from "@/lib/schema"
import { useRegisterUserMutation } from "@/redux/features/auth/authApi"
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

export default function SignUp() {
          const [isShow, setIsShow] = useState<boolean>(false);
          const [registerUser, { isLoading }] = useRegisterUserMutation();

          const dispatch = useAppDispatch();

          const router = useRouter();

          const form = useForm<SignUpSchema>({
                    resolver: zodResolver(signUpSchema),
                    defaultValues: {
                              name: {
                                        firstName: "",
                                        lastName: "",
                              },
                              phoneNumber: "",
                              address: {
                                        door: "",
                                        road: "",
                                        postCode: "",
                                        city: "",
                              },
                              email: "",
                              password: "",
                    },
          }) as UseFormReturn<SignUpSchema>;

          const onSubmit = async (values: SignUpSchema) => {
                    const { name, phoneNumber, address, email, password } = values;

                    const formData = {
                              name: `${name.firstName} ${name.lastName}`,
                              email,
                              password,
                              phoneNumber,
                              address: {
                                        door: address.door,
                                        road: address.road,
                                        postCode: address.postCode,
                                        city: address.city,
                              },
                    }

                    try {
                              const result = await registerUser(formData).unwrap();

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
                                                  <h1 className="text-lg sm:text-xl font-bold">Sign Up</h1>
                                        </div>
                                        <p className="text-center text-sm font-semibold">
                                                  Please <Link href="/auth/login" className="underline text-blue-500">Sign In</Link> or Sign Up
                                        </p>
                                        <Form {...form}>
                                                  <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 px-5 pb-5">
                                                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                                                      <FormField
                                                                                control={form.control}
                                                                                name="name.firstName"
                                                                                render={({ field }) => (
                                                                                          <FormItem className="w-full">
                                                                                                    <div className="flex items-center gap-2">
                                                                                                              <FormLabel htmlFor="firstName">First Name</FormLabel> {form.formState.errors.name?.firstName ? <><Hi2Icons.HiArrowLongLeft className="text-destructive" /> <FormMessage /></> : <span className="text-destructive">*</span>}
                                                                                                    </div>
                                                                                                    <FormControl>
                                                                                                              <Input
                                                                                                                        id="firstName"
                                                                                                                        type="text"
                                                                                                                        placeholder="John"
                                                                                                                        {...field}
                                                                                                              />
                                                                                                    </FormControl>
                                                                                          </FormItem>
                                                                                )}
                                                                      />
                                                                      <FormField
                                                                                control={form.control}
                                                                                name="name.lastName"
                                                                                render={({ field }) => (
                                                                                          <FormItem className="w-full">
                                                                                                    <div className="flex items-center gap-2">
                                                                                                              <FormLabel htmlFor="lastName">Last Name</FormLabel> {form.formState.errors.name?.lastName ? <><Hi2Icons.HiArrowLongLeft className="text-destructive" /> <FormMessage /></> : <span className="text-destructive">*</span>}
                                                                                                    </div>
                                                                                                    <FormControl>
                                                                                                              <Input
                                                                                                                        id="lastName"
                                                                                                                        type="text"
                                                                                                                        placeholder="Doe"
                                                                                                                        {...field}
                                                                                                              />
                                                                                                    </FormControl>
                                                                                          </FormItem>
                                                                                )}
                                                                      />
                                                            </div>
                                                            <FormField
                                                                      control={form.control}
                                                                      name="phoneNumber"
                                                                      render={({ field }) => (
                                                                                <FormItem>
                                                                                          <div className="flex items-center gap-2">
                                                                                                    <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel> {form.formState.errors.phoneNumber ? <><Hi2Icons.HiArrowLongLeft className="text-destructive" /> <FormMessage /></> : <span className="text-destructive">*</span>}
                                                                                          </div>
                                                                                          <FormControl>
                                                                                                    <Input
                                                                                                              id="phoneNumber"
                                                                                                              type="number"
                                                                                                              placeholder="08012345678"
                                                                                                              {...field}
                                                                                                    />
                                                                                          </FormControl>
                                                                                </FormItem>
                                                                      )}
                                                            />
                                                            <Separator />
                                                            <h2 className="font-semibold text-center underline">Address</h2>
                                                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                                                      <FormField
                                                                                control={form.control}
                                                                                name="address.door"
                                                                                render={({ field }) => (
                                                                                          <FormItem className="w-full">
                                                                                                    <div className="flex items-center gap-2">
                                                                                                              <FormLabel htmlFor="door">Door</FormLabel> {form.formState.errors.address?.door ? <><Hi2Icons.HiArrowLongLeft className="text-destructive" /> <FormMessage /></> : <span className="text-destructive">*</span>}
                                                                                                    </div>
                                                                                                    <FormControl>
                                                                                                              <Input
                                                                                                                        id="door"
                                                                                                                        type="text"
                                                                                                                        placeholder="12A"
                                                                                                                        {...field}
                                                                                                              />
                                                                                                    </FormControl>
                                                                                          </FormItem>
                                                                                )}
                                                                      />
                                                                      <FormField
                                                                                control={form.control}
                                                                                name="address.road"
                                                                                render={({ field }) => (
                                                                                          <FormItem className="w-full">
                                                                                                    <div className="flex items-center gap-2">
                                                                                                              <FormLabel htmlFor="road">Road</FormLabel> {form.formState.errors.address?.road ? <><Hi2Icons.HiArrowLongLeft className="text-destructive" /> <FormMessage /></> : <span className="text-destructive">*</span>}
                                                                                                    </div>
                                                                                                    <FormControl>
                                                                                                              <Input
                                                                                                                        id="road"
                                                                                                                        type="text"
                                                                                                                        placeholder="1st Street"
                                                                                                                        {...field}
                                                                                                              />
                                                                                                    </FormControl>
                                                                                          </FormItem>
                                                                                )}
                                                                      />
                                                            </div>
                                                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                                                      <FormField
                                                                                control={form.control}
                                                                                name="address.postCode"
                                                                                render={({ field }) => (
                                                                                          <FormItem className="w-full">
                                                                                                    <div className="flex items-center gap-2">
                                                                                                              <FormLabel htmlFor="postCode">Post Code</FormLabel> {form.formState.errors.address?.postCode ? <><Hi2Icons.HiArrowLongLeft className="text-destructive" /> <FormMessage /></> : <span className="text-destructive">*</span>}
                                                                                                    </div>
                                                                                                    <FormControl>
                                                                                                              <Input
                                                                                                                        id="postCode"
                                                                                                                        type="text"
                                                                                                                        placeholder="123456"
                                                                                                                        {...field}
                                                                                                              />
                                                                                                    </FormControl>
                                                                                          </FormItem>
                                                                                )}
                                                                      />
                                                                      <FormField
                                                                                control={form.control}
                                                                                name="address.city"
                                                                                render={({ field }) => (
                                                                                          <FormItem className="w-full">
                                                                                                    <div className="flex items-center gap-2">
                                                                                                              <FormLabel htmlFor="city">City</FormLabel> {form.formState.errors.address?.city ? <><Hi2Icons.HiArrowLongLeft className="text-destructive" /> <FormMessage /></> : <span className="text-destructive">*</span>}
                                                                                                    </div>
                                                                                                    <FormControl>
                                                                                                              <Input
                                                                                                                        id="city"
                                                                                                                        type="text"
                                                                                                                        placeholder="Oxted"
                                                                                                                        {...field}
                                                                                                              />
                                                                                                    </FormControl>
                                                                                          </FormItem>
                                                                                )}
                                                                      />
                                                            </div>
                                                            <Separator />
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
                                                            <div className="flex justify-center pt-5">
                                                                      <Button type="submit" disabled={form.formState.isSubmitting || isLoading} className="bg-mdf rounded-full w-[80%] h-12 font-semibold" size="lg">
                                                                                Create Account
                                                                      </Button>
                                                            </div>
                                                  </form>
                                        </Form>
                              </div>
                    </div>
          )
}
