
import { Bot } from "lucide-react";

export function AiChatPill({ message }: { message: string }) {
  return (
    <div className="flex animate-in fade-in slide-in-from-left-4 duration-300 items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
        <Bot className="h-5 w-5 text-accent" />
      </div>
      <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-accent/10 px-4 py-2.5 text-sm text-foreground">
        {message}
      </div>
    </div>
  );
}

export function UserChatPill({ message }: { message: string }) {
    return (
        <div className="flex items-start justify-end gap-3 self-end">
             <div className="max-w-[80%] rounded-2xl rounded-br-none bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                {message}
            </div>
        </div>
    )
}
