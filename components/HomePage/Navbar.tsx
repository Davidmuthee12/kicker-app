import Link from "next/link";
import { navlinks } from "@/data/navlinks";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-blue-400 p-5">
        <div>
          <h1>Kicker App</h1>
        </div>
        <div className="flex gap-5">
          {navlinks.map((link) => (
            <Link key={link.name} href={link.path}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex bg-white text-gray-600 p-2 rounded-sm">
          <Link href="/auth/register">Signup</Link>
        </div>
      </div>
    </>
  );
}
