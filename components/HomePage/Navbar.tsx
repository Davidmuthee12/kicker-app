"use client";

import Link from "next/link";
import { navlinks } from "@/data/navlinks";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        <h1 className="text-white text-xl font-bold tracking-wide">
          Kicker<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Nav Links */}
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

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-gray-300 hover:text-white transition"
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

        {/* Mobile: Get Started + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/register"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md"
          >
            Get Started
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {navlinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition text-base py-1"
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-4">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition text-base"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
