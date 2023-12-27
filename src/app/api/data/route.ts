import connectMongoDB from '@/app/lib/mongodb';
import Portfolio from '@/models/aboutModel';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/authOptions';

// create data I use Postman
export async function POST(request: any) {
  const session: any = await getServerSession(authOptions);
  if (
    !session ||
    (session && session.user && session.user.username !== 'lahammam')
  ) {
    return NextResponse.json({ message: 'You must be logged in', status: 401 });
  }
  const { aboutme, skills, education, certifications, projects } =
    await request.json();
  await connectMongoDB();
  await Portfolio.create({
    aboutme,
    skills,
    education,
    certifications,
    projects,
  });
  return NextResponse.json({ message: 'Portfolio data Created', status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const data = await Portfolio.find();
  return NextResponse.json(data);
}

// update data
export async function PUT(request: any) {
  try {
    const session: any = await getServerSession(authOptions);
    console.log(session);
    if (
      !session ||
      (session && session.user && session.user.username !== 'lahammam')
    ) {
      return NextResponse.error;
    }

    const id = request.nextUrl.searchParams.get('id');
    const data = await request.json();
    await connectMongoDB();
    await Portfolio.findByIdAndUpdate(id, data);
    return NextResponse.json({
      message: 'Portfolio data updated',
      status: 200,
    });
  } catch (error) {}
}
