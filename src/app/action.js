'use server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/app/lib/prisma'
import { redirect } from 'next/navigation'

export async function CreateStudent(formdata) {
    const userId = (await auth()).userId
    await prisma.student.create({
        data: {
            Created_by: userId,
            Class: parseInt(formdata.get('class')),
            SrNo: parseInt(formdata.get('SRno')),
            Student_Name: formdata.get('Student_Name'),
            Gender: formdata.get('gender'),
            Student_Adhaar: formdata.get('Student_Adhaar'),
            Father_Name: formdata.get('Father_Name') ||
                "",
            Father_Adhaar: formdata.get('Father_Adhaar') || "",
            Mother_Name: formdata.get('Mother_Name') || '',
            Mother_Adhaar: formdata.get('Mother_Adhaar') || "",
            Care_of: formdata.get("Care_Of"),
            Address: formdata.get('Address'),
            Mobile: formdata.get('Mobile'),
            Email: formdata.get('Email') || "",
            Social_Catigory: formdata.get('Category'),
            Height: parseInt(formdata.get('Height')) || 0,
            Weight: parseInt(formdata.get('Weight')) || 0,
            DOA: formdata.get('DOA'),
            DOB: formdata.get('DOB')
        }
    })
    redirect('/')
}


export async function DeleteStudent(studentId) {
    try {
        await prisma.student.delete({ where: { id: studentId } })
    } catch (err) {
        throw err
    }

}