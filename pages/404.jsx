import React from "react";
import { useRouter } from "next/navigation";

const Error404 = () => {
  const router = useRouter();

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-custom-black relative">
      <h2 className="text-9xl font-extrabold text-white tracking-widest">404</h2>
      <div className="bg-custom-red text-white px-2 text-sm rounded rotate-12 absolute top-[30%]">
        Page Not Found
      </div>

      <button
        onClick={() => router.push("/")}
        className="mt-5 relative inline-block text-sm font-medium text-white group active:text-custom-red focus:outline-none focus:ring"
      >
        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-black group-hover:translate-y-0 group-hover:translate-x-0"></span>
        <span className="relative block px-8 py-3 bg-custom-black border border-current">
          Go Home
        </span>
      </button>
    </main>
  );
};

export default Error404;
