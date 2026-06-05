import Image from "next/image";

type CampaignImageProps = {
  src: string;
  alt: string;
  title?: string;
  label?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function CampaignImage({
  src,
  alt,
  title,
  label,
  className = "",
  imageClassName = "",
  priority = false,
}: CampaignImageProps) {
  return (
    <figure
      className={`relative min-h-64 overflow-hidden rounded-lg bg-bayelsa-deep shadow-soft ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 520px, (min-width: 640px) 50vw, 100vw"
        className={`object-cover ${imageClassName}`}
      />
      {title || label ? (
        <>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bayelsa-deep/88 via-bayelsa-deep/42 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
            {title ? <p className="text-xl font-black">{title}</p> : null}
            {label ? (
              <p className="mt-1 max-w-sm text-sm leading-6 text-white/86">
                {label}
              </p>
            ) : null}
          </figcaption>
        </>
      ) : null}
    </figure>
  );
}
