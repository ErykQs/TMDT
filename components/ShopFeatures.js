import { FaCheckCircle, FaTruck, FaShieldAlt, FaUndo } from 'react-icons/fa';

const features = [
  {
    icon: <FaCheckCircle size={48} className="mx-auto text-white" />,
    text: ["Mẫu mã đa dạng,", "chính hãng"],
  },
  {
    icon: <FaTruck size={48} className="mx-auto text-white" />,
    text: ["Giao hàng toàn quốc"],
  },
  {
    icon: <FaShieldAlt size={48} className="mx-auto text-white" />,
    text: ["Bảo hành có cam kết", "tới 12 tháng"],
  },
  {
    icon: <FaUndo size={48} className="mx-auto text-white" />,
    text: ["Có thể đổi trả tại", "Thegioididong và DienmayXANH"],
  },
];

export default function ShopFeatures() {
  return (
    <section className="w-full bg-neutral-800 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4">
            {feature.icon}
            {feature.text.map((line, i) => (
              <div key={i} className="leading-tight text-base font-medium text-white">
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
