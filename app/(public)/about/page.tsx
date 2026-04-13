import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import Navbar from "@/components/HomePage/Navbar";
import PageHero from "@/components/PublicPages/PageHero";

const pillars = [
  {
    icon: Target,
    title: "Purposeful Training",
    description:
      "Every session is designed to move members toward clear, measurable goals.",
  },
  {
    icon: Users,
    title: "Real Community",
    description:
      "We create an environment where discipline grows through support and accountability.",
  },
  {
    icon: Sparkles,
    title: "Sustainable Progress",
    description:
      "The focus is long-term change, not short-lived intensity without structure.",
  },
];

const milestones = [
  "Structured coaching for beginners and athletes",
  "Strength, conditioning, and lifestyle support in one place",
  "A motivating space built around consistency and confidence",
];

export const metadata: Metadata = {
  title: "About | Kicker",
  description:
    "Learn the story, coaching philosophy, and member-first approach behind Kicker.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <PageHero
        badge="About Kicker"
        title="Built for people who want"
        highlight="lasting results"
        description="Kicker exists to make fitness feel focused, energizing, and sustainable. We blend expert coaching, a disciplined atmosphere, and a supportive community so members can train with confidence."
      />

      <main>
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                Our Story
              </p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                We help members turn motivation into a rhythm they can keep.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
                Kicker was shaped around a simple idea: progress happens faster
                when training is clear, personalized, and backed by the right
                energy. Instead of overwhelming members with noise, we focus on
                strong coaching, practical programs, and a culture that keeps
                people coming back.
              </p>

              <div className="mt-8 space-y-4">
                {milestones.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-5 text-blue-400" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/pricing"
                  className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-900/30 transition hover:scale-105"
                >
                  Explore Pricing
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gray-600 transition hover:text-black"
                >
                  Speak to the team
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
              <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-purple-600/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-white p-4 shadow-xl shadow-blue-100/60">
                <Image
                  src="/hero.png"
                  alt="Athlete training at Kicker"
                  width={640}
                  height={760}
                  className="rounded-[24px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/5 bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                What Guides Us
              </p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                The same energy as the landing page, carried into the whole
                brand.
              </h2>
              <p className="mt-4 text-gray-600">
                Bold visuals matter, but the experience behind them matters even
                more. These principles shape how Kicker coaches, programs, and
                supports members.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <article
                    key={pillar.title}
                    className="rounded-[28px] border border-black/10 bg-white p-6 shadow-lg shadow-black/5 transition hover:-translate-y-1"
                  >
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500">
                      <Icon className="size-5 text-white" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {pillar.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-[32px] border border-black/10 bg-gradient-to-r from-blue-50 to-purple-50 p-8 md:grid-cols-[0.95fr_1.05fr] md:p-10">
            <div className="relative min-h-72 overflow-hidden rounded-[28px] border border-black/10 bg-white">
              <Image
                src="/sprint.png"
                alt="Kicker training session"
                fill
                className="object-contain p-6"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                Why Members Stay
              </p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Training that feels intense, clear, and worth showing up for.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-gray-700">
                Kicker combines coaching structure with a high-energy aesthetic
                that keeps the brand memorable. If you want to add more imagery
                later, this page is ready for studio shots, coaching portraits,
                or class-session photography without needing layout changes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
