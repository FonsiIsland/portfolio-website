"use client";

import React, { useState } from "react";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
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
import { useTranslations } from "next-intl";
import GlowCard from "../skills-page/glow-card";
import cardVariants from "@/lib/constants";

const ContactForm = () => {
  const t = useTranslations("pages.contactPage");
  const tButton = useTranslations("labels.button");
  const tField = useTranslations("labels.field");
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const response = await send(data);

      if (response.success) toast.success(t("toast.success"));
      else toast.error(t("toast.error"));

      form.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlowCard variants={cardVariants} className="w-full" rounded="rounded-4xl">
      <CardHeader>
        <CardTitle className="text-2xl">{t("form.title")}</CardTitle>
        <CardDescription>{t("form.description")}</CardDescription>
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
                      {tField("name.label")}
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-contact-fullName"
                      aria-invalid={fieldState.invalid}
                      placeholder={tField("name.inner")}
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
                      {tField("email.label")}
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-contact-email"
                      aria-invalid={fieldState.invalid}
                      placeholder={tField("email.inner")}
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
                    {tField("message.label")}
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="form-contact-message"
                    aria-invalid={fieldState.invalid}
                    maxLength={700}
                    placeholder={tField("message.inner")}
                    rows={4}
                    className="resize-none"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
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
            disabled={loading}
          >
            {tButton("reset")}
          </Button>
          <Button
            className="flex-1"
            type="submit"
            form="form-contact"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <Spinner />
                {tButton("loading")}
              </div>
            ) : (
              tButton("submit")
            )}
          </Button>
        </Field>
      </CardFooter>
    </GlowCard>
  );
};

export default ContactForm;
