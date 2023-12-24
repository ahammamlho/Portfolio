import connectMongoDB from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import EmailData from '@/models/mailModel';

export async function POST(request: any) {
  const { email, subject, message } = await request.json();
  await connectMongoDB();
  await EmailData.create({ email, subject, message });
  return NextResponse.json({ message: 'email data Created' }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const data = await EmailData.find();
  return NextResponse.json(data);
}
export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await EmailData.findByIdAndDelete(id);
  return NextResponse.json({ message: 'delete Email' }, { status: 201 });
}

// export async function deleteAllEmails() {
//     await connectMongoDB();
//     await EmailData.deleteMany();
//     return NextResponse.json({ message: "delete Email" }, { status: 201 })
// }

// export async function PUT(request: any) {
//     const session = await getServerSession(authOptions)
//     if (session) {
//         console.log({ message: "You must be logged in." });
//         return "You must be logged in.";
//     }

//     const id = request.nextUrl.searchParams.get("id");
//     const data = await request.json();
//     await connectMongoDB();
//     await Portfolio.findByIdAndUpdate(id, data);
//     return NextResponse.json({ message: "Portfolio data updated" }, { status: 200 });
// }
