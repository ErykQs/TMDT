'use client';
import Header from "../components/Header/Header";
import ShopFeatures from "../components/ShopFeatures";
import Banner from "../components/Banner";
import Layout from "../components/Layout/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import CategoryMenu from "../components/CategoryMenu";
import Newsfeed from "../components/Newsfeed";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  const [headerHtml, setHeaderHtml] = useState("");
  const [footerHtml, setFooterHtml] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/header")
      .then((res) => res.text())
      .then(setHeaderHtml);
    fetch("http://localhost:4000/api/footer")
      .then((res) => res.text())
      .then(setFooterHtml);
  }, []);

  return (
    <Layout>
      {/* Banner động */}
      <Banner />
      <CategoryMenu />
      <FeaturedProducts />
      {/* Sản phẩm nổi bật dạng lưới */}
      <Newsfeed />
  {/* Shop Features section */}
  <ShopFeatures />
      {/* Footer từ backend */}
      <div dangerouslySetInnerHTML={{ __html: footerHtml }} />
    </Layout>
  );
}
