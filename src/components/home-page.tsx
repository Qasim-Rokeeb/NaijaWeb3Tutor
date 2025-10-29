
"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Header } from "./header";
import { AiChatWidget } from "./ai/ai-chat-widget";
import { ArrowDown, BookOpen, Layers, Lightbulb, Users } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import tracksData from '@/lib/tracks.json';
import type { Track } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export function HomePage() {
    const tracks: Track[] = tracksData;

    const faqs = [
        {
          question: "What is NaijaWeb3Tutor?",
          answer: "NaijaWeb3Tutor is a free, mobile-first learning platform designed to make Web3 education accessible to Nigerians. Our mission is to simplify complex topics like blockchain, cryptocurrency, and decentralized finance, and empower the next generation of Nigerian builders and innovators in the Web3 space."
        },
        {
          question: "Who is this platform for?",
          answer: "This platform is for any Nigerian who is curious about Web3, regardless of their background. Whether you're a student, a developer looking to switch careers, an entrepreneur, or just someone who wants to understand the future of the internet, our learning paths are designed to get you started."
        },
        {
          question: "How much does it cost?",
          answer: "It's completely free! We believe in breaking down barriers to entry. All our learning tracks, video lessons, and resources are available at no cost. Our goal is to empower you with knowledge."
        },
        {
            question: "How do the learning tracks work?",
            answer: "Our learning tracks are curated paths designed to take you from beginner to more advanced topics in a structured way. Each track consists of several lessons, complete with video tutorials that you can watch directly on our site. Just pick a track that interests you and start learning at your own pace."
        },
        {
          question: "How is this different from other learning platforms?",
          answer: "NaijaWeb3Tutor is built with the Nigerian learner in mind. We focus on providing content that is relatable, easy to understand, and mobile-friendly. We also connect you with local communities and opportunities, helping you to not just learn, but also get involved in the African Web3 ecosystem."
        }
      ];

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
                         data-ai-hint="network abstract"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                   </div>

                    <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-500">
                        Everything you need to get started in Web3.
                        <br />
                        <span className="text-primary">Built for Nigeria.</span>
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-500 delay-200">
                        Simplifying your Web3 journey. We're on a mission to onboard the next wave of Nigerian talent into the global decentralized ecosystem. No complex jargon, just clear learning paths.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-500 delay-400">
                        <Button asChild size="lg" className="font-semibold">
                            <Link href="/#tracks">
                                Start Learning
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="font-semibold">
                            <Link href="/communities">
                                Join a Community
                            </Link>
                        </Button>
                    </div>
                     <div className="absolute bottom-10 animate-bounce">
                        <ArrowDown className="h-6 w-6 text-muted-foreground" />
                    </div>
                </section>

                <section id="about" className="py-20 lg:py-24">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="font-headline text-3xl md:text-4xl font-bold">What is NaijaWeb3Tutor?</h2>
                            <p className="max-w-3xl mx-auto text-muted-foreground mt-4">
                                We are your friendly guide to the world of Web3, tailored specifically for the Nigerian market. Our platform is designed to demystify blockchain technology and empower you with the skills to build the future of the internet.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center">
                                <div className="bg-primary/10 p-4 rounded-full mb-4">
                                    <Layers className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="font-headline text-xl font-bold mb-2">Curated Learning Tracks</h3>
                                <p className="text-muted-foreground">Follow structured paths from basics to advanced topics like DeFi and Smart Contracts, all at your own pace.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-accent/10 p-4 rounded-full mb-4">
                                    <Lightbulb className="h-8 w-8 text-accent" />
                                </div>
                                <h3 className="font-headline text-xl font-bold mb-2">Practical Knowledge</h3>
                                <p className="text-muted-foreground">Gain hands-on skills through video tutorials and real-world examples that you can apply immediately.</p>
                            </div>
                             <div className="flex flex-col items-center">
                                <div className="bg-primary/10 p-4 rounded-full mb-4">
                                    <Users className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="font-headline text-xl font-bold mb-2">Community Focused</h3>
                                <p className="text-muted-foreground">Connect with fellow learners and find opportunities within the vibrant Nigerian & African Web3 ecosystem.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="tracks" className="py-20 lg:py-24 bg-secondary">
                  <div className="container">
                      <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">Choose Your Learning Path</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                            These learning tracks are your first step into Web3. Start with the basics or dive into a specific ecosystem.
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
                  </div>
                </section>
                
                <section id="faq" className="py-20 lg:py-24">
                    <div className="container max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="font-headline text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
                            <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                                Have questions? We've got answers. Here are some common queries from our community.
                            </p>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem value={`item-${index + 1}`} key={index}>
                                    <AccordionTrigger className="font-bold text-lg text-left">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
            </main>

             <footer className="border-t bg-secondary">
                <div className="container py-8 text-center text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} NaijaWeb3Tutor. All rights reserved.</p>
                    <p className="text-sm mt-2">Empowering the next generation of Nigerian Web3 builders.</p>
                </div>
            </footer>
            
            <AiChatWidget />
        </div>
    );
}
