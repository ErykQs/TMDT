"use client";
import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="bg-white min-h-screen flex flex-col">
        <div className="max-w-5xl w-full mx-auto pt-8">
          <nav className="mb-8 text-gray-600 text-base">
            <span className="mr-2">Trang chủ</span>
            <span className="mx-2">›</span>
            <span className="font-semibold">Đăng nhập</span>
          </nav>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src="/login-illustration.png" alt="Login Illustration" className="max-w-[400px] w-full h-auto" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-8">Đăng nhập</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-lg font-medium text-gray-700 mb-2">Tên đăng nhập:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">Mật khẩu:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
                    required
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <input id="remember" name="remember" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="remember" className="ml-2 block text-base text-gray-900">Nhớ mật khẩu</label>
                  </div>
                  <a href="#" className="text-base text-blue-600 hover:underline">Quên mật khẩu?</a>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 focus:outline-none text-lg"
                >
                  Đăng nhập
                </button>
              </form>
              <div className="mt-6 text-base">
                Bạn Chưa Có Tài Khoản? <a href="/account/register" className="text-blue-600 hover:underline font-semibold">Tạo tài khoản ngay</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
