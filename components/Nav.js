import React from "react";
import Link from "next/link";
export default function Nav() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        {" | "}
        <Link href="/services">Services</Link>
        {" | "}
        <Link href="/aboutus/">AboutUs</Link>
        {" | "}
        <Link href="/movies/">Movies</Link>
        {" | "}
      </nav>
    </>
  );
}
