import React, { useState, useEffect } from "react";

const hotNews = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    title: "Indianapolis",
    description: "When you enter into any new area of science, you almost...",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    title: "New York City",
    description: "A city that never sleeps and always shines...",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
    title: "San Francisco",
    description: "Golden Gate Bridge and ocean breeze...",
  },
];

const HotNewsCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageLoaded(false);
      setCurrentIndex((prev) => (prev + 1) % hotNews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-[8px] p-4 w-full max-w-[316px] shadow-sm border border-gray-200">
      <h2 className="text-lg font-bold text-[#111827] mb-3">Hot News</h2>

      <div className="relative w-full h-[106px] rounded-[4px] overflow-hidden">
        <img
          src={hotNews[currentIndex].image}
          alt={hotNews[currentIndex].title}
          onLoad={() => setImageLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="absolute bottom-2 left-3 right-3 flex justify-between items-end">
          <div className="text-white leading-tight max-w-[80%]">
            <h3 className="text-sm font-semibold">
              {hotNews[currentIndex].title}
            </h3>
            <p className="text-xs opacity-90 whitespace-normal break-words">
              {hotNews[currentIndex].description}
            </p>
          </div>

          <div className="flex items-center gap-1">
            {hotNews.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-4 bg-[#3B8682]" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotNewsCard;
