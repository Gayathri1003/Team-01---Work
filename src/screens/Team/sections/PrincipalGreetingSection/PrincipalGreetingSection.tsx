import React from "react";
import { Button } from "../../../../components/ui/button";

export const PrincipalGreetingSection = (): JSX.Element => {
  return (
    <section
      className="w-full py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50/30"
      aria-label="Principal Greeting Section"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Video Box */}
        <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-2xl p-2">
          <video
            className="w-full h-auto rounded-xl object-cover"
            controls
            aria-label="Principal's greeting video"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Greetings from the Principal of{" "}
            <span className="text-[#003366]">VISHWA BHARATI SHIKSHA SADAN</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            "At Vishwa Bharati Shiksha Sadan, we believe that education is not
            just about books, but about building character, values, and vision.
            We are committed to nurturing young minds into responsible,
            compassionate, and capable individuals who can shape a better
            tomorrow."
          </p>

          <footer className="text-base font-semibold text-[#003366]">
            — Principal, Vishwa Bharati Shiksha Sadan
          </footer>

          <Button
            className="w-40 h-12 bg-[#0193dc] hover:bg-[#0173b4] text-white text-lg font-semibold rounded-md"
            aria-label="Learn more about the school"
          >
            Further More
          </Button>
        </div>
      </div>
    </section>
  );
};
