import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white mb-4">
      <div className="container mx-auto">
        <Link legacyBehavior href="/">
          <a className="text-lg font-semibold">صفحه اصلی</a>
        </Link>
      </div>
    </nav>
  );
}
