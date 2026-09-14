"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { whatsappUrl } from "@/config/site";

const schema = z.object({
  name: z.string().trim().min(2, "Tell us your name."),
  phone: z.string().trim().min(8, "Add a phone number we can reach."),
  email: z.union([z.literal(""), z.string().trim().email("Use a valid email address.")]),
  petName: z.string().trim().min(1, "What should we call your pet?"),
  petType: z.enum(["Dog", "Cat", "Other"], { message: "Choose a pet type." }),
  service: z.string().min(1, "Choose an area."),
  message: z.string().trim().min(10, "A little more detail will help us respond well."),
});

type Values = z.infer<typeof schema>;

export function EnquiryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { petType: "Dog", service: "", email: "" },
  });

  const onSubmit = (values: Values) => {
    const message = [
      "Hi Paw District, I'd like to make an enquiry.",
      "",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : null,
      `Pet: ${values.petName} (${values.petType})`,
      `Interested in: ${values.service}`,
      `Details: ${values.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.assign(whatsappUrl(message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card p-6 md:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name" error={errors.name?.message}>
          <input
            id="name"
            className="field"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone?.message}>
          <input
            id="phone"
            className="field"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
        </Field>
        <Field id="email" label="Email (optional)" error={errors.email?.message}>
          <input
            id="email"
            className="field"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
        </Field>
        <Field id="petName" label="Pet name" error={errors.petName?.message}>
          <input
            id="petName"
            className="field"
            aria-invalid={Boolean(errors.petName)}
            aria-describedby={errors.petName ? "petName-error" : undefined}
            {...register("petName")}
          />
        </Field>
        <Field id="petType" label="Pet type" error={errors.petType?.message}>
          <select
            id="petType"
            className="field"
            aria-invalid={Boolean(errors.petType)}
            aria-describedby={errors.petType ? "petType-error" : undefined}
            {...register("petType")}
          >
            <option>Dog</option>
            <option>Cat</option>
            <option>Other</option>
          </select>
        </Field>
        <Field id="service" label="Interested in" error={errors.service?.message}>
          <select
            id="service"
            className="field"
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            {...register("service")}
          >
            <option value="">Choose an area</option>
            <option>Boarding</option>
            <option>Grooming</option>
            <option>Training</option>
            <option>Regular care</option>
            <option>Something else</option>
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field id="message" label="How can we help?" error={errors.message?.message}>
          <textarea
            id="message"
            className="field min-h-36 resize-y"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
        </Field>
      </div>

      <button className="btn-primary mt-6" type="submit">
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Continue on WhatsApp
      </button>
      <p className="mt-4 text-xs leading-5 text-muted">
        This opens WhatsApp with your enquiry pre-filled. Review the message there
        before sending it to Paw District.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="label" htmlFor={id}>{label}</label>
      {children}
      {error && (
        <p id={`${id}-error`} className="error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
