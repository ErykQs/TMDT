import Image from "next/image";

export default function StoreLogo() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/store-logo.svg" alt="Min Min Nạo Nạo E-Shop" width={48} height={48} />
      <span className="text-2xl font-bold text-blue-700">Min Min Nạo Nạo E-Shop</span>
    </div>
  );
}
