type CampaignVideoPlayerProps = {
  poster: string;
  src: string;
  title: string;
};

export function CampaignVideoPlayer({
  poster,
  src,
  title,
}: CampaignVideoPlayerProps) {
  return (
    <div className="mx-auto w-full max-w-[340px]">
      <div className="rounded-[2rem] bg-bayelsa-deep p-2 shadow-soft">
        <div className="overflow-hidden rounded-[1.5rem] bg-black">
          <video
            className="aspect-[9/16] w-full bg-black object-cover"
            controls
            playsInline
            poster={poster}
            preload="metadata"
            aria-label={title}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
