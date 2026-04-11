import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <>
      <div
        className="relative grid min-h-[100vh] grid-cols-2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex flex-col items-start justify-center gap-10 p-10">
          <Badge variant="secondary">
            <BadgeCheck data-icon="inline-start" />
            Verified
          </Badge>
          <h1 className="text-white">
            BE STRONGER THAN <br /> YOUR EXCUSES
          </h1>
          <p className="text-white">
            Join us to achieve your fitness goals and transform your life.
          </p>
          <Link
            href="/auth/register"
            className="bg-blue-400 text-white p-3 rounded-sm"
          >
            Sign Up
          </Link>
        </div>

        <div className="relative z-10">right</div>
      </div>
    </>
  );
}
