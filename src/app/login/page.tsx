import { redirect } from 'next/navigation';
import SignInDash from './components/signin';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import Image from 'next/image';
export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/admin');
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#121212] items-center  sm:items-stretch">
      <div className="flex min-h-screen">
        <SignInDash />
        <div className="bg-white flex-grow h-full min-h-screen items-center justify-center sm:flex hidden ">
          <Image src="/dash.gif" alt="image" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
//
