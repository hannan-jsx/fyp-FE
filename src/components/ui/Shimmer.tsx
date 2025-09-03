interface ShimmerProps {
  height?: number | string;
  width?: number | string;
  className?: string;
}

const Shimmer: React.FC<ShimmerProps> = ({
  height = 16,
  className = "",
  width,
}) => {
  const h = typeof height === "number" ? `${height}px` : height;
  const w = typeof width === "number" ? `${width}px` : width;
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-white/20 backdrop-blur-sm  rounded-lg ${className}`}
      style={{ height: h, width: w }}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Shimmer;
