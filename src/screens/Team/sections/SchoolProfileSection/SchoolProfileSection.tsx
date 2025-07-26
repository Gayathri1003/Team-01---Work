import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const SchoolProfileSection = (): JSX.Element => {
  // Card data for mapping
  const cards = [
    {
      id: "facilities",
      title: "Facilities",
      description:
        "This is placeholder text and does not have a meaningful translation.",
      position: "top-0 left-[663px]",
      icon: (
        <div className="relative w-[46px] h-[46px] -top-0.5 left-[-3px]">
          <img
            className="absolute w-[15px] h-4 top-[15px] left-[15px]"
            alt="Vector"
            src="/facilities.png"
          />
          <div className="absolute w-[34px] h-[34px] top-1.5 left-1.5 rounded-[17.17px] border border-solid border-[#22355d]" />
          <div className="absolute w-3 h-3 top-0 left-[17px] bg-[#f8c301] rounded-[5.81px] border-2 border-solid border-white" />
          <div className="absolute w-3 h-3 top-[9px] left-8 bg-[#f8c301] rounded-[5.81px] border-2 border-solid border-white rotate-[60deg]" />
          <div className="absolute w-3 h-3 top-[9px] left-0.5 bg-[#f8c301] rounded-[5.81px] border-2 border-solid border-white rotate-[-60deg]" />
          <div className="absolute w-3 h-3 top-[34px] left-[17px] bg-[#f8c301] rounded-[5.81px] border-2 border-solid border-white" />
          <div className="absolute w-3 h-3 top-[26px] left-0.5 bg-[#f8c301] rounded-[5.81px] border-2 border-solid border-white rotate-[60deg]" />
          <div className="absolute w-3 h-3 top-[26px] left-8 bg-[#f8c301] rounded-[5.81px] border-2 border-solid border-white rotate-[-60deg]" />
        </div>
      ),
    },
    {
      id: "location",
      title: "Location",
      description: "Lorem ipsum dolor sit amet adipcing\naqua lorem ipsum.",
      position: "top-0 left-[958px]",
      icon: (
        <img
          className="absolute w-[35px] h-[38px] top-[13px] left-3.5"
          alt="Group"
          src="/map.png"
        />
      ),
    },
    {
      id: "history",
      title: "History",
      description: "Lorem ipsum dolor sit amet adipcing\naqua lorem ipsum.",
      position: "top-[290px] left-[668px]",
      icon: (
        <img
          className="absolute w-10 h-10 top-3 left-3"
          alt="Group"
          src="/history.png"
        />
      ),
    },
    {
      id: "achievements",
      title: "Achievements",
      description: "Lorem ipsum dolor sit amet adipcing\naqua lorem ipsum.",
      position: "top-[290px] left-[958px]",
      icon: (
        <div className="relative w-[35px] h-[42px] top-[11px] left-3.5">
          <div className="relative w-[33px] h-[41px] top-px left-px">
            <img
              className="absolute w-4 h-[13px] top-7 left-[9px]"
              alt="Rectangle"
              src="/achievement.png"
            />
            <img
              className="absolute w-[33px] h-[33px] top-0 left-0"
              alt="Star"
              src="/achievement.png"
            />
            <div className="absolute w-[21px] h-[21px] top-1.5 left-1.5 rounded-[10.61px] border border-solid border-[#22355d]" />
            <img
              className="absolute w-[11px] h-2.5 top-[11px] left-[11px]"
              alt="Star"
              src="/achievement.png"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full min-h-[700px] bg-gradient-to-br from-[#f8fbfc] via-blue-50/30 to-purple-50/20 rounded-3xl p-8 lg:p-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 h-full items-center">
        {/* Left side - School Profile */}
        <div className="flex flex-col justify-center lg:col-span-1 relative z-10">
          <div className="max-w-[400px] space-y-6">
            <h2 className="[font-family:'Open_Sans',Helvetica] font-bold text-app-secondary text-4xl tracking-[0.30px] leading-[1.3] bg-gradient-to-r from-app-secondary to-blue-800 bg-clip-text text-transparent">
              School Profile
            </h2>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-medium-dark text-lg tracking-[0.30px] leading-8">
              Next to this is the profile of our school in full, starting from
              the front section to all the facilities available at our school.
              We will...
            </p>
            <Button className="mt-8 bg-gradient-to-r from-[#0193dc] to-[#0183c5] hover:from-[#0183c5] hover:to-[#0173b5] text-white font-bold rounded-full h-14 w-52 text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Read More
            </Button>
          </div>
        </div>

        {/* Separator */}
        <Separator orientation="vertical" className="mx-auto h-full hidden lg:block bg-gradient-to-b from-transparent via-blue-200 to-transparent" />

        {/* Right side - Cards Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {cards.map((card) => (
            <Card
              key={card.id}
              className="w-full max-w-[300px] h-[320px] bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl mx-auto transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group"
            >
              <CardContent className="p-8">
                <div className="relative w-full h-full pt-8">
                  {/* Icon container */}
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg relative mb-8 transition-transform duration-300 group-hover:scale-110">
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="[font-family:'Open_Sans',Helvetica] font-bold text-app-secondary text-2xl tracking-[0.30px] leading-[1.3] mb-6 bg-gradient-to-r from-app-secondary to-blue-800 bg-clip-text text-transparent">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-medium-dark text-base tracking-[0.30px] leading-7 whitespace-pre-line">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
