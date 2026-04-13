import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import Navbar from "@/components/HomePage/Navbar";
import ContactForm from "@/components/PublicPages/ContactForm";
import PageHero from "@/components/PublicPages/PageHero";

const contactHighlights = [
  {
    icon: Mail,
    title: "Email us",
    detail: "hello@kickerfit.com",
  },
  {
    icon: Phone,
    title: "Call us",
    detail: "+254700000000",
  },
  {
    icon: MapPin,
    title: "Visit us",
    detail: "Nairobi, Kenya",
  },
];

export const metadata: Metadata = {
  title: "Contact | Kicker",
  description:
    "Reach out to Kicker through a validated contact form built for future backend integration.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <PageHero
        badge="Contact Kicker"
        title="Reach out and let’s build your"
        highlight="next routine"
        description="The page is ready with a styled contact form and client-side validation. Once your backend endpoint is available, we can connect submission handling without redesigning the UI."
      />

      <main className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="space-y-6">
            <div className="rounded-[28px] border border-black/10 bg-white p-8 shadow-lg shadow-black/5">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                Start Here
              </p>
              <h2 className="mt-4 text-3xl font-extrabold">
                Tell us how you want to train.
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                Whether someone is joining for strength, weight loss, or
                accountability, this page gives them a clean way to make first
                contact before the API is ready.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {contactHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-black/10 bg-slate-50 p-6"
                  >
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500">
                      <Icon className="size-5 text-white" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.detail}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <ContactForm />
        </div>
      </main>
    </div>
  );
}
