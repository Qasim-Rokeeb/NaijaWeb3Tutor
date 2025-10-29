
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, ExternalLink } from "lucide-react";

const opportunities = [
    {
        title: "Bounties & Grants",
        description: "Earn crypto by completing tasks for Web3 projects. A great way to build your portfolio and get paid for your skills.",
        link: "https://gitcoin.co/bounties",
        category: 'Earning'
    },
    {
        title: "Layer3",
        description: "Explore Web3 by completing interactive bounties. Discover new projects, learn key concepts, and earn rewards as you go.",
        link: "https://layer3.xyz/",
        category: 'Earning'
    },
    {
        title: "Hackathons",
        description: "Compete in intensive, time-bound events to build innovative Web3 solutions. Win prizes, gain recognition, and connect with potential co-founders.",
        link: "https://devpost.com/hackathons?themes=blockchain",
        category: 'Building'
    },
    {
        title: "ETHGlobal",
        description: "A major player in the Ethereum ecosystem, hosting large-scale hackathons and summits around the world. A must for serious builders.",
        link: "https://ethglobal.com/",
        category: 'Building'
    },
    {
        title: "Web3 Job Boards",
        description: "Find full-time, part-time, and contract roles in the Web3 space. Explore opportunities from leading companies and startups.",
        link: "https://cryptojobslist.com/",
        category: 'Careers'
    },
    {
        title: "Web3.career",
        description: "A comprehensive job board for blockchain and Web3 opportunities, from engineering to marketing.",
        link: "https://web3.career/",
        category: 'Careers'
    },
];

export default function OpportunitiesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="container py-12">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Developer Opportunities</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        The Web3 space is filled with opportunities to earn, learn, and grow as a developer. Here are some paths to explore.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {opportunities.map((opp) => (
                        <Card key={opp.title} className="flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                     <div className="bg-accent/10 p-3 rounded-full">
                                        <Briefcase className="h-6 w-6 text-accent" />
                                    </div>
                                    <CardTitle className="font-headline text-2xl">{opp.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription>{opp.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full" variant="outline">
                                    <a href={opp.link} target="_blank" rel="noopener noreferrer">
                                        Explore <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}
