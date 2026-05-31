export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center py-32 bg-cornsilk">
      <div className="flex flex-col items-center gap-6">
        {/* Animated dots */}
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-copperwood animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        <span className="font-body text-xs uppercase tracking-widest text-black-forest/30">
          Loading
        </span>
      </div>
    </div>
  );
}
