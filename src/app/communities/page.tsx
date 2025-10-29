
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ExternalLink } from "lucide-react";

const communities = [
    {
        name: "Web3Bridge",
        description: "A program focused on identifying Web3 talents in Africa, training them in a remote and collaborative environment, and creating an ecosystem of sustainable Web3 developers.",
        link: "https://web3bridge.com/",
    },
    {
        name: "Web3 Ladies",
        description: "A community for African women in Web3, providing mentorship, resources, and a supportive network to help them build successful careers in the space.",
        link: "https://www.web3ladies.com/",
    },
    {
        name: "DEVLOG",
        description: "A Nigerian community of developers, designers, and creators learning and building in Web3. They host meetups, workshops, and collaborative projects.",
        link: "https://twitter.com/devlog_/",
    },
    {
        name: "She Code Africa",
        description: "A non-profit organization focused on celebrating and empowering young girls and women in technology across Africa. They offer mentorship, resources, and training.",
        link: "https://shecodeafrica.org/",
    },
    {
        name: "Web3 Nigeria",
        description: "A community dedicated to growing the Web3 ecosystem in Nigeria through education, meetups, and hackathons. Great for networking and finding local opportunities.",
        link: "https://twitter.com/web3nigeria",
    },
    {
        name: "ForLoop Africa",
        description: "A pan-African community of software developers and enthusiasts. While not strictly Web3, it's a massive network for any developer looking to connect and grow.",
        link: "https://forloop.africa/",
    },
];

export default function CommunitiesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="container py-12">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Join the Movement</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Connect with vibrant Web3 communities across Nigeria and Africa. Collaborate, learn, and build with fellow enthusiasts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {communities.map((community) => (
                        <Card key={community.name} className="flex flex-col transform hover:-translate-y-1 transition-transform duration-300">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <Users className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="font-headline text-2xl">{community.name}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription>{community.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full" variant="outline">
                                    <a href={community.link} target="_blank" rel="noopener noreferrer">
                                        Visit Community <ExternalLink className="ml-2 h-4 w-4" />
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
