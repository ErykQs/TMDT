"use client";
import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";

export default function RegisterPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Đăng ký</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="referral" className="block text-sm font-medium text-gray-700">Mã giới thiệu</label>
              <input type="text" id="referral" name="referral" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Tên</label>
                <input type="text" id="firstName" name="firstName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Họ</label>
                <input type="text" id="lastName" name="lastName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Giới tính</label>
                <select id="gender" name="gender" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Chọn giới tính</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Ngày sinh</label>
                <input type="date" id="dob" name="dob" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Điện thoại</label>
              <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" id="username" name="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
              <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required minLength={8} />
              <span className="text-xs text-gray-500">Mật khẩu phải có tối thiểu 8 ký tự bao gồm chữ, số và các ký tự đặc biệt</span>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
              <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="terms" name="terms" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" required />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">Tôi đồng ý với các <a href="/chinh-sach-bao-mat" className="text-blue-600 hover:underline" target="_blank">điều khoản bảo mật & sử dụng thông tin cá nhân</a> của ShopDunk</label>
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none">Đăng ký</button>
          </form>
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600">Bạn Đã Có Tài Khoản?</span>
            <a href="/account/login" className="ml-2 text-sm text-blue-600 hover:underline">Đăng Nhập Ngay</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
