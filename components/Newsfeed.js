
import Image from "next/image";

const newsList = [
  {
    image: "/1.png",
    title: "Đọc Sách Trên iPad Cực Đã: 10 Mẹo hay Biến iPad Thành Máy Đọc Sách Đỉnh Cao Với ứng dụng Sách",
    date: "28/07/2025",
  },
  {
    image: "/Mac.png",
    title: "Để Pin MacBook “Sống Lâu Hơn”: Mẹo Giữ 100% Dung Lượng Pin Hiệu Quả",
    date: "28/07/2025",
  },
  {
    image: "/iPad.png",
    title: "Mẹo iPad: Biến Freeform thành công cụ sáng tạo mạnh mẽ nhất trên iOS 18",
    date: "24/07/2025",
  },
  {
    image: "/PhuKien.png",
    title: "Top 5 Phụ Kiện Apple Đáng Mua Nhất 2025",
    date: "20/07/2025",
  },
  {
    image: "/Watch.png",
    title: "Apple Watch Series 10: Những điểm mới nổi bật",
    date: "18/07/2025",
  },
  {
    image: "/TaiNghe_Loa.png",
    title: "AirPods 4: Trải nghiệm âm thanh vượt trội",
    date: "15/07/2025",
  },
];

import { useState } from "react";

export default function Newsfeed() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(newsList.length / itemsPerPage);
  const startIdx = page * itemsPerPage;
  const currentNews = newsList.slice(startIdx, startIdx + itemsPerPage);
  const prevPage = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);
  const nextPage = () => setPage((prev) => (prev + 1) % totalPages);
  return (
  <section className="w-full bg-black py-12">
  <div className="max-w-6xl mx-auto px-4">
  <h2 className="text-4xl font-bold text-center mb-10 text-white">Newsfeed</h2>
        <div className="relative flex items-center justify-center">
          {/* Nút mũi tên trái */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10"
            aria-label="Previous"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {/* Grid tin tức */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {currentNews.map((news, idx) => (
              <div
                key={startIdx + idx}
                className="bg-neutral-900 rounded-2xl shadow p-0 flex flex-col overflow-hidden w-full max-w-[400px] h-[480px]"
              >
                <div className="w-full h-64 min-h-[256px] max-h-[256px] relative">
                  <Image src={news.image} alt={news.title} fill className="object-cover rounded-t-2xl" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl mb-4 text-white leading-snug">{news.title}</h3>
                  <span className="text-gray-400 text-base mt-auto">{news.date}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Nút mũi tên phải */}
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10"
            aria-label="Next"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <a href="/news" className="px-8 py-3 border-2 border-blue-500 text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition flex items-center gap-2">
            Xem tất cả Tin Tức
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
