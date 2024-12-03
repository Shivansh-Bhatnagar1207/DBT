"use client"; // Client-side interactions

import React,{startTransition} from "react";
import { DeleteStudent } from "@/app/action";

export default function DeleteButton({ studentId }) {
  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete this student?")) {
      return;
    }

    startTransition(async () => {
      const result = await DeleteStudent(studentId);
    });
  };

  return (
    <button
      onClick={handleDelete}
      className={'px-4 py-2 rounded bg-gray-400" text-white bg-red-600'}
    >
      Delete
    </button>
  );
}
