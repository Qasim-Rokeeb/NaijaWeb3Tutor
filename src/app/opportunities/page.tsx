
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, ExternalLink } from "lucide-react";

const opportunities = [
    {
        title: "Bounties & Grants",
        description: "Earn crypto by completing tasks for Web3 projects. A great way to build your portfolio and get paid for your skills. Platforms like Gitcoin and Layer3 are popular.",
        link: "https://gitcoin.co/bounties",
    },
    {
        title: "Hackathons",
        description: "Compete in intensive, time-bound events to build innovative Web3 solutions. Win prizes, gain recognition, and connect with potential employers or co-founders.",
        link: "https://devpost.com/hackathons?themes=blockchain",
    },
    {
        title: "Web3 Job Boards",
        description: "Find full-time, part-time, and contract roles in the Web3 space. Explore opportunities from leading companies and startups in the ecosystem on sites like CryptoJobsList.",
        link: "https://cryptojobslist.com/",
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
                        <Card key={opp.title} className="flex flex-col">
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
                                        Explore <ExternalLink className="ml-2" />
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
