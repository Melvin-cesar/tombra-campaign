type PlaceholderImageProps = {
  title: string;
  label: string;
  className?: string;
};

export function PlaceholderImage({
  title,
  label,
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`river-pattern relative flex min-h-64 overflow-hidden rounded-lg shadow-soft ${className}`}
      role="img"
      aria-label={`${title}: placeholder campaign image`}
    >
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bayelsa-deep/82 to-transparent" />
      <div className="absolute left-5 top-5 rounded-full bg-white/92 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-bayelsa-deep">
        Image placeholder
      </div>
      <div className="mt-auto p-5 text-white">
        <p className="text-xl font-black">{title}</p>
        <p className="mt-1 max-w-sm text-sm leading-6 text-white/86">{label}</p>
      </div>
    </div>
  );
}
