
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "./header";
import { AiChatWidget } from "./ai/ai-chat-widget";
import type { Track, Lesson } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from './ui/button';
import { ArrowRight, Clock } from 'lucide-react';

interface HomePageProps {
  tracks: Track[];
  lessons: Lesson[];
}

export function HomePage({ tracks, lessons }: HomePageProps) {
    const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="container py-8">
                <section className="text-center py-12">
                    <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="text-primary">Nollywood Energy</span> Meets AI Tutor.
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Loud, optimistic, mobile-first, and proudly Nigerian. Your journey to master Web3 starts here—no wallet needed.
                    </p>
                </section>

                <section>
                    <h3 className="font-headline text-3xl font-semibold mb-6">Learning Tracks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tracks.map(track => {
                            const trackImage = findImage(track.imageId);
                            const trackLessons = lessons.filter(l => l.trackId === track.id);
                            const totalDuration = trackLessons.reduce((sum, l) => sum + l.duration, 0);

                            return (
                                <Card key={track.id} className="flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300 ease-in-out">
                                    {trackImage && (
                                        <div className="overflow-hidden">
                                            <Image
                                                src={trackImage.imageUrl}
                                                alt={trackImage.description}
                                                data-ai-hint={trackImage.imageHint}
                                                width={600}
                                                height={400}
                                                className="rounded-t-lg object-cover aspect-[3/2] transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle className="font-headline">{track.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                      <p className="text-muted-foreground text-sm mb-4">{track.description}</p>
                                        <div className="text-sm text-muted-foreground flex items-center gap-4">
                                            <span>{trackLessons.length} Lessons</span>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>~{totalDuration} min</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild className="w-full">
                                            <Link href={`/learn/${track.id}`}>
                                                Start Track <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                </section>
            </main>
            <AiChatWidget />
        </div>
    );
}
