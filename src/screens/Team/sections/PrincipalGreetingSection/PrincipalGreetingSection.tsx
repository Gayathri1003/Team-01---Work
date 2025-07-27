import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PrincipalGreetingSection = (): JSX.Element => {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center max-w-6xl">
        <div className="relative w-full lg:w-1/2 group">
          <video
            className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
            controls
          >
            <source src="/your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <img
            className="absolute w-[170px] h-[130px] bottom-0 left-6 -mb-10 transition-transform duration-300 group-hover:translate-y-2"
            alt="Group"
            src="/group-44.png"
          />
        </div>

        <Card className="w-full lg:w-1/2 border-none shadow-2xl bg-white/80 backdrop-blur-sm rounded-3xl">
          <CardContent className="p-8 lg:p-12">
            <div className="space-y-8">
              <h2 className="font-bold text-3xl lg:text-4xl text-app-secondary font-['Open_Sans',Helvetica] tracking-[0.30px] leading-[1.3] bg-gradient-to-r from-app-secondary to-blue-800 bg-clip-text text-transparent">
                Greetings from the Principal of{" "}
                VISHWA BHARATI SHIKSHA SADAN
              </h2>

              <blockquote className="text-lg text-medium-dark font-['Open_Sans',Helvetica] tracking-[0.30px] leading-8 italic relative pl-6 border-l-4 border-gradient-to-b from-blue-400 to-blue-600">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                &#34;At Vishwa Bharati Shiksha Sadan, we believe that education
                is not just about books, but about building character, values,
                and vision. We are committed to nurturing young minds into
                responsible, compassionate, and capable individuals who can
                shape a better tomorrow.&#34;
                <footer className="mt-6 text-base font-semibold not-italic text-app-secondary">
                  — Principal, Vishwa Bharati Shiksha Sadan
                </footer>
              </blockquote>

              <Button className="bg-gradient-to-r from-[#0193dc] to-[#0183c4] hover:from-[#0183c4] hover:to-[#0173b4] text-white-color font-bold text-base w-52 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Further More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
