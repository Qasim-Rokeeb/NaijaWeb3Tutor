
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Youtube, Clock } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import tracksData from "@/lib/tracks.json";
import lessonsData from "@/lib/lessons.json";
import type { Lesson, Track } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { use } from "react";

export default function TrackPage({ params: paramsPromise }: { params: Promise<{ trackId: string }> }) {
    const params = use(paramsPromise);
    const allTracks: Track[] = tracksData as Track[];
    const allLessons: Lesson[] = lessonsData as Lesson[];

    const track = allTracks.find(t => t.id === params.trackId);
    const lessons = allLessons.filter(l => l.trackId === params.trackId);
    const trackImage = PlaceHolderImages.find(img => img.id === track?.imageId);

    if (!track) {
        return (
            <div className="container mx-auto p-4 min-h-screen">
                 <Header />
                <Button asChild variant="outline" className="mt-8">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Link>
                </Button>
                <div className="flex flex-col items-center justify-center text-center py-20">
                    <h1 className="font-headline text-4xl mt-4">Track Not Found</h1>
                    <p className="text-muted-foreground mt-2 max-w-md">
                        Sorry, we couldn't find the learning track you're looking for.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container py-8">
                <Button asChild variant="outline" className="mb-8">
                    <Link href="/#tracks">
                        <ArrowLeft className="mr-2 h-4 w-4" /> All Tracks
                    </Link>
                </Button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    <div className="md:col-span-1">
                        <Card className="sticky top-24">
                            <CardHeader>
                                <div className="relative aspect-video rounded-t-lg overflow-hidden mb-4">
                                     {trackImage && (
                                        <Image
                                            src={trackImage.imageUrl}
                                            alt={trackImage.description}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={trackImage.imageHint}
                                        />
                                    )}
                                </div>
                                <h1 className="font-headline text-3xl font-bold">{track.title}</h1>
                                <p className="text-muted-foreground">{track.description}</p>
                            </CardHeader>
                            <CardContent>
                                {/* Progress can be added here later */}
                            </CardContent>
                        </Card>
                    </div>

                    <div className="md:col-span-2">
                        <h2 className="font-headline text-2xl font-bold mb-6">Lessons</h2>
                        <div className="space-y-4">
                            {lessons.map((lesson, index) => {
                                const lessonImage = PlaceHolderImages.find(img => img.id === lesson.imageId);
                                return (
                                    <Link key={lesson.id} href={`/learn/${track.id}/${lesson.id}`} className="block">
                                        <Card className="overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
                                            <div className="flex">
                                                <div className="relative w-32 h-full hidden sm:block">
                                                    {lessonImage && (
                                                        <Image
                                                            src={lessonImage.imageUrl}
                                                            alt={lessonImage.description}
                                                            fill
                                                            className="object-cover"
                                                            data-ai-hint={lessonImage.imageHint}
                                                        />
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <CardHeader>
                                                        <CardTitle className="text-xl">{lesson.title}</CardTitle>
                                                        <CardDescription>{lesson.subtitle}</CardDescription>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="flex items-center text-sm text-muted-foreground gap-4">
                                                            <div className="flex items-center gap-1">
                                                                <Clock className="h-4 w-4" />
                                                                <span>{lesson.duration} mins</span>
                                                            </div>
                                                            <div className="flex items-center gap-1 text-red-500">
                                                                <Youtube className="h-4 w-4" />
                                                                <span>Video Lesson</span>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                    <CardFooter className="bg-muted/50 px-6 py-3">
                                                        <Button variant="secondary">
                                                            Start Lesson
                                                        </Button>
                                                    </CardFooter>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export function generateStaticParams() {
    const tracks: Track[] = tracksData;
    return tracks.map((track) => ({
      trackId: track.id,
    }));
}
