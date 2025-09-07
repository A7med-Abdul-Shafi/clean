"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { submitFormValues } from "./utiles";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { formTranslations } from "./utiles";

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = formTranslations[language];

  const [loading, setLoading] = React.useState(false);

  const formSchema = z.object({
    firstName: z.string().min(2, { message: t.validation.name }),
    email: z.string().email({ message: t.validation.email }),
    content: z.string().min(10, { message: t.validation.message }),
    photoUrl: z
      .string()
      .optional()
      .refine((value) => {
        if (!value) return true;
        const allowedExtensions = /\.(jpg|jpeg|png|pdf)$/i;
        if (!allowedExtensions.test(value)) {
          throw new Error(t.validation.file);
        }
        return true;
      }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
      content: "",
      photoUrl: "",
    },
  });

  const handleSubmitMessage = async () => {
    await submitFormValues(
      form,
      "messages/emarates",
      setLoading,
      t.successMessage
    );
    form.reset();
  };

  const parentDir = language === "ar" ? "rtl" : "ltr";
  return (
    <div className="bg-[#000814] font-semibold" dir={parentDir}>
      <div className="flex flex-col md:flex-row h-full items-center justify-around container mx-auto p-6 w-full gap-3 py-32">
        <div className="flex flex-col items-center justify-center mb-32 gap-6">
          <h1 className="text-4xl  text-white">{t.title}</h1>
          <p className="text-center text-white mt-2">{t.description}</p>
        </div>
        <Form {...form}>
          <form
            className="w-full max-w-2xl bg-cyan-800 shadow-md rounded-lg p-6"
            onSubmit={form.handleSubmit(handleSubmitMessage)}
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">{t.nameLabel}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t.namePlaceholder}
                      className="mb-5 bg-white placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">{t.emailLabel}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t.emailPlaceholder}
                      className="mb-5 bg-white placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">{t.messageLabel}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t.messagePlaceholder}
                      rows={6}
                      className="mb-5 bg-white min-h-[150px] placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />
            <Button
              disabled={loading}
              type="submit"
              className={`w-full cursor-pointer ${loading ? "opacity-50" : ""}`}
            >
              {loading ? t.sending : t.sendButton}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
