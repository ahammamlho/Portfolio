import { redirect } from 'next/navigation'
import AboutCertifactions from "./componenets/AboutCertifact";
import AboutEducation from "./componenets/AboutEduca";
import AboutMe from "./componenets/AboutMe";
import AboutSkills from "./componenets/AboutSkills";
import Projects from "./componenets/Projects";
import { useEffect } from "react";
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from "next-auth/next"
import NavBarAdmin from './componenets/navBar';



export default async function Home() {
    const session = await getServerSession(authOptions);

    console.log("session --> ", session);

    if (!session) {
        redirect('/login')
    }

    return (
        <div className="flex min-h-screen flex-col bg-[#121212] text-white ">
            <NavBarAdmin />
            <AboutMe />
            <AboutSkills />
            <AboutEducation />
            <AboutCertifactions />
            <Projects />
        </div>
    )
}
