export default function MainMenu() {
  return (
    <nav className="flex gap-6 text-base font-medium text-gray-800 dark:text-white">
      <a href="/" className="hover:text-blue-600">Trang chủ</a>
      <a href="/products" className="hover:text-blue-600">Sản phẩm</a>
      <a href="/cart" className="hover:text-blue-600">Giỏ hàng</a>
      <a href="/account" className="hover:text-blue-600">Tài khoản</a>
      <a href="#stores" className="hover:text-blue-600">Cửa hàng</a>
      <a href="#support" className="hover:text-blue-600">Hỗ trợ</a>
    </nav>
  );
}
