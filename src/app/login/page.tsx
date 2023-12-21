import SignInDash from "./components/signin"


export default function Home() {
    return (
        <div className='flex min-h-screen flex-col bg-[#121212] items-center  sm:items-stretch'>
            <div className="flex min-h-screen">
                <SignInDash />
                <div className="bg-white flex-grow h-full min-h-screen hidden sm:block"></div>
            </div>
        </div>)
}
