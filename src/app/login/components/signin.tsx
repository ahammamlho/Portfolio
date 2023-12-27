'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image';
import { useState } from 'react';

export default function SignInDash() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: any) {
    event.preventDefault();
    try {
      setLoading(true);

      const id = toast.loading('Please wait...');
      const res = await signIn('credentials', {
        username: event.target.username.value,
        password: event.target.password.value,
        redirect: false,
        callbackUrl: '/admin',
      });
      if (res && res.ok) {
        toast.update(id, {
          autoClose: 2000,
          render: 'Login successful',
          type: 'success',
          isLoading: false,
        });

        router.push('/admin');
      } else {
        toast.update(id, {
          autoClose: 3000,
          render: 'Something went wrong',
          type: 'error',
          isLoading: false,
        });
      }
    } catch (error: any) {
      console.error('Sign-in error:', error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="">
      <div className="h-full min-h-screen sm:w-[23rem] w-[20rem] flex flex-col  justify-center">
        <div className="flex flex-col gap-4 items-center">
          <Image src="/logo.png" alt="image" width={80} height={80} />
          <p className="text-white text-center">Login into Dashboard</p>
        </div>

        <form className="flex flex-col mt-10 mx-6" onSubmit={onSubmit}>
          <div className="flex flex-col">
            <p className="text-white block mb-1 text-sm font-medium">
              Username
            </p>
            <input
              type="text"
              id="username"
              required
              placeholder="login"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg
                                block p-2 outline-none"
            />
          </div>

          <div className="mt-4 flex flex-col">
            <label
              htmlFor="text"
              className="text-white block mb-1 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              placeholder="Password"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg
                            block p-2 outline-none"
            />
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-500 hover:bg-yellow-600 
                             text-white font-medium py-1.5 px-6 rounded-lg w-full"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
}
