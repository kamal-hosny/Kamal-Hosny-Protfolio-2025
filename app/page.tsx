import Header from "@/components/common/Header/Header";
import Banner from "@/components/common/Home/Banner";
import LandingPage from "@/components/common/Home/LandingPage";
import MyAdvantages from "@/components/common/Home/MyAdvantages";
import MyProducts from "@/components/common/Home/MyProducts";
import MyTools from "@/components/common/Home/MyTools";
import ProductsHeroParallax from "@/components/common/Home/ProductsHeroParallax";
import WhatMyClientsSay from "@/components/common/Home/WhatMyClientsSay";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div />
      <Header />
      <LandingPage />
      <MyTools />
      <ProductsHeroParallax />
      <MyProducts />
      <WhatMyClientsSay />
      <MyAdvantages />
      <Banner />
    </div>
  );
}
