import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import AboutCertifactions from './componenets/AboutCertifact';
import AboutEducation from './componenets/AboutEduca';
import AboutMe from './componenets/AboutMe';
import AboutSkills from './componenets/AboutSkills';
import Projects from './componenets/Projects';
import NavBarAdmin from './componenets/navBar';

export default async function Admin() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
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
  );
}
