import Image from "next/image";
import Link from "next/link";

export default function CallAction() {
  return (
    <div className="grid grid-cols-2 mt-10 items-center relative">
      <div className="relative flex items-center justify-center">
        {/*  Gradient Circle Background */}
        <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 opacity-80"></div>

        {/* Dotted Pattern */}
        <div className="absolute -left-10 top-10 w-[150px] h-[150px] bg-[radial-gradient(circle,_#9CA3AF_1px,_transparent_1px)] bg-[size:10px_10px] opacity-40"></div>

        <Image
          src="/sprint.png"
          alt="Sprint Image"
          width={500}
          height={500}
          className="object-contain relative z-10"
        />
      </div>

      <div className="max-w-lg space-y-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold leading-tight">
          Ready to make a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            real change?
          </span>
        </h2>

        {/* Body Text */}
        <p className="text-gray-400 text-lg leading-relaxed">
          Stop guessing and start training with purpose. Our programs are
          designed to help you build strength, burn fat, and stay consistent —
          whether you&apos;re just starting out or pushing for your next level.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed">
          With expert guidance, structured workouts, and a supportive fitness
          community, you&apos;ll stay motivated and see real, lasting results.
          This is more than a workout — it&apos;s a lifestyle upgrade.
        </p>

        {/* CTA Section */}
        <div className="flex items-center gap-4 pt-2">
          <Link
            href="/register"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition"
          >
            Get Started Today
          </Link>

          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
}
