import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import tracksData from "@/lib/tracks.json";
import type { Track } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function AllTracksPage() {
    const tracks: Track[] = tracksData;

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container py-12">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">All Learning Tracks</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Your journey into Web3 starts here. Choose a path that interests you and start learning at your own pace.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tracks.map(track => {
                        const trackImage = PlaceHolderImages.find(img => img.id === track.imageId);
                        return (
                            <Link href={`/learn/${track.id}`} key={track.id} className="block transform hover:-translate-y-2 transition-transform duration-300">
                                <Card className="h-full flex flex-col overflow-hidden">
                                    {trackImage && (
                                         <div className="relative aspect-video">
                                            <Image 
                                                src={trackImage.imageUrl}
                                                alt={trackImage.description}
                                                fill
                                                className="object-cover"
                                                data-ai-hint={trackImage.imageHint}
                                            />
                                         </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle className="font-headline text-2xl">{track.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription>{track.description}</CardDescription>
                                    </CardContent>
                                    <CardFooter className='bg-muted/50 p-4'>
                                        <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                            <BookOpen className="h-5 w-5" />
                                            <span>Start Track</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        )
                    })}
                  </div>
            </main>
        </div>
    );
}
