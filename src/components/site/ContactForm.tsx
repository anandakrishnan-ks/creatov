import { useId, useState, type FormEvent, type ReactNode } from "react";
import * as z from "zod";
import { ArrowUpRight, Check } from "lucide-react";
import { contact } from "@/lib/site";
import { TransitionLink } from "@/components/site/TransitionLink";

const types = ["Residential", "Commercial", "Renovation", "Development", "Industrial", "Other"];
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[+0-9\s-]{7,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  type: z.string().min(1, "Choose a project type"),
  location: z.string().trim().max(120).optional(),
  budget: z.string().trim().max(60).optional(),
  message: z.string().trim().max(1500).optional(),
});

const field =
  "block w-full min-w-0 border-0 border-b border-input bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="label-mono block text-muted-foreground">
        {label}
      </label>
      {children}
      {error && (
        <span id={`${id}-error`} className="mt-1 block text-sm text-destructive">
          {error}
        </span>
      )}
    </div>
  );
}

export function ContactForm() {
  const formId = useId();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const inputProps = (name: string) => ({
    id: `${formId}-${name}`,
    name,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${formId}-${name}-error` : undefined,
    className: field,
  });

  const labelProps = (name: string, label: string) => ({
    id: `${formId}-${name}`,
    label,
    error: errors[name],
  });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      const firstInvalidName = Object.keys(errs)[0];
      const firstInvalid = firstInvalidName
        ? e.currentTarget.elements.namedItem(firstInvalidName)
        : null;
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus();
      return;
    }
    setErrors({});
    const v = r.data;
    const body = `Name: ${v.name}\nPhone: ${v.phone}\nEmail: ${v.email}\nProject type: ${v.type}\nLocation: ${v.location ?? ""}\nApprox. budget: ${v.budget ?? ""}\n\n${v.message ?? ""}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Project enquiry — ${v.type}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent)
    return (
      <div role="status" className="border border-border bg-card p-6 sm:p-10">
        <Check className="h-8 w-8 text-signal" aria-hidden="true" />
        <h2 className="mt-6 text-3xl font-extrabold">Your enquiry is ready.</h2>
        <p className="mt-3 text-muted-foreground">
          Your email app should now open with your enquiry. You can also call us on{" "}
          {contact.phones[0]}.
        </p>
        <button
          onClick={() => setSent(false)}
          className="label-mono mt-8 underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label="Project enquiry"
      aria-describedby={`${formId}-note`}
      className="grid min-w-0 gap-6 border border-border bg-card p-5 sm:p-6 md:grid-cols-2 md:gap-8 md:p-10"
    >
      <div className="md:col-span-2">
        <h2 className="text-2xl font-extrabold">Tell us about your project.</h2>
        <p id={`${formId}-note`} className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Complete the details below to prepare your enquiry in your email app. Fields marked * are
          required.{" "}
          <TransitionLink
            to="/privacy-policy"
            className="font-semibold text-primary underline underline-offset-4"
          >
            Read our Privacy Policy
          </TransitionLink>
          .
        </p>
        {Object.keys(errors).length > 0 && (
          <p role="alert" className="mt-3 text-sm text-destructive">
            Please check the highlighted fields.
          </p>
        )}
      </div>
      <FormField {...labelProps("name", "Name *")}>
        <input {...inputProps("name")} autoComplete="name" maxLength={100} required />
      </FormField>
      <FormField {...labelProps("phone", "Phone *")}>
        <input {...inputProps("phone")} type="tel" autoComplete="tel" maxLength={15} required />
      </FormField>
      <FormField {...labelProps("email", "Email *")}>
        <input
          {...inputProps("email")}
          type="email"
          autoComplete="email"
          maxLength={255}
          required
        />
      </FormField>
      <FormField {...labelProps("type", "Project Type *")}>
        <select {...inputProps("type")} defaultValue="" required>
          <option value="" disabled>
            Select…
          </option>
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </FormField>
      <FormField {...labelProps("location", "Location")}>
        <input {...inputProps("location")} maxLength={120} />
      </FormField>
      <FormField {...labelProps("budget", "Approximate Budget")}>
        <input {...inputProps("budget")} maxLength={60} />
      </FormField>
      <div className="md:col-span-2">
        <FormField {...labelProps("message", "Message")}>
          <textarea {...inputProps("message")} rows={4} maxLength={1500} />
        </FormField>
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-5 py-4 text-center text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-signal sm:w-auto sm:px-7 sm:tracking-[0.18em]"
        >
          Start Your Project{" "}
          <ArrowUpRight
            className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </button>
      </div>
    </form>
  );
}
