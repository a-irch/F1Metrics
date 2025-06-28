'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Flag, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 bg-background text-foreground">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Explore Formula 1 sessions & live stats
        </h1>

        <p className="text-muted-foreground text-lg">
          A minimalist application to browse F1 sessions, drivers, and stats. Powered by real-time data from FastF1 project.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="/season">
            <Button size="lg">
              <Flag className="w-5 h-5 mr-2" />
              Season Overview
            </Button>
          </Link>

          <a
            href="https://docs.fastf1.dev/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-muted-foreground hover:underline"
          >
            Powered by FastF1 <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>

      <footer className="absolute bottom-4 text-xs text-muted-foreground">
        Built with ❤️ by a-irch
      </footer>
    </main>
  );
}
