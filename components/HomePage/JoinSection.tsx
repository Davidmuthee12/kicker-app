import { ArrowRight } from "lucide-react";

import { categories } from "@/data/categories";

export default function JoinSection() {
  return (
    <section className="py-20 px-8 text-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold">
            What do you want to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              join today?
            </span>
          </h2>
          <p className="text-gray-400 mt-3">
            Choose your path and start your fitness journey with the program
            that fits you best.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 border border-gray-200 rounded-2xl hover:bg-white/5 transition group"
            >
              {/* Left Content */}
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{item.description}</p>
              </div>

              {/* CTA */}
              <div className="flex items-center text-blue-400 transition">
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
