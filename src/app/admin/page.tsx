import { redirect } from 'next/navigation'

import { getServerSession } from 'next-auth';
import AboutCertifactions from "./componenets/AboutCertifact";
import AboutEducation from "./componenets/AboutEduca";
import AboutMe from "./componenets/AboutMe";
import AboutSkills from "./componenets/AboutSkills";
import Projects from "./componenets/Projects";
import { useEffect } from "react";
import { authOptions } from '../api/auth/[...nextauth]/route';




export default async function Home() {


    // Get user session
    const session = await getServerSession(authOptions);

    console.log("session -->", session);

    if (!session) {
        redirect('/api/auth/signin')
        // return <p>You are not authorized to access this page.</p>;
    }

    return (
        <div className="flex min-h-screen flex-col bg-[#121212] text-white ">
            <AboutMe />
            <AboutSkills />
            <AboutEducation />
            <AboutCertifactions />
            <Projects />
        </div>
    )
}
