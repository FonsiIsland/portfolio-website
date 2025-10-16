"use client";

import React, { useState } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { formSchema } from "@/schemas/schemas";
import { send } from "@/actions/email";
import { toast } from "sonner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  console.log("ADD VERCEL FIREWAALL FOR RATE LIMITTING CONTACT APGE");
  console.log("ADD VERCEL FIREWAALL FOR RATE LIMITTING CONTACT APGE");

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      console.log("Client send to server", data);
      const response = await send(data);

      //   const response = { success: true, error: null };

      if (response.success) toast.success("Message sent!");
      else toast.error("An error occured during sending that message!");

      form.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full rounded-4xl">
      <CardHeader>
        <CardTitle className="text-2xl">Contact Me</CardTitle>
        <CardDescription>Just enter your data and a message :)</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-contact" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="fullName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-contact-fullName">
                      Name
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-contact-fullName"
                      aria-invalid={fieldState.invalid}
                      placeholder="Name"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-contact-email">
                      Email Adress
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-contact-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Yout email"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-contact-message">
                    Message
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="form-contact-message"
                    aria-invalid={fieldState.invalid}
                    maxLength={600}
                    placeholder="Type a message..."
                    rows={4}
                    className="resize-none"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* <Field>
              <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
              <Textarea
                maxLength={600}
                id="feedback"
                placeholder="Your feedback helps us improve..."
                rows={4}
              />
              <FieldDescription>
                Share your thoughts about our service.
              </FieldDescription>
            </Field> */}
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal" className="gap-4">
          <Button
            className="flex-1"
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            disabled={loading} // disable reset while loading optional
          >
            Reset
          </Button>
          <Button
            className="flex-1"
            type="submit"
            form="form-contact"
            disabled={loading} // Button deaktivieren während Loading
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <Spinner />
                Loading...
              </div>
            ) : (
              "Submit"
            )}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
