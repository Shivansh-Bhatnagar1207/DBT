"use client"; // Client-side interactions

import React from "react";
import { DeleteStudent } from "@/app/action";

export default function DeleteButton({ studentId }) {

  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete this student?")) {
      return;
    }

    startTransition(async () => {
      const result = await DeleteStudent(studentId); // Call server action
      if (result.success) {
        alert(result.message);
      } else {
        alert(`Error: ${result.message}`);
      }
    });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className={`px-4 py-2 rounded ${
        isPending ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
      } text-white`}
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
