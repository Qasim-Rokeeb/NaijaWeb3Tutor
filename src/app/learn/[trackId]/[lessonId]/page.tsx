
'use client';

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import lessonsData from "@/lib/lessons.json";
import tracksData from "@/lib/tracks.json";
import type { Lesson, Track } from "@/lib/types";

function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  let videoId: string | null = null;
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeRegex);
  if (match) {
    videoId = match[1];
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
}


export default function LessonPage({ params }: { params: { trackId: string; lessonId: string } }) {
    const allLessons: Lesson[] = lessonsData as Lesson[];
    const allTracks: Track[] = tracksData as Track[];

    const lesson = allLessons.find(l => l.id === params.lessonId && l.trackId === params.trackId);
    const track = allTracks.find(t => t.id === params.trackId);

    if (!lesson || !track) {
        return (
             <div className="min-h-screen bg-background">
                <Header />
                <main className="container py-8">
                     <Button asChild variant="outline" className="mb-8">
                        <Link href="/#tracks">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tracks
                        </Link>
                    </Button>
                    <div className="flex flex-col items-center justify-center text-center py-20">
                        <h1 className="font-headline text-4xl mt-4">Lesson Not Found</h1>
                        <p className="text-muted-foreground mt-2 max-w-md">
                            Sorry, we couldn't find the lesson you're looking for.
                        </p>
                    </div>
                </main>
            </div>
        );
    }
    
    const embedUrl = getYouTubeEmbedUrl(lesson.youtubeUrl);

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container py-8">
                <Button asChild variant="outline" className="mb-8">
                    <Link href={`/learn/${track.id}`}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to {track.title}
                    </Link>
                </Button>

                <div className="max-w-4xl mx-auto">
                    <div className="mb-8 text-center">
                         <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">{lesson.title}</h1>
                         <p className="mt-3 text-lg text-muted-foreground">{lesson.subtitle}</p>
                    </div>

                    {embedUrl ? (
                         <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden border shadow-lg">
                            <iframe 
                                src={embedUrl}
                                title={lesson.title} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    ): (
                        <div className="aspect-w-16 aspect-h-9 mb-8 rounded-lg overflow-hidden border bg-muted flex items-center justify-center">
                            <p className="text-muted-foreground">Video coming soon!</p>
                        </div>
                    )}
                   

                    <div className="prose dark:prose-invert max-w-none mx-auto bg-card p-6 rounded-lg border">
                        <h2 className="font-headline">Lesson Details</h2>
                         <div className="flex items-center text-md text-muted-foreground gap-6 my-4">
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-primary" />
                                <span>{lesson.duration} mins watch time</span>
                            </div>
                        </div>
                        <p>{lesson.description || "Detailed description for this lesson is coming soon. For now, please enjoy the video content!"}</p>
                    </div>

                    <div className="mt-12 text-center">
                        <Button asChild>
                            <Link href={`/learn/${track.id}`}>
                                Choose Another Lesson
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}
