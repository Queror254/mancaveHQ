import Image from "next/image";
import PromoSec from "@/components/PromoSection/PromoSec";
import Carousel from "@/components/PromoSection/Carousel";
import Products from "./products/page";
import ShopByCategory from "@/components/Category/ShopByCategory";
import ProductCarousel from "@/components/ProductCarousel/ProductCarousel";
import Blog from "@/components/BlogSection/Blog";

export default function Home() {
  return (
    <main className="bg-white">
      <PromoSec />
      <ShopByCategory />
      <ProductCarousel />
      <Blog />
    </main>
    
  );
}
