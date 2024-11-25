import React from "react";
import { prisma } from "../lib/prisma";
import { auth } from "@clerk/nextjs/server";
import ExportButton from "@/app/components/ExportButton"; // Import the Client Component

export default async function All() {
  const userID = (await auth()).userId;

  // Fetch students created by the current user
  const Students = await prisma.student.findMany({
    where: {
      Created_by: userID,
    },
  });

  console.log("Students:", Students);

  return (
    <div className="px-8">
      <div className="text-center text-4xl font-bold p-4">
        List of all Students
      </div>

      {/* Pass student data to the Client Component */}
      <div className="text-right mb-4">
        <ExportButton students={Students} />
      </div>

      {Students.length > 0 ? (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border border-gray-300 px-4 py-2">Sr No</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Class</th>
              <th className="border border-gray-300 px-4 py-2">Adhaar</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
              <th className="border border-gray-300 px-4 py-2">
                Father's Name
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Mother's Name
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Guardian's Name
              </th>
              <th className="border border-gray-300 px-4 py-2">Address</th>
              <th className="border border-gray-300 px-4 py-2">Mobile</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">DOB</th>
            </tr>
          </thead>
          <tbody>
            {Students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  {student.SrNo}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.Student_Name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.Class}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.Student_Adhaar}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.Gender}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.Father_Name || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.Mother_Name || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.Guardian_Name || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.Address}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.Mobile}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.Email || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {student.DOB}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-gray-600 mt-4">No students found.</div>
      )}
    </div>
  );
}
