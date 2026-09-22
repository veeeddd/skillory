import React from "react";
import Link from "next/link";

export default function MapPage(): React.ReactElement {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Top Navigation Bar */}
      <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
        <Link href="/" className="text-xl font-bold text-white hover:text-primary transition-colors">
          Skillory <span className="text-primary">Map</span>
        </Link>
        <div className="text-sm font-medium text-accent">Map Engine Pending</div>
      </header>

      {/* Map Canvas Area */}
      <div className="flex flex-1 items-center justify-center p-6 text-center">
        <div className="max-w-md rounded-3xl border border-border bg-card p-8">
          <h2 className="text-2xl font-bold text-white mb-3">Flat Map Loading...</h2>
          <p className="text-foreground">
            This is where the high-performance MapLibre 2D map will live. We need to connect our Supabase database first so we have real coordinates to plot.
          </p>
          <div className="mt-6">
            <Link href="/" className="text-primary hover:underline">
              Go back to 3D Globe
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}