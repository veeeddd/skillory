import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage(): React.ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background">
      <div className="w-full max-w-[400px] rounded-3xl border border-border bg-card p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="mt-2 text-foreground">Sign in to Skillory</p>
        </div>
        
        <div className="flex flex-col gap-4">
          <Button size="lg" className="rounded-xl font-bold text-white">
            Sign in with Google
          </Button>
          
          <div className="relative my-2 flex items-center">
            <div className="flex-grow border-t border-border"></div>
            <span className="bg-card px-3 text-xs text-muted-foreground uppercase tracking-wider">Or email</span>
            <div className="flex-grow border-t border-border"></div>
          </div>
          
          <input
            type="email"
            placeholder="name@example.com"
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button size="lg" variant="outline" className="rounded-xl font-bold text-white hover:bg-secondary">
            Send Magic Link
          </Button>
        </div>

        <div className="mt-8 text-center text-sm text-foreground">
          <Link href="/" className="hover:text-primary transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}