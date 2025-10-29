"use client"
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Header() {
    const navItems = [
        { href: "/", label: "Home" },
        { href: "/learn", label: "Learning Tracks" },
        { href: "/communities", label: "Web3 Communities" },
        { href: "/opportunities", label: "Opportunities" },
    ];
    
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 text-primary">
                    <h1 className="font-headline text-2xl font-bold">NaijaWeb3Tutor</h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-2">
                    {navItems.map((item) => (
                         <Button variant="ghost" asChild key={item.href}>
                            <Link href={item.href}>{item.label}</Link>
                        </Button>
                    ))}
                </nav>

                <div className="flex items-center justify-end space-x-2">
                     {/* Mobile Nav */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <div className="flex flex-col space-y-4 mt-8">
                                    {navItems.map((item) => (
                                        <Button variant="ghost" asChild key={item.href}>
                                            <Link href={item.href} className="text-lg">{item.label}</Link>
                                        </Button>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
