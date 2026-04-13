"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .regex(/^\+[1-9]\d{1,14}$/, "Phone number must use E.164 format"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputClasses =
  "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    reset();
    setIsSubmitted(true);
  };

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-950/20 backdrop-blur-md sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Contact Form
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-white">
          Let&apos;s start your next chapter
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">
          This form is wired for validation now and can be connected to the
          backend once your endpoint is ready.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-200"
          >
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Wanjiku"
            className={`${inputClasses} ${
              errors.name ? "border-red-400 focus:border-red-400" : ""
            }`}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-2 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-200"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            className={`${inputClasses} ${
              errors.email ? "border-red-400 focus:border-red-400" : ""
            }`}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-2 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-gray-200"
          >
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+254712345678"
            className={`${inputClasses} ${
              errors.phone ? "border-red-400 focus:border-red-400" : ""
            }`}
            {...register("phone")}
          />
          <p className="mt-2 text-xs text-gray-500">
            Use international format, for example `+254712345678`.
          </p>
          {errors.phone && (
            <p className="mt-2 text-xs text-red-400">{errors.phone.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send inquiry"}
        </button>
      </form>

      {isSubmitted && (
        <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
          Your details have been captured locally for now. We can connect this
          form to the backend once that endpoint is available.
        </div>
      )}
    </div>
  );
}
