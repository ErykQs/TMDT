export default function ProductCard({ name, image, price, oldPrice, discount, note }) {
  return (
    <div className="bg-[#444] rounded-3xl p-6 flex flex-col items-center gap-2 shadow-lg min-w-[260px]">
      <img src={image} alt={name} className="w-48 h-48 object-cover mb-2 rounded-2xl" />
      <h2 className="text-xl font-semibold text-white mb-2">{name}</h2>
      <div className="flex flex-col items-center mb-2">
        <span className="text-2xl font-bold text-white">{price}</span>
        <span className="text-gray-300 line-through text-lg">{oldPrice}</span>
        <span className="text-yellow-400 font-bold">{discount}</span>
      </div>
      <span className="text-orange-400 font-semibold text-base mb-2">{note}</span>
    </div>
  );
}
