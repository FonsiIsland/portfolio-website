import * as z from "zod";

export const formSchema = z.object({
  fullName: z
    .string()
    .min(5, "Full name must be at least 5 characters long.")
    .max(32, "Full name must be at most 32 characters long."),
  email: z.string().email("Please enter a valid email address."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long.")
    .max(500, "Message must be at most 600 characters long."),
});
