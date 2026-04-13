import type { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";

import Navbar from "@/components/HomePage/Navbar";
import PageHero from "@/components/PublicPages/PageHero";
import { pricing } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing | Kicker",
  description:
    "Explore Kicker membership plans rendered dynamically from the shared pricing data source.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <PageHero
        badge="Pricing Plans"
        title="Choose the plan that matches your"
        highlight="training goals"
        description="This page is already wired to render plan data dynamically from the root data folder. When the admin dashboard is ready, the same UI can be switched to API-backed pricing."
      />

      <main className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          {/* <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                Dynamic For Later
              </p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Plans are mapped from `data/pricing.ts` for now.
              </h2>
              <p className="mt-4 text-gray-400">
                That gives you editable content today while keeping the page
                ready for admin-managed pricing once the backend is in place.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              <Sparkles className="size-4 text-blue-400" />
              Backend-ready presentation layer
            </div>
          </div> */}

          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[32px] border p-8 backdrop-blur-md transition hover:-translate-y-1 ${
                  plan.featured
                    ? "border-blue-500/40 bg-gradient-to-b from-blue-500/15 to-purple-500/10 shadow-2xl shadow-blue-950/30"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.featured && (
                  <div className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {plan.description}
                </p>
                <p className="mt-8 text-4xl font-extrabold">{plan.price}</p>
                <p className="mt-2 text-sm text-gray-500">
                  Flexible placeholder pricing until dashboard sync is ready.
                </p>

                <div className="mt-8 space-y-4">
                  {plan.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="mt-1 flex size-5 items-center justify-center rounded-full bg-blue-500/15">
                        <Check className="size-3 text-blue-300" />
                      </div>
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={plan.cta.href}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-900/30 hover:scale-[1.02]"
                      : "border border-white/10 bg-black/40 text-white hover:border-blue-500/40"
                  }`}
                >
                  {plan.cta.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
