"use client"

import { z } from 'zod';

export const postCodeCheckSchema = z.object({
          code: z.string().min(1, {
                    message: "Post code is required",
          }),
});