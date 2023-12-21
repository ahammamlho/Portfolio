
"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInDash() {
    const router = useRouter();

    async function onSubmit(event: any) {
        event.preventDefault();
        try {
            const res = await signIn("credentials", {
                username: event.target.username.value,
                password: event.target.password.value,
                redirect: false,
                callbackUrl: "/admin",
            });
            if (res && res.ok) {
                router.push('/admin');
            } else {

            }
        } catch (error: any) { }
    }

    return (
        <div className="   ">
            <div className="h-full min-h-screen sm:w-[23rem] w-[20rem] flex flex-col  justify-center">
                <p className="text-white text-center">Login into Dashboard</p>

                <form className='flex flex-col mt-16 mx-6' onSubmit={onSubmit}>
                    <div className='flex flex-col   '>
                        <label htmlFor="email"
                            className='text-white block mb-1 text-sm font-medium'
                        >Username</label>
                        <input type="text" id='username' required placeholder='lahammam'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg 
                                block p-2 outline-none'
                        />
                    </div>

                    <div className='mt-4 flex flex-col'>
                        <label htmlFor="text"
                            className='text-white block mb-1 text-sm font-medium'
                        >Password</label>
                        <input type="password" id='password' required placeholder='Password'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg
                            block p-2 outline-none'
                        />
                    </div>

                    <div className='mt-4 flex justify-center'>
                        <button
                            type='submit'
                            className='bg-yellow-500 hover:bg-yellow-600 
                             text-white font-medium py-1.5 px-6 rounded-lg w-full'
                        >Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
