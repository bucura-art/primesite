export default function LoadingShimmer() {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .shimmer-element {
          background: linear-gradient(
            90deg,
            #f0f0f0 0%,
            #e0e0e0 50%,
            #f0f0f0 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg"
            style={{ backgroundColor: '#FFFDF9' }}
          >
            {/* Shimmer Image Placeholder */}
            <div className="relative w-full h-60 bg-gray-200">
              <div className="shimmer-element w-full h-full" />
            </div>

            {/* Shimmer Info Section */}
            <div className="p-3 flex flex-col justify-between bg-[#f8f2e8] gap-3">
              {/* Shimmer Product Name */}
              <div>
                <div className="shimmer-element h-4 w-3/4 rounded mb-2" />
                <div className="shimmer-element h-6 w-1/2 rounded" />
              </div>

              {/* Shimmer Button */}
              <div className="shimmer-element h-8 w-full rounded" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
