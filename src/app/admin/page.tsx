
import AboutCertifactions from "./componenets/AboutCertifact";
import AboutEducation from "./componenets/AboutEduca";
import AboutMe from "./componenets/AboutMe";
import AboutSkills from "./componenets/AboutSkills";
import Projects from "./componenets/Projects";



export default function Home() {
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
