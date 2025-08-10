
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
  "/7.png",
  "/8.png"
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };
  return (
  <div className="w-full h-96 bg-black flex items-center justify-center mb-8 relative overflow-hidden">
      {/* Nút mũi tên trái luôn hiển thị */}
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-20"
        aria-label="Previous"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {/* Ảnh banner với hiệu ứng fade mượt mà */}
      <div className="w-full h-full flex items-center justify-center relative">
        <Image
          src={images[current]}
          alt={`Banner ${current + 1}`}
          width={1600}
          height={600}
          className="object-cover w-full h-96 rounded-2xl"
          priority
        />
      </div>
      {/* Nút mũi tên phải luôn hiển thị */}
      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-20"
        aria-label="Next"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {/* Chấm chuyển slide */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <span key={idx} className={`w-3 h-3 rounded-full bg-white/70 border ${current === idx ? 'border-blue-500' : 'border-transparent'} transition-all`} />
        ))}
      </div>
    </div>
  );
}
