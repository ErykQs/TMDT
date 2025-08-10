const categories = [
  {
    name: "iPhone",
    image: "/iPhone.png",
  },
  {
    name: "Mac",
    image: "/Mac.png",
  },
  {
    name: "iPad",
    image: "/iPad.png",
  },
  {
    name: "Watch",
    image: "/Watch.png",
  },
  {
    name: "Tai nghe, loa",
    image: "/TaiNghe_Loa.png",
  },
  {
    name: "Phụ kiện",
    image: "/PhuKien.png",
  },
];

export default function CategoryMenu() {
  return (
    <div className="w-full flex justify-center gap-8 py-8">
      {categories.map((cat, idx) => (
        <div key={idx} className="bg-[#444] rounded-3xl flex flex-col items-center px-8 py-6 min-w-[180px] shadow-lg">
          <img src={cat.image} alt={cat.name} className="w-32 h-32 object-contain mb-4" />
          <span className="text-white text-xl font-semibold text-center">{cat.name}</span>
        </div>
      ))}
    </div>
  );
}
