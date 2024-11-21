import Link from "next/link";
import React from "react";

export default function Card({ title, contents, to }) {
  return (
    <Link
      href={to}
      className="h-56 flex flex-col border border-black p-2 text-center justify-center"
    >
      <span>{title}</span>
      <p>{contents}</p>
    </Link>
  );
}
