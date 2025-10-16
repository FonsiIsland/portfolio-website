import * as z from "zod";

export const formSchema = z.object({
  fullName: z.string().min(5, "fullName.min").max(32, "fullName.max"),
  email: z.email("email.invalid"),
  message: z.string().min(10, "message.min").max(600, "message.max"),
});
