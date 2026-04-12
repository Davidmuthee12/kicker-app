import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <div className="grid h-full grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-6 p-10 max-w-xl">
          <Badge
            variant="secondary"
            className="flex items-center gap-2 bg-blue-500 text-white border border-blue-500/20 px-3 py-2 rounded-full"
          >
            <BadgeCheck size={16} />
            Trusted by Athletes
          </Badge>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
            Be Stronger Than
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Your Excuses
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Transform your body, build discipline, and unlock your full
            potential with personalized training programs.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <Link
              href="/register"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition"
            >
              Get Started
            </Link>

            <Link
              href="#"
              className="text-gray-500 hover:text-gray-700 transition"
            >
              Explore Programs →
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center p-10 relative">
          {/*  Background Ring */}
          <div className="absolute w-[600px] h-[600px] bg-blue-700 rounded-full  opacity-30"></div>

          {/* second gradient layer */}
          <div className="absolute w-[400px] h-[400px] bg-purple-700 rounded-full  opacity-20"></div>

          <Image
            src="/ripped.png"
            alt="Hero Image"
            width={350}
            height={500}
            className="object-contain relative z-10"
          />
        </div>
      </div>
    </>
  );
}
