import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GlobeHero from "@/components/globe-hero";

export default function Home(): React.ReactElement {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Layer: The interactive globe */}
      <GlobeHero />
      
      {/* Foreground Layer: UI overlay (pointer-events-none lets you click through it) */}
      <main className="absolute inset-0 z-10 flex flex-col items-center justify-end p-6 pb-20 text-center pointer-events-none">
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl text-white drop-shadow-lg">
          Skillory <span className="text-primary">Globe</span>
        </h1>
        <p className="mt-4 max-w-[600px] text-xl text-foreground drop-shadow-md">
          Discover startups near you. Apply with your story. Never get ghosted.
        </p>
        
        {/* Restore clickability exclusively for the buttons */}
        <div className="mt-8 flex gap-4 pointer-events-auto">
          <Link href="/map">
            <Button size="lg" className="rounded-2xl font-bold text-white text-md px-8 py-6">
              Find Startups Near Me
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="rounded-2xl font-bold text-white text-md px-8 py-6 bg-background/50 backdrop-blur-md hover:bg-background/80">
              List Your Startup
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}