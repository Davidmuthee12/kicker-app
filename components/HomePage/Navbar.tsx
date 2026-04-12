import Link from "next/link";
import { navlinks } from "@/data/navlinks";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-8 py-4">
        <h1 className="text-white text-xl font-bold tracking-wide">
          Kicker<span className="text-blue-500">.</span>
        </h1>

        <div className="hidden md:flex items-center gap-8">
          {navlinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-gray-300 hover:text-white transition relative group"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-gray-300 hover:text-white transition hidden md:block"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
