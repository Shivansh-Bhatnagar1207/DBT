import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp />
    </div>
  );
}
