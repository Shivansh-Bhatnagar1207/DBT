"use client"; // Enables client-side interactivity

import React from "react";
import * as XLSX from "xlsx";

export default function ExportButton({ students }) {
  const exportToExcel = () => {
    const data = students.map((student) => ({
      "Sr No": student.SrNo,
      "Name": student.Student_Name,
      "Class": student.Class,
      "Adhaar": student.Student_Adhaar,
      "Gender": student.Gender,
      "Father's Name": student.Father_Name || "N/A",
      "Mother's Name": student.Mother_Name || "N/A",
      "Guardian's Name": student.Guardian_Name || "N/A",
      "Address": student.Address,
      "Mobile": student.Mobile,
      "Email": student.Email || "N/A",
      "Date of Birth": student.DOB,
    }));

    // Create a worksheet and workbook
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    // Export workbook
    XLSX.writeFile(workbook, "Students_Data.xlsx");
  };

  return (
    <button
      onClick={exportToExcel}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Export to Excel
    </button>
  );
}
