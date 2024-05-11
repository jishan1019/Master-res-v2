"use client"

import { z } from 'zod';

export const loginSchema = z.object({
          email: z.string().email({
                    message: "Invalid email address",
          }),
          password: z.string().min(1, {
                    message: "Password is required",
          }),
});
export type LoginSchema = z.infer<typeof loginSchema>;

export const forgotPasswordSchema = z.object({
          email: z.string().email({
                    message: "Invalid email address",
          }),
});
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export const changePasswordFormSchema = z.object({
          oldPassword: z.string().min(1, {
                    message: 'Old password is required'
          }),
          newPassword: z.string().min(1, {
                    message: 'New password is required'
          }),
          confirmNewPassword: z.string().min(1, {
                    message: 'Confirm new password is required'
          }),
});
export type ChangePasswordFormSchema = z.infer<typeof changePasswordFormSchema>;

export const verifyEmailSchema = z.object({
          token: z.string(),
          otp: z.string().min(6, {
                    message: "OTP is required",
          }),
});
export type VerifyEmailSchema = z.infer<typeof verifyEmailSchema>;

export const resetPasswordSchema = z.object({
          token: z.string(),
          otp: z.string().min(6, {
                    message: "OTP is required",
          }).max(6, {
                    message: "OTP must be 6 characters",
          }),
          password: z.string().min(1, {
                    message: "Password is required",
          }),
          confirmPassword: z.string().min(1, {
                    message: "Password is required",
          }),
});
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

export const signUpSchema = z.object({
          name: z.object({
                    firstName: z.string().min(1, {
                              message: "First name is required",
                    }),
                    lastName: z.string().min(1, {
                              message: "Last name is required",
                    }),
          }),
          email: z.string().email({
                    message: "Invalid email address",
          }),
          password: z.string().min(1, {
                    message: "Password is required",
          }),
          confirmPassword: z.string().min(1, {
                    message: "Confirm password is required",
          }),
          phoneNumber: z.string().min(1, {
                    message: "Mobile number is required",
          }),
          address: z.object({
                    door: z.string().min(1, {
                              message: "Door number is required",
                    }),
                    road: z.string().min(1, {
                              message: "Road name is required",
                    }),
                    postCode: z.string().min(1, {
                              message: "Post code is required",
                    }),
                    city: z.string().min(1, {
                              message: "City is required",
                    }),
          }),
});
export type SignUpSchema = z.infer<typeof signUpSchema>;