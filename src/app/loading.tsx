'use client';

import Image from 'next/image';

// import Lottie from "lottie-react";
// import loadingc from "./assets/loading.json";
export default function loading() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-color-main">
      <div className="  flex flex-col justify-center items-center ">
        {/* <Lottie animationData={loadingc} loop={true} className="h-48 w-48" /> */}
        <Image src="/loading.gif" alt="loading" width={400} height={400} />
        <h1 className="text-2xl my-4 text-gray-400">Loading...</h1>
      </div>
    </div>
  );
}
