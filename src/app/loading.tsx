"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white">
      <div className="relative w-40 h-40 mb-8 animate-pulse">
        <Image
          src="/images/logo_blitz_square.png"
          alt="Blitz Lavanderia"
          fill
          className="object-contain"
        />
      </div>
      <h1 className="text-2xl font-sans font-bold text-primary mb-4">Blitz Lavanderia</h1>
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-primary animate-[loading_1.5s_ease-in-out_infinite]"></div>
      </div>
      <style jsx global>{`
        @keyframes loading {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
} 