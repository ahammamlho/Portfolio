"use client"
import { SessionProvider } from "next-auth/react"

import { signIn, useSession } from 'next-auth/react';
import AboutCertifactions from "./componenets/AboutCertifact";
import AboutEducation from "./componenets/AboutEduca";
import AboutMe from "./componenets/AboutMe";
import AboutSkills from "./componenets/AboutSkills";
import Projects from "./componenets/Projects";
import { useEffect } from "react";




export default function Home() {


    // Get user session
    const { data: session } = useSession();
    console.log("session -->", session);
    console.log("");

    if (!session) {
        return <p>You are not authorized to access this page.</p>;
    }

    useEffect(() => {
        const sigin = async () => {
            try {
                const res = await signIn('credentials', {
                    username: "fsd",
                    password: "sd",
                    redirect: true,
                    callbackUrl: '/',
                });
                if (res?.error === null) {
                    console.log('callback calld');
                } else {
                    console.log('callback calld');
                }
            } catch (error: any) {
                console.error('Error signing in:', error);
            }
        }
        sigin();
    }, [])

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
