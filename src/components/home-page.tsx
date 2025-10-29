
"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Header } from "./header";
import { AiChatWidget } from "./ai/ai-chat-widget";
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export function HomePage() {

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main>
                <section className="relative text-center py-20 md:py-32 lg:py-40 flex flex-col items-center justify-center container">
                   <div className="absolute inset-0 -z-10 overflow-hidden">
                       <Image
                         src="https://images.unsplash.com/photo-1750969185331-e03829f72c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxuZXR3b3JrJTIwYWJzdHJhY3R8ZW58MHx8fHwxNzYxNzAxOTg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                         alt="Abstract network"
                         fill
                         className="object-cover opacity-10 dark:opacity-20"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                   </div>

                    <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        From Naija to the Next Block:
                        <br />
                        <span className="text-primary">Your Web3 Future Starts Here.</span>
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                        We are unlocking Nigeria's potential in the decentralized world. Learn, build, and connect with the global Web3 ecosystem, right from your phone. No wallet, no wahala.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" className="font-semibold">
                            <Link href="/#tracks">
                                Start Your Journey
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="font-semibold">
                            <Link href="/communities">
                                Join the Community
                            </Link>
                        </Button>
                    </div>
                     <div className="absolute bottom-10 animate-bounce">
                        <ArrowDown className="h-6 w-6 text-muted-foreground" />
                    </div>
                </section>

                <section id="tracks" className="py-20 bg-secondary">
                  <div className="container text-center">
                      <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Ready to Begin?</h2>
                      <p className="max-w-2xl mx-auto text-muted-foreground mb-10">
                          These learning tracks are your first step. We'll add more soon, but for now, let's get you started with the basics.
                      </p>
                       <Button asChild size="lg">
                            <Link href="/learn/web3-basics">
                                Go to Web3 Basics Track
                            </Link>
                        </Button>
                  </div>
                </section>
            </main>
            <AiChatWidget />
        </div>
    );
}
