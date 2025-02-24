"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex gap-4">
      <Link href="/users" className="hover:underline">Users</Link>
      <Link href="/posts" className="hover:underline">Posts</Link>
    </nav>
  );
}
