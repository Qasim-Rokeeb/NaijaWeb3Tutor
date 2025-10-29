
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Bot, Send } from "lucide-react";
import { Input } from "../ui/input";
import { AiChatPill, UserChatPill } from "./ai-chat-pill";
import { ScrollArea } from "../ui/scroll-area";
import { askAiBuddy, type AskAiBuddyInput } from "@/ai/flows/ai-study-buddy";
import { useToast } from "@/hooks/use-toast";

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

export function AiChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Hi there! I'm your AI study buddy. Ask me anything about Web3." }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({
                top: scrollAreaRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    };
    
    useEffect(() => {
        if (isOpen) {
           setTimeout(scrollToBottom, 100);
        }
    }, [messages, isOpen]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const aiInput: AskAiBuddyInput = { question: input };
            const response = await askAiBuddy(aiInput);
            const aiMessage: Message = { role: 'assistant', content: response.answer };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("AI Buddy Error:", error);
            const errorMessage: Message = { role: 'assistant', content: "Sorry, I'm having a little trouble right now. Please try again later." };
            setMessages(prev => [...prev, errorMessage]);
            toast({
                variant: "destructive",
                title: "AI Error",
                description: "Could not get a response from the AI study buddy.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Button
                className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 animate-in fade-in zoom-in-50 duration-500"
                onClick={() => setIsOpen(true)}
                aria-label="Open AI Study Buddy"
            >
                <Bot className="h-8 w-8" />
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent className="flex flex-col w-full sm:max-w-md">
                    <SheetHeader>
                        <SheetTitle className="font-headline text-2xl">AI Study Buddy</SheetTitle>
                        <SheetDescription>
                            Your personal Web3 tutor. Ask me anything!
                        </SheetDescription>
                    </SheetHeader>
                    <div className="flex-grow my-4 -mx-6">
                        <ScrollArea className="h-full px-6" ref={scrollAreaRef}>
                            <div className="space-y-4 pr-4">
                                {messages.map((msg, index) =>
                                    msg.role === 'assistant' ? (
                                        <AiChatPill key={index} message={msg.content} />
                                    ) : (
                                        <UserChatPill key={index} message={msg.content} />
                                    )
                                )}
                                {isLoading && <AiChatPill message="..." />}
                            </div>
                        </ScrollArea>
                    </div>
                    <SheetFooter>
                        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                            <Input
                                id="message"
                                placeholder="Type your question..."
                                className="flex-1"
                                autoComplete="off"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                disabled={isLoading}
                            />
                            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Send Message</span>
                            </Button>
                        </form>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    );
}
