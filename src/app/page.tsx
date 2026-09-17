import React from "react";
import { Button } from "@/components/ui/button";

export default function Home(): React.ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl text-white">
        Skillory <span className="text-primary">Globe</span>
      </h1>
      <p className="mt-4 max-w-[600px] text-lg text-foreground">
        Discover startups near you. Apply with your story. Never get ghosted.
      </p>
      <div className="mt-8 flex gap-4">
        <Button size="lg" className="rounded-2xl font-bold">
          Find Startups Near Me
        </Button>
        <Button size="lg" variant="outline" className="rounded-2xl font-bold text-white">
          List Your Startup
        </Button>
      </div>
    </main>
  );
}