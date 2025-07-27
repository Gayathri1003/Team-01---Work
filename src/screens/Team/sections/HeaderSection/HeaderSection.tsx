import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="relative w-full h-[600px] bg-transparent bg-[url(/main.png)] bg-cover bg-center overflow-hidden">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
    <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-[800px] ml-8 relative z-10">
          <h1 className="font-bold text-white-color text-4xl lg:text-6xl tracking-[0.20px] leading-[1.2] font-['Open_Sans',Helvetica] mb-12 animate-fade-in-up">
            VISHWA BHARATI SHIKSHA SADAN
          </h1>

          <Button className="bg-gradient-to-r from-[#0193dc] to-[#0183c7] hover:from-[#0183c7] hover:to-[#0173b7] text-white font-bold text-base tracking-[0.30px] h-14 w-48 mt-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-300">
            Contact us
          </Button>
        </div>
      </div>
    </header>
  );
};
