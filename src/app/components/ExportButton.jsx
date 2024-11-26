"use client"; // Enables client-side interactivity

import React from "react";
import * as XLSX from "xlsx";

export default function ExportButton({ students }) {
  const exportToExcel = () => {
    const data = students.map((student) => ({
      "Sr No": student.SrNo || "N/A",
      "Name": student.Student_Name || "N/A",
      "Class": student.Class || "N/A",
      "Student Adhaar": student.Student_Adhaar || "N/A",
      "Gender": student.Gender || "N/A",
      "Father's Name": student.Father_Name || "N/A",
      "Father's Adhaar": student.Father_Adhaar || "N/A",
      "Mother's Name": student.Mother_Name || "N/A",
      "Mother's Adhaar": student.Mother_Adhaar || "N/A",
      "Guardian's Name": student.Guardian_Name || "N/A",
      "Category": student.Social_Catigory || "N/A",
      "C/O": student.Care_of || "N/A",
      "Address": student.Address || "N/A",
      "Mobile": student.Mobile || "N/A",
      "Email": student.Email || "N/A",
      "DOB": student.DOB || "N/A",
      "DOA": student.DOA || "N/A",
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
