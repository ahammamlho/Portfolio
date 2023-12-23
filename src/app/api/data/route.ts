import connectMongoDB from "@/app/lib/mongodb";
import Portfolio from "@/models/aboutModel";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next"

export async function POST(request: any) {
    const session = await getServerSession(authOptions)
    if (!session) {
        console.log({ message: "You must be logged in." },session);
        return NextResponse.json({ message: "You must be logged in" }, { status: 401 }) 
    }

    const { aboutme, skills, education, certifications, projects } = await request.json();
    await connectMongoDB();
    await Portfolio.create({ aboutme, skills, education, certifications, projects });
    return NextResponse.json({ message: "Portfolio data Created" }, { status: 201 })

}

export async function GET() {
    await connectMongoDB();
    const data = await Portfolio.find();
    return NextResponse.json(data);
}

export async function PUT(request: any) {
    const session = await getServerSession(authOptions)
    if (!session) {
        console.log({ message: "You must be logged in." });
        return "You must be logged in.";
    }

    const id = request.nextUrl.searchParams.get("id");
    const data = await request.json();
    await connectMongoDB();
    await Portfolio.findByIdAndUpdate(id, data);
    return NextResponse.json({ message: "Portfolio data updated" }, { status: 200 });
}
