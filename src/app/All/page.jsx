import React from "react";
import { prisma } from "../lib/prisma";
import { auth } from "@clerk/nextjs/server";
import ExportButton from "@/app/components/ExportButton"; // Import the Client Component
import DeleteButton from "../components/DeleteButton";

export default async function All() {
  const userID = (await auth()).userId;

  // Fetch students created by the current user
  let Students =[]
  if (userID) {
    Students = await prisma.student.findMany({
      where: {
        Created_by: userID,
      },
    });
  }

  return (
    <div className="px-8">
      <div className="text-center text-4xl font-bold p-4">
        List of all Students
      </div>

      {/* Pass student data to the Client Component */}

      {Students.length > 0 ? (
        <>
          <div className="text-right mb-4">
            <ExportButton students={Students} />
          </div>
          <div className="overflow-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="border border-gray-300 px-4 py-2">Sr No</th>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Class</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Student Adhaar
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Gender</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Father&apos;s Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Father&apos;s Adhaar
                  </th>

                  <th className="border border-gray-300 px-4 py-2">
                    Mother&apos;s Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Mother&apos;s Adhaar
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Guardian&apos;s Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">C/O</th>
                  <th className="border border-gray-300 px-4 py-2">Category</th>
                  <th className="border border-gray-300 px-4 py-2">Address</th>
                  <th className="border border-gray-300 px-4 py-2">Mobile</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">D.O.A</th>
                  <th className="border border-gray-300 px-4 py-2">DOB</th>
                  <th className="border border-gray-300 px-4 py-2">Height</th>
                  <th className="border border-gray-300 px-4 py-2">Weight</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Delete Student
                  </th>
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
                      {student.Father_Adhaar || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Mother_Name || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Mother_Adhaar || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Guardian_Name || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Care_of || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Social_Catigory || "N/A"}
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
                      {student.DOA}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.DOB}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Height}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {student.Weight}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="">
                        <DeleteButton studentId={student.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-600 mt-4">No students found.</div>
      )}
    </div>
  );
}
