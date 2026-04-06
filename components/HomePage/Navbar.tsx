import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between p-5 bg-blue-400">
        <div>
          <h1>Kicker App</h1>
        </div>
        <div className="flex gap-5">
          <Link href="#">About Us</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Services</Link>
          <Link href="#">Schedule</Link>
        </div>

        <div className="flex bg-white text-gray-600 p-2 rounded-sm">
          <Link href="/auth/register">Signup</Link>
        </div>
      </div>
    </>
  );
}
