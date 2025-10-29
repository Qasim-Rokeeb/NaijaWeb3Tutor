
"use client"
import Link from "next/link";
import { Flame, Star } from "lucide-react";
import useLocalProgress from "@/hooks/use-local-progress";
import { ThemeToggle } from "./theme-toggle";
import { XpRing } from "./xp-ring";
import { Skeleton } from "./ui/skeleton";

const LEVEL_THRESHOLDS: Record<string, number> = {
  'JJC': 0,
  'Learner': 100,
  'Web3 Warrior': 500,
  'Oga-in-Chief': 1000,
};

const getNextLevelXP = (level: string) => {
    const levels = Object.keys(LEVEL_THRESHOLDS);
    const currentLevelIndex = levels.indexOf(level);
    if (currentLevelIndex < levels.length - 1) {
        return LEVEL_THRESHOLDS[levels[currentLevelIndex + 1]];
    }
    return LEVEL_THRESHOLDS[level];
};


export function Header() {
    const { progress, loading } = useLocalProgress();
    const currentLevelXP = LEVEL_THRESHOLDS[progress.level] ?? 0;
    const nextLevelXP = getNextLevelXP(progress.level);
    const xpInLevel = progress.xp - currentLevelXP;
    const xpForNextLevel = nextLevelXP - currentLevelXP;
    
    const xpProgressPercent = loading || xpForNextLevel <= 0 ? 0 : Math.min((xpInLevel / xpForNextLevel) * 100, 100);

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <Link href="/" className="flex items-center space-x-2 text-primary">
                    <h1 className="font-headline text-2xl font-bold">NaijaWeb3Tutor</h1>
                </Link>
                <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
                    {loading ? (
                        <>
                            <Skeleton className="h-8 w-24 rounded-full" />
                            <Skeleton className="h-10 w-28 rounded-lg" />
                        </>
                    ) : (
                        <>
                            <div className="flex items-center gap-1.5 rounded-full border bg-card px-2 md:px-3 py-1 text-sm font-medium">
                                <Flame className="h-5 w-5" style={{color: 'hsl(var(--gold))'}} />
                                <span className="hidden md:inline">{progress.streak} Day Streak</span>
                                <span className="md:hidden">{progress.streak}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                <XpRing progress={xpProgressPercent} size={40} strokeWidth={4} />
                                <Star className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2" fill="hsl(var(--gold))" style={{color: 'hsl(var(--gold))'}}/>
                                </div>
                                <div className="hidden sm:flex flex-col text-left">
                                    <span className="text-sm font-bold">{progress.xp} XP</span>
                                    <span className="text-xs text-muted-foreground">{progress.level}</span>
                                </div>
                            </div>
                        </>
                    )}
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
