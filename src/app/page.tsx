import React from "react";

export default function Home(): React.ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl text-[#FFFFFF]">
        Skillory <span className="text-[#FF6B1A]">Globe</span>
      </h1>
      <p className="mt-4 max-w-[600px] text-lg text-[#A3A3A3]">
        Discover startups near you. Apply with your story. Never get ghosted.
      </p>
    </main>
  );
}