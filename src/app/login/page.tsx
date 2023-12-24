import { redirect } from 'next/navigation';
import SignInDash from './components/signin';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/admin');
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#121212] items-center  sm:items-stretch">
      <div className="flex min-h-screen">
        <SignInDash />
        <div className="bg-white flex-grow h-full min-h-screen hidden sm:block"></div>
      </div>
    </div>
  );
}
