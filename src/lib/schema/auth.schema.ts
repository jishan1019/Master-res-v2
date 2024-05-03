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

export const forgotPasswordSchema = z.object({
          email: z.string().email({
                    message: "Invalid email address",
          }),
});

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

export const verifyEmailSchema = z.object({
          token: z.string(),
          otp: z.string().min(6, {
                    message: "OTP is required",
          }),
});

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