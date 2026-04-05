import Image from "next/image";

export default function AuthImage() {
  return (
    <div className="flex items-center justify-center bg-amber-400 h-screen">
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
