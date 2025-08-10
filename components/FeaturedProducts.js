import ProductCard from "./ProductCard/ProductCard";

const featuredProducts = {
  "Phụ kiện": [
    {
      name: "Củ sạc USB-C 20W Apple",
      image: "/PhuKien.png",
      price: "490.000₫",
      oldPrice: "590.000₫",
      discount: "-17%",
      note: "Online giá rẻ quá",
    },
    {
      name: "Cáp USB-C to Lightning Apple",
  image: "/PhuKien.png",
      price: "390.000₫",
      oldPrice: "490.000₫",
      discount: "-20%",
      note: "Online giá rẻ quá",
    },
    {
      name: "Ốp lưng iPhone 16 Pro Max",
  image: "/PhuKien.png",
      price: "290.000₫",
      oldPrice: "390.000₫",
      discount: "-26%",
      note: "Online giá rẻ quá",
    },
    {
      name: "Miếng dán màn hình iPad Air M3",
  image: "/PhuKien.png",
      price: "150.000₫",
      oldPrice: "200.000₫",
      discount: "-25%",
      note: "Online giá rẻ quá",
    },
  ],
  Watch: [
    {
      name: "Apple Watch Series 10 42mm viền nhôm dây thể thao",
      image: "/Watch.png",
      price: "10.590.000₫",
      oldPrice: "12.790.000₫",
      discount: "-17%",
      note: "Online giá rẻ quá",
    },
    {
      name: "Apple Watch SE 2 GPS 40mm viền nhôm dây vải",
  image: "/Watch.png",
      price: "5.690.000₫",
      oldPrice: "6.990.000₫",
      discount: "-19%",
      note: "Online giá rẻ quá",
    },
    {
      name: "Apple Watch Series 10 GPS + Cellular 42mm viền nhôm dây vải",
  image: "/Watch.png",
      price: "12.790.000₫",
      oldPrice: "14.990.000₫",
      discount: "-15%",
      note: "Online giá rẻ quá",
    },
    {
      name: "Apple Watch SE 2 GPS + Cellular 40mm viền nhôm dây vải",
  image: "/Watch.png",
      price: "6.990.000₫",
      oldPrice: "7.990.000₫",
      discount: "-13%",
      note: "Online giá rẻ quá",
    },
  ],
  "Tai nghe, Loa": [
    {
      name: "EarPods jack cắm USB-C",
      image: "/TaiNghe_Loa.png",
      price: "540.000₫",
      oldPrice: "",
      discount: "",
      note: "",
    },
    {
      name: "AirPods 4",
  image: "/TaiNghe_Loa.png",
      price: "3.190.000₫",
      oldPrice: "3.390.000₫",
      discount: "-5%",
      note: "Online giá rẻ quá",
    },
    {
      name: "AirPods Pro (2nd Gen) USB-C",
  image: "/TaiNghe_Loa.png",
      price: "5.590.000₫",
      oldPrice: "6.090.000₫",
      discount: "-8%",
      note: "Online giá rẻ quá",
    },
    {
      name: "Loa Bluetooth JBL Charge 5",
  image: "/TaiNghe_Loa.png",
      price: "3.290.000₫",
      oldPrice: "3.890.000₫",
      discount: "-15%",
      note: "Online giá rẻ quá",
    },
  ],
  iPhone: [
    {
      name: "iPhone 16 Pro Max 256GB",
      image: "/iPhone.png",
      price: "29.990.000₫",
      oldPrice: "34.290.000₫",
      discount: "-12%",
      note: "Online giá rẻ quá",
    },
    {
      name: "iPhone 16 Pro 128GB",
      image: "/iPhone.png",
      price: "25.090.000₫",
      oldPrice: "28.390.000₫",
      discount: "-11%",
      note: "Online giá rẻ quá",
    },
    {
      name: "iPhone 16 Plus 128GB",
      image: "/iPhone.png",
      price: "22.090.000₫",
      oldPrice: "25.490.000₫",
      discount: "-13%",
      note: "Online giá rẻ quá",
    },
    {
      name: "iPhone 16 128GB",
      image: "/iPhone.png",
      price: "18.890.000₫",
      oldPrice: "22.490.000₫",
      discount: "-16%",
      note: "Online giá rẻ quá",
    },
  ],
  iPad: [
    {
      name: "iPad Pro M2 12.9",
      image: "/iPad.png",
      price: "28.990.000₫",
      oldPrice: "32.990.000₫",
      discount: "-12%",
      note: "Online giá rẻ quá",
    },
    {
      name: "iPad Air 5 64GB",
  image: "/iPad.png",
      price: "14.990.000₫",
      oldPrice: "17.990.000₫",
      discount: "-17%",
      note: "Online giá rẻ quá",
    },
    {
        name: "iPad A16 WiFi 128GB",
  image: "/iPad.png",
        price: "9.790.000₫",
        oldPrice: "10.590.000₫",
        discount: "-8%",
        note: "Online giá rẻ quá",
      },
      {
        name: "iPad Air M3 11 inch WiFi 128GB",
  image: "/iPad.png",
        price: "16.190.000₫",
        oldPrice: "17.590.000₫",
        discount: "-8%",
        note: "Online giá rẻ quá",
      },
  ],
  Mac: [
    {
      name: "MacBook Pro M3 14",
      image: "/Mac.png",
      price: "39.990.000₫",
      oldPrice: "44.990.000₫",
      discount: "-11%",
      note: "Online giá rẻ quá",
    },
    {
      name: "MacBook Air M2 13",
  image: "/Mac.png",
      price: "24.990.000₫",
      oldPrice: "27.990.000₫",
      discount: "-11%",
      note: "Online giá rẻ quá",
    },
    {
      name: "MacBook Air M2 13",
  image: "/Mac.png",
      price: "24.990.000₫",
      oldPrice: "27.990.000₫",
      discount: "-11%",
      note: "Online giá rẻ quá",
    },
    {
      name: "MacBook Air M2 13",
  image: "/Mac.png",
      price: "24.990.000₫",
      oldPrice: "27.990.000₫",
      discount: "-11%",
      note: "Online giá rẻ quá",
    },
  ],
};

export default function FeaturedProducts() {
  return (
  <div className="w-full py-12 flex flex-col gap-24 items-center">
  {['iPhone', 'Mac', 'iPad', 'Watch', 'Tai nghe, Loa', 'Phụ kiện'].map((category) => (
        featuredProducts[category] && (
          <section key={category} className="w-full max-w-6xl mx-auto">
            <div className="mb-10 flex flex-col items-center">
              <h2 className="text-5xl font-bold text-white mb-2"> {category}</h2>
            </div>
            <div className="w-full flex flex-row gap-8 justify-center">
              {featuredProducts[category].slice(0, 4).map((product, idx) => (
                <ProductCard key={idx} {...product} />
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition">Xem tất cả {category}</button>
            </div>
          </section>
        )
      ))}
    </div>
  );
}
