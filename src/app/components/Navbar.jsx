"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!isSignedIn && isLoaded) {
      router.push("/sign-in");
    }
  }, [isSignedIn]);
  return (
    <div className="h-14 bg-gray-600 flex justify-between items-center px-2 text-white">
      <div>DBT</div>
      <div className="flex items-center gap-4">
        <span>Home</span>
        <UserButton />
      </div>
    </div>
  );
}
