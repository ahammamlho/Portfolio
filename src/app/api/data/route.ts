import connectMongoDB from "@/libs/mongodb";
import Portfolio from "@/models/aboutModel";
import { NextResponse } from "next/server";


export async function POST(request: any) {
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

// export async function DELETE(request: any) {
//     const id = request.nextUrl.searchParams.get("id");
//     await connectMongoDB();
//     await AboutMe.findByIdAndDelete(id);
//     return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
// }

// export async function PUT(request: any) {
//     const id = request.nextUrl.searchParams.get("id");
//     const { newTitle: title, newDescription: description } = await request.json();
//     await connectMongoDB();
//     await AboutMe.findByIdAndUpdate(id, { title, description });
//     return NextResponse.json({ message: "Topic updated" }, { status: 200 });
// }



// {
//     "aboutMe": "I am a full stack web developer",
//     "skills": ["NodeJs", "ExpressJs"],
//     "education": ["1337 School"],
//     "certifications": [{ "title": "Fullsatck Academy of code", "url": "www.google.com" }],
//     "projects": [
//         {
//             "title": "React Portfolio Website",
//             "urlImg": "https://t3.ftcdn.net/jpg/02/88/80/38/240_F_288803822_0CJ8L3gr6w6nGnUeje6pCllCX7s986xz.jpg",
//             "urlGithub": "www.google.com",
//             "description": "Project 1 description",
//             "tags": ["all", "c++"]
//         }
//     ]
// }