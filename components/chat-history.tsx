"use client";

import { useGetChat } from "@/lib/queries";
import { speakText } from "@/lib/tts";
import { cn } from "@/lib/utils";
import { Volume2 } from "lucide-react";

export function ChatHistory({ id }: { id: string }) {
  const history = useGetChat(id);

  if (history.isPending)
    return (
      <div className="flex items-center justify-center min-h-64">
        Loading...
      </div>
    );

  if (history.isError)
    return (
      <div className="flex items-center justify-center min-h-64">
        An error occured.
      </div>
    );

  const handleTTL = (content: string) => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    } else {
      speakText(content);
    }
  };

  return (
    <div className="p-6 flex flex-col gap-y-9 max-h-[600px] pt-12 overflow-y-auto">
      {history.data?.messages?.map(
        (his: { content: string; isFromUser: boolean }, index: number) => (
          <div
            key={index}
            className={cn(
              "bg-primary text-start relative text-white pr-12 pl-3 py-4  rounded-md w-fit",
              {
                "bg-white text-black ml-auto": his.isFromUser,
              }
            )}
          >
            <div
              className={cn("absolute text-black -top-7 left-0", {
                "left-auto right-0": his.isFromUser,
              })}
            >
              {his.isFromUser ? "You" : "Chef"}
            </div>

            <button
              onClick={() => handleTTL(his.content)}
              aria-label="Play message"
              className={cn("absolute -top-7 left-12", {
                "right-10 left-auto": his.isFromUser,
              })}
            >
              <Volume2 color="black" />
            </button>

            {his.content}
          </div>
        )
      )}
    </div>
  );
}
