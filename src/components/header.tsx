
"use client"
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 text-primary">
                    <h1 className="font-headline text-2xl font-bold">NaijaWeb3Tutor</h1>
                </Link>
                <div className="hidden md:flex items-center space-x-2">
                    <Button variant="ghost" asChild>
                        <Link href="/#tracks">Get Started</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="/communities">Join Web3 Communities</Link>
                    </Button>
                    <Button variant="ghost" asChild>
                        <Link href="/opportunities">Developer Opportunities</Link>
                    </Button>
                </div>
                <div className="flex items-center justify-end space-x-2 md:space-x-4">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
