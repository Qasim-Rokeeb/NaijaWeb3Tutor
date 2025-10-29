
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TrackPage({ params }: { params: { trackId: string } }) {
    return (
        <div className="container mx-auto p-4 min-h-screen">
            <Button asChild variant="outline">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tracks
                </Link>
            </Button>
            <div className="flex flex-col items-center justify-center text-center py-20">
              <h1 className="font-headline text-4xl mt-4 capitalize">{params.trackId.replace('-', ' ')}</h1>
              <p className="text-muted-foreground mt-2 max-w-md">
                Lessons for this track are coming soon! Check back later to continue your Web3 journey.
              </p>
            </div>
        </div>
    );
}

// NOTE: In a production app, you'd likely want to generate static paths
// for each track to improve performance. For example:
//
// export async function generateStaticParams() {
//   const tracks = await import('@/../public/data/tracks.json');
//   return tracks.default.map((track) => ({
//     trackId: track.id,
//   }))
// }
