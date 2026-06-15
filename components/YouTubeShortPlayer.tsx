"use client";

import { useState } from "react";

type YouTubeShortPlayerProps = {
  videoId: string;
  title: string;
};

export function YouTubeShortPlayer({ videoId, title }: YouTubeShortPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFallbackPoster, setIsFallbackPoster] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`;
  const posterUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackPosterUrl = "/campaign/tombra-portrait.jpg";

  return (
    <div className="mx-auto w-full max-w-[340px]">
      <div className="rounded-[2rem] bg-bayelsa-deep p-2 shadow-soft">
        <div className="overflow-hidden rounded-[1.5rem] bg-black">
          {isLoaded ? (
            <iframe
              className="aspect-[9/16] w-full border-0"
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
              <img
                src={posterUrl}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                onError={(event) => {
                  if (isFallbackPoster) {
                    return;
                  }

                  setIsFallbackPoster(true);
                  event.currentTarget.src = fallbackPosterUrl;
                }}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-bayelsa-deep/86 via-bayelsa-deep/18 to-transparent" />
              <span className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
              <span className="relative flex w-full flex-col items-center justify-end gap-5 p-6 text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-bayelsa-gold text-bayelsa-deep shadow-soft transition group-hover:scale-105">
                  <span className="ml-1 h-0 w-0 border-y-[13px] border-l-[20px] border-y-transparent border-l-bayelsa-deep" />
                </span>
                <span className="text-2xl font-black leading-tight">
                  Watch Tombra&apos;s Message
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
