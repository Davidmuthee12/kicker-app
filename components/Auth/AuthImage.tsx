import Image from "next/image";

export default function AuthImage() {
  return (
    <div className="hidden h-full items-center justify-center md:flex">
      <Image
        src="/auth.png"
        alt="Authentication Image"
        width={700}
        height={200}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
}
