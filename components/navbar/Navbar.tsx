"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">Mandjou Dama.</div>

      <div className="links">
        <ul>
          <li>Services</li>
          <li>Travaux</li>
          <li>Blog</li>
          <li>Let&apos;s talk</li>
        </ul>
      </div>

      <div className="bar"></div>

      <div className="socials">
        <Link href={""}>GH</Link>
        <Link href={""}>LI</Link>
        <Link href={""}>TW</Link>
      </div>
    </nav>
  );
}
