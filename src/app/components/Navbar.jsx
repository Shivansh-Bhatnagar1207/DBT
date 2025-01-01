"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  
  return (
    <div className="h-14 bg-[#7a3c24] flex justify-between items-center px-2 text-white">
      <div>DBT</div>
      <div className="flex items-center gap-4">
        <Link href={"/"}>Home</Link>
        {/* <UserButton /> */}
      </div>
    </div>
  );
}
