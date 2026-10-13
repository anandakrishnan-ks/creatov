import { useState, type FormEvent } from "react";
import * as z from "zod";
import { ArrowUpRight, Check } from "lucide-react";
import { contact } from "@/lib/site";

const types = ["Residential", "Commercial", "Renovation", "Development", "Industrial", "Other"];
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().regex(/^[+0-9\s-]{7,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  type: z.string().min(1, "Choose a project type"),
  location: z.string().trim().max(120).optional(),
  budget: z.string().trim().max(60).optional(),
  message: z.string().trim().max(1500).optional(),
});

const field = "block w-full min-w-0 border-0 border-b border-input bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
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
      <div className="border border-border bg-card p-6 sm:p-10">
        <Check className="h-8 w-8 text-signal" />
        <h3 className="mt-6 text-3xl font-extrabold">Thank you.</h3>
        <p className="mt-3 text-muted-foreground">Your email app should now open with your enquiry. You can also call us on {contact.phones[0]}.</p>
        <button onClick={() => setSent(false)} className="label-mono mt-8 underline underline-offset-4">Send another enquiry</button>
      </div>
    );

  const F = ({ name, label, children }: { name: string; label: string; children: React.ReactNode }) => (
    <label className="block min-w-0">
      <span className="label-mono text-muted-foreground">{label}</span>
      {children}
      {errors[name] && <span className="mt-1 block text-sm text-destructive">{errors[name]}</span>}
    </label>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="grid min-w-0 gap-6 border border-border bg-card p-5 sm:p-6 md:grid-cols-2 md:gap-8 md:p-10">
      <F name="name" label="Name *"><input name="name" autoComplete="name" className={field} /></F>
      <F name="phone" label="Phone *"><input name="phone" type="tel" autoComplete="tel" className={field} /></F>
      <F name="email" label="Email *"><input name="email" type="email" autoComplete="email" className={field} /></F>
      <F name="type" label="Project Type *">
        <select name="type" defaultValue="" className={field}>
          <option value="" disabled>Select…</option>
          {types.map((t) => <option key={t}>{t}</option>)}
        </select>
      </F>
      <F name="location" label="Location"><input name="location" className={field} /></F>
      <F name="budget" label="Approximate Budget"><input name="budget" className={field} /></F>
      <div className="md:col-span-2">
        <F name="message" label="Message"><textarea name="message" rows={4} className={field} /></F>
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-5 py-4 text-center text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase transition-colors hover:bg-signal sm:w-auto sm:px-7 sm:tracking-[0.18em]">
          Start Your Project <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}
