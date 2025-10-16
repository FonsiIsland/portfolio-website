"use server";

import { formSchema } from "@/schemas/schemas";
import * as z from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/utils/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (rawData: z.infer<typeof formSchema>) => {
  console.log("got on server", rawData);

  const parsed = formSchema.safeParse(rawData);

  if (!parsed.success) {
    console.error("Validation failed:", parsed.error.format());
    return { success: false, error: "Invalid form data" };
  }

  const emailFromData = parsed.data;
  console.log("validated server data", emailFromData);

  try {
    const { data, error } = await resend.emails.send({
      from: "Stefans Portfolio <onboarding@resend.dev>",
      to: ["stefanb05.portfolio@gmail.com"],
      subject: "Neue Nachricht von: " + emailFromData.fullName,
      react: EmailTemplate({
        fullName: emailFromData.fullName,
        email: emailFromData.email,
        message: emailFromData.message,
      }),
    });

    if (data && !error) return { success: true };
    else
      return {
        success: false,
        error: "An error occured during sending that message",
      };
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return {
      success: false,
      error: "An error occured during sending that message",
    };
  }
};
