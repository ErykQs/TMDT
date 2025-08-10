
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white pt-8 pb-4 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Logo và giới thiệu */}
        <div className="flex flex-col items-start gap-2 md:w-1/3">
          <div className="flex items-center gap-2 mb-2">
            <Image src="/store-logo.svg" alt="Min Min Nạo Nạo E-Shop" width={40} height={40} />
            <span className="text-xl font-bold text-blue-400">Min Min Nạo Nạo E-Shop</span>
          </div>
          <p className="text-sm text-gray-300">Tại Min Min Nạo Nạo E-Shop, khách hàng yêu mến hệ sinh thái Apple sẽ tìm thấy đầy đủ và đa dạng nhất các sản phẩm như iPhone, iPad, Apple Watch, MacBook và các phụ kiện Apple... với không gian mua sắm đẳng cấp, hiện đại.</p>
          <div className="flex gap-3 mt-2">
            <a href="https://facebook.com/topzone.vn" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
            <a href="https://youtube.com/channel/UCoWdPNr8jSr7JM0OFlKvQHw" target="_blank" rel="noopener" aria-label="YouTube" className="hover:text-red-500"><i className="fab fa-youtube"></i></a>
            <a href="https://zalo.me/2040551312124557463" target="_blank" rel="noopener" aria-label="Zalo" className="hover:text-blue-400"><i className="fab fa-zalo"></i></a>
          </div>
        </div>
        {/* Liên kết nhanh */}
        <div className="flex flex-col gap-2 md:w-1/3">
          <h4 className="font-semibold mb-2 text-blue-300">Liên kết nhanh</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <a href="/iphone" className="hover:text-blue-400">iPhone</a>
            <a href="/mac" className="hover:text-blue-400">Mac</a>
            <a href="/ipad" className="hover:text-blue-400">iPad</a>
            <a href="/watch" className="hover:text-blue-400">Apple Watch</a>
            <a href="/am-thanh" className="hover:text-blue-400">Tai nghe, Loa</a>
            <a href="/phu-kien" className="hover:text-blue-400">Phụ kiện</a>
            <a href="/tekzone" className="hover:text-blue-400">TekZone</a>
            <a href="/topcare" className="hover:text-blue-400">TopCare</a>
          </div>
        </div>
        {/* Thông tin liên hệ */}
        <div className="flex flex-col gap-2 md:w-1/3">
          <h4 className="font-semibold mb-2 text-blue-300">Thông tin liên hệ</h4>
          <p className="text-sm">Hotline mua hàng: <a href="tel:1900969642" className="text-blue-400">1900.9696.42</a> (8:00 - 21:30)</p>
          <p className="text-sm">Hotline khiếu nại: <a href="tel:1900986843" className="text-blue-400">1900.9868.43</a> (8:00 - 21:30)</p>
          <p className="text-sm">Email: <a href="mailto:hotrotmdt@thegioididong.com" className="text-blue-400">hotrotmdt@thegioididong.com</a></p>
          <p className="text-sm">Địa chỉ: 128 Trần Quang Khải, P.Tân Định, TP.HCM</p>
          <div className="flex gap-2 mt-2 flex-wrap">
            <a href="/he-thong-cua-hang" className="hover:text-blue-400 text-sm">Hệ thống cửa hàng</a>
            <a href="/noi-quy-cua-hang" className="hover:text-blue-400 text-sm">Nội quy cửa hàng</a>
            <a href="/chat-luong-phuc-vu" className="hover:text-blue-400 text-sm">Chất lượng phục vụ</a>
            <a href="/bao-hanh-doi-tra" className="hover:text-blue-400 text-sm">Chính sách bảo hành & đổi trả</a>
            <a href="/dieu-kien-giao-dich" className="hover:text-blue-400 text-sm">Điều kiện giao dịch chung</a>
            <a href="/huong-dan-mua-hang" className="hover:text-blue-400 text-sm">Hướng dẫn mua hàng online</a>
            <a href="/giao-hang" className="hover:text-blue-400 text-sm">Chính sách giao hàng</a>
            <a href="/thanh-toan" className="hover:text-blue-400 text-sm">Hướng dẫn thanh toán</a>
            <a href="/chinh-sach-xu-ly-du-lieu-ca-nhan" className="hover:text-blue-400 text-sm">Chính sách xử lý dữ liệu cá nhân</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
        <span>© 2025. Công ty cổ phần Min Min Nạo Nạo. GPDKKD: 0303217354 do Sở KH&ĐT TP.HCM cấp ngày 02/01/2007.</span>
        <span>Địa chỉ: 128 Trần Quang Khải, P.Tân Định, TP.HCM. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, P.Tăng Nhơn Phú, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: hotrotmdt@thegioididong.com.</span>
        <span>DMCA.com Protection Status</span>
      </div>
      <div className="container mx-auto px-4 mt-4 flex flex-wrap gap-4 justify-center items-center text-xs text-gray-400">
        <span>Ghé thăm các website khác cùng tập đoàn MWG:</span>
        <a href="https://www.thegioididong.com/" className="hover:text-blue-400">Thế Giới Di Động</a>
        <a href="https://www.dienmayxanh.com/" className="hover:text-blue-400">Điện Máy Xanh</a>
        <a href="https://www.bachhoaxanh.com/" className="hover:text-blue-400">Bách Hóa Xanh</a>
        <a href="https://www.nhathuocankhang.com/" className="hover:text-blue-400">Nhà thuốc An Khang</a>
        <a href="https://avakids.com/" className="hover:text-blue-400">AVAKids</a>
        <a href="https://vieclam.thegioididong.com/" className="hover:text-blue-400">Tuyển dụng MWG</a>
      </div>
    </footer>
  );
}
