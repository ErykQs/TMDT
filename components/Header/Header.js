import React from "react";
import Link from "next/link";
import { FaSearch, FaUser, FaShoppingCart, FaChevronDown, FaGlobe, FaHeart } from "react-icons/fa";
import Image from "next/image";

const menu = [
  {
    label: "iPhone",
    href: "/iphone",
    sub: [
      { label: "iPhone 14 series", href: "/iphone-14-series" },
      { label: "iPhone 13 series", href: "/iphone-13-series" },
      { label: "iPhone 12 series", href: "/iphone-12-series" },
      { label: "iPhone 11 series", href: "/iphone-11-series" },
      { label: "iPhone SE", href: "/iphone-se-series" },
    ],
  },
  {
    label: "iPad",
    href: "/ipad",
    sub: [
      { label: "iPad Air (M3)", href: "/ipad-air-m3" },
      { label: "iPad (A16)", href: "/ipad-gen-11" },
      { label: "iPad 10", href: "/ipad-10" },
      { label: "iPad mini", href: "/ipad-mini" },
      { label: "iPad 9", href: "/ipad-9" },
      { label: "iPad Pro (M1)", href: "/ipad-pro-m1" },
      { label: "Phụ Kiện iPad", href: "/phu-kien-ipad" },
    ],
  },
  {
    label: "Mac",
    href: "/mac",
    sub: [
      { label: "MacBook Pro M4", href: "/macbook-pro-m4" },
      { label: "MacBook Air", href: "/macbook-air" },
      { label: "iMac", href: "/imac" },
      { label: "Mac Mini", href: "/mac-mini" },
      { label: "MacBook Pro", href: "/macbook-pro-2" },
      { label: "Mac Pro", href: "/mac-pro" },
      { label: "Mac Studio", href: "/mac-studio" },
    ],
  },
  {
    label: "Watch",
    href: "/apple-watch",
    sub: [
      { label: "Apple Watch Ultra 2", href: "/apple-watch-ultra-2" },
      { label: "Apple Watch Series 9", href: "/apple-watch-series-9" },
      { label: "Apple Watch SE", href: "/apple-watch-se" },
      { label: "Apple Watch Series 10", href: "/apple-watch-series-10" },
      { label: "Apple Watch Series 3", href: "/apple-watch-series-3" },
    ],
  },
  { label: "Phụ kiện", href: "/phu-kien" },
  { label: "Âm thanh", href: "/am-thanh" },
  { label: "Camera", href: "/camera" },
  { label: "Gia dụng", href: "/gia-dung" },
  { label: "Máy lướt", href: "/may-cu" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Dịch vụ", href: "/dich-vu" },
];

export default function Header() {
  const [accountOpen, setAccountOpen] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);
  React.useEffect(() => {
    if (!accountOpen && !langOpen) return;
    const handleClick = (e) => {
      if (!e.target.closest('.account-dropdown')) setAccountOpen(false);
      if (!e.target.closest('.lang-dropdown')) setLangOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [accountOpen, langOpen]);

  return (
    <header className="w-full bg-black shadow border-b sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 min-w-[120px]">
          <Image src="/logo.png" alt="Logo 1" width={240} height={240} />
        </Link>
        {/* Search */}
        <form className="flex items-center bg-white rounded-2xl px-4 py-2 w-full max-w-xl mx-auto">
          <svg className="mr-2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="10" stroke="#222" strokeWidth="2.5" fill="none" />
            <line x1="22" y1="22" x2="30" y2="30" stroke="#222" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <input type="text" placeholder="Bạn tìm gì..." className="bg-transparent outline-none flex-1 px-2 text-gray-700 placeholder-gray-500 text-base" />
          {/* Ẩn nút tìm kiếm để giống UI mẫu */}
        </form>
        {/* Actions */}
        <div className="flex items-center gap-6 text-white">
          {/* ...existing code... */}
          <Link href="/wishlist" className="flex items-center gap-1 text-white hover:text-pink-300">
            <FaHeart /> Yêu thích
          </Link>
          <Link href="/cart" className="flex items-center gap-1 text-white hover:text-blue-300"><FaShoppingCart /> Giỏ hàng</Link>
          <div className="relative account-dropdown">
            <button
              className="flex items-center gap-1 text-white hover:text-blue-300 focus:outline-none"
              onClick={() => setAccountOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={accountOpen}
            >
              <FaUser /> <span>Tài khoản</span>
            </button>
            {accountOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border z-20 transition text-black">
                <Link href="/account/register" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700">Tạo tài khoản ngay</Link>
                <hr className="my-0" />
                <Link href="/account/login" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700">Đăng nhập</Link>
              </div>
            )}
          </div>
          <div className="relative lang-dropdown">
            <button
              className="flex items-center gap-2 text-white hover:text-blue-300 focus:outline-none"
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={langOpen}
            >
              <FaGlobe className="text-lg" />
              <span>Ngôn ngữ</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg border z-20 transition text-black">
                <button onClick={() => window.location.href = '/?lang=vi'} className="flex items-center gap-2 w-full px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700">
                  <Image src="/vn-flag.png" alt="Tiếng Việt" width={20} height={14} /> Tiếng Việt
                </button>
                <hr className="my-0" />
                <button onClick={() => window.location.href = '/?lang=en'} className="flex items-center gap-2 w-full px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-700">
                  <Image src="/us-flag.png" alt="English" width={20} height={14} /> English
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Menu */}
  <nav className="bg-black">
        <ul className="container mx-auto flex justify-center gap-12 py-4 px-4 text-white font-semibold text-lg">
          {menu.map((item) => (
            <li key={item.label} className="relative group">
              <Link href={item.href} className="flex items-center gap-1">
                {item.label}
                {item.sub && <FaChevronDown className="text-xs ml-1" />}
              </Link>
              {item.sub && (
                <ul className="absolute left-0 top-full bg-white text-blue-900 shadow-lg rounded-b min-w-[180px] py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition z-10">
                  {item.sub.map((sub) => (
                    <li key={sub.label}>
                      <Link href={sub.href} className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
