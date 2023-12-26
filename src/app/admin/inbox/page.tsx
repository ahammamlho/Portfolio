import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import Emails from '../componenets/Emails';
import NavBarAdmin from '../componenets/navBar';

export default async function Inbox() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#121212] text-white ">
      <NavBarAdmin />
      <Emails />
    </div>
  );
}
