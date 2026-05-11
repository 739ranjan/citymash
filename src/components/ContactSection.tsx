import { AlertCircle, CheckCircle2, ChevronDown, Loader2, Mail, Phone, Send } from "lucide-react";
import { useId, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { brand, images } from "../data/citymash";

const apiBaseUrl = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");
const contactApiUrl = apiBaseUrl ? `${apiBaseUrl}/api/contact` : "/api/contact";
const contactRequestTimeoutMs = 15000;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "Mandate Projects",
  message: "",
  company: "",
};

const projectTypes = ["Mandate Projects", "Sole Selling", "Residential", "Commercial", "Retail", "Leasing", "Other"];

type FormState = typeof initialForm;
type SubmitStatus = "idle" | "loading" | "success" | "error";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [notice, setNotice] = useState("");
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const serviceListboxId = useId();

  const isSubmitting = status === "loading";

  const canSubmit = useMemo(
    () => form.name.trim() && form.email.trim() && form.phone.trim() && form.message.trim(),
    [form],
  );

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (field === "service") {
      setServiceMenuOpen(false);
    }
    if (status !== "idle") {
      setStatus("idle");
      setNotice("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      setStatus("error");
      setNotice("Please complete all required details before sending.");
      return;
    }

    if (!isEmail(form.email)) {
      setStatus("error");
      setNotice("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setNotice("");

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), contactRequestTimeoutMs);

    try {
      const payload = {
        ...form,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      };

      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message ?? "Unable to send enquiry right now.");
      }

      setStatus("success");
      setNotice(data?.message ?? "Thanks. The CityMash team will get back to you shortly.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setNotice(
        error instanceof Error && error.name === "AbortError"
          ? "Contact server did not respond. Please try again in a few minutes or call CityMash directly."
          : error instanceof Error
            ? error.message
            : "Unable to send enquiry right now.",
      );
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-zinc-950 py-16 text-white sm:py-24 lg:py-28">
      <img src={images.courtyard} alt="Modern residential courtyard" className="absolute inset-0 h-full w-full object-cover opacity-[0.22]" />
      <div className="absolute inset-0 bg-zinc-950/80" />

      <div className="section-shell relative z-10 grid gap-8 xl:grid-cols-[0.78fr_1.22fr] xl:items-start xl:gap-10">
        <div className="max-w-3xl xl:max-w-none">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">{brand.tagline}</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-extrabold leading-tight text-balance sm:text-5xl xl:text-6xl">
            Start a conversation with Pune's focused sales partner.
          </h2>
          <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-zinc-200 sm:text-base sm:leading-8">
            Share your residential, commercial, retail, leasing, or sole-selling project brief and CityMash can shape
            the sales strategy, launch path, and execution plan.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">  

            <div className="grid gap-4 border border-white/[0.12] bg-white/[0.08] p-5 backdrop-blur sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
              <div className="flex min-w-0 items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center bg-emerald-300 text-zinc-950">
                  <Phone className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-extrabold">Call Now</p>
                  <p className="mt-1 break-words text-sm font-semibold leading-6 text-zinc-300">+91 90238613131</p>
                </div>
              </div>
              <div className="flex min-w-0 items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center bg-emerald-300 text-zinc-950">
                  <Mail className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-extrabold">Email Now</p>
                  <p className="mt-1 break-words text-sm font-semibold leading-6 text-zinc-300">info@citymash.in</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-4xl justify-self-center overflow-hidden bg-white p-4 text-zinc-950 shadow-panel sm:p-7 xl:max-w-none" noValidate>
          <div className="flex items-start justify-between gap-3 border-b border-zinc-200 pb-5 sm:gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-teal-700 sm:text-sm sm:tracking-[0.14em]">Contact Us</p>
              <h3 className="mt-2 font-display text-lg font-extrabold leading-tight text-zinc-950 min-[360px]:text-xl sm:text-3xl">
                Tell us about the mandate
              </h3>
            </div>
            <span className="grid size-10 shrink-0 place-items-center bg-zinc-950 text-white sm:size-12">
              <Mail className="size-5" />
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="block min-w-0">
              <span className="text-sm font-extrabold text-zinc-800">Full name</span>
              <input
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="mt-2 w-full min-w-0 border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-teal-700 focus:bg-white"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </label>

            <label className="block min-w-0">
              <span className="text-sm font-extrabold text-zinc-800">Email address</span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="mt-2 w-full min-w-0 border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-teal-700 focus:bg-white"
                placeholder="name@example.com"
                autoComplete="email"
                required
              />
            </label>

            <label className="block min-w-0">
              <span className="text-sm font-extrabold text-zinc-800">Phone number</span>
              <input
                type="tel"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="mt-2 w-full min-w-0 border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold outline-none transition focus:border-teal-700 focus:bg-white"
                placeholder="+91 9028613131"
                autoComplete="tel"
                required
              />
            </label>

            <label className="block min-w-0">
              <span className="text-sm font-extrabold text-zinc-800">Project type</span>
              <span className="relative mt-2 block">
                <button
                  type="button"
                  className="flex w-full min-w-0 items-center justify-between gap-3 border border-zinc-200 bg-zinc-50 px-4 py-3 text-left text-sm font-semibold outline-none transition focus:border-teal-700 focus:bg-white"
                  aria-haspopup="listbox"
                  aria-expanded={serviceMenuOpen}
                  aria-controls={serviceListboxId}
                  onClick={() => setServiceMenuOpen((value) => !value)}
                >
                  <span className="truncate">{form.service}</span>
                  <ChevronDown className={`size-4 shrink-0 text-zinc-700 transition ${serviceMenuOpen ? "rotate-180" : ""}`} />
                </button>
                {serviceMenuOpen && (
                  <ul
                    id={serviceListboxId}
                    role="listbox"
                    className="absolute left-0 right-0 top-full z-20 mt-1 max-h-64 overflow-auto border border-zinc-200 bg-white py-1 shadow-[0_18px_45px_rgba(15,23,42,0.18)]"
                  >
                    {projectTypes.map((type) => (
                      <li key={type} role="option" aria-selected={form.service === type}>
                        <button
                          type="button"
                          className={`block w-full px-4 py-3 text-left text-sm font-semibold transition ${
                            form.service === type ? "bg-teal-700 text-white" : "text-zinc-900 hover:bg-zinc-50"
                          }`}
                          onClick={() => updateField("service", type)}
                        >
                          {type}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </span>
            </label>
          </div>

          <label className="mt-4 block min-w-0">
            <span className="text-sm font-extrabold text-zinc-800">Project brief</span>
            <textarea
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="mt-2 min-h-36 w-full min-w-0 resize-y border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold leading-6 outline-none transition focus:border-teal-700 focus:bg-white"
              placeholder="Location, project category, inventory, launch stage, and support required"
              required
            />
          </label>

          <input
            type="text"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {notice && (
            <div
              className={`mt-5 flex items-start gap-3 border px-4 py-3 text-sm font-bold ${
                status === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-700"
              }`}
              role="status"
            >
              {status === "success" ? <CheckCircle2 className="mt-0.5 size-4 shrink-0" /> : <AlertCircle className="mt-0.5 size-4 shrink-0" />}
              <span>{notice}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-zinc-950 px-5 py-4 text-sm font-extrabold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-zinc-500"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Sending Enquiry
              </>
            ) : (
              <>
                Send Enquiry
                <Send className="size-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
