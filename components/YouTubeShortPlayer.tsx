"use client";

import { useState } from "react";

type YouTubeShortPlayerProps = {
  videoId: string;
  title: string;
};

export function YouTubeShortPlayer({ videoId, title }: YouTubeShortPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?playsinline=1&rel=0`;

  return (
    <div className="mx-auto w-full max-w-[340px]">
      <div className="rounded-[2rem] bg-bayelsa-deep p-2 shadow-soft">
        <div className="overflow-hidden rounded-[1.5rem] bg-black">
          {isLoaded ? (
            <iframe
              className="aspect-[9/16] w-full border-0"
              src={embedUrl}
              title={title}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className="group relative flex aspect-[9/16] w-full overflow-hidden bg-bayelsa-deep text-left text-white focus:outline-none focus:ring-4 focus:ring-bayelsa-gold/40"
              onClick={() => setIsLoaded(true)}
              aria-label={`Load video: ${title}`}
            >
              <span className="absolute inset-0 bg-[linear-gradient(160deg,rgba(7,59,42,0.98),rgba(15,107,63,0.9)_52%,rgba(31,122,140,0.82))]" />
              <span className="absolute inset-0 bg-[repeating-linear-gradient(125deg,rgba(255,255,255,0.12)_0_1px,transparent_1px_22px)] opacity-70" />
              <span className="relative flex w-full flex-col justify-between p-6">
                <span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-bayelsa-gold">
                    Candidate video
                  </span>
                  <span className="mt-3 block text-3xl font-black leading-tight">
                    Watch Tombra&apos;s Message
                  </span>
                </span>
                <span className="flex items-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-bayelsa-gold text-bayelsa-deep shadow-sm transition group-hover:scale-105">
                    <span className="ml-1 h-0 w-0 border-y-[11px] border-l-[17px] border-y-transparent border-l-bayelsa-deep" />
                  </span>
                  <span className="text-sm font-bold leading-5 text-white/90">
                    Tap to load the YouTube player
                  </span>
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
