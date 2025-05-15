'use client';

import Header from "@/components/common/Header/Header";
import LandingPage from "@/components/common/Home/LandingPage";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div 
        className="absolute inset-0 landingPage gradient-background"></div>
      
      {/* المحتوى */}
      <Header />
      <LandingPage />

    </div>
  );
}