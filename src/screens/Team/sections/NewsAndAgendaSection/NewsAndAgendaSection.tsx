import { SearchIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const NewsAndAgendaSection = (): JSX.Element => {
  // News data for the left column
  const newsItems = [
    {
      id: 1,
      image: "/news1.jpeg",
      title: "Learning at Home",
      description:
        "Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.",
      date: "20 July",
    },
    {
      id: 2,
      image: "/news2.jpeg",
      title: "Teaching and Learning Activities at Home",
      description:
        "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem ipsum.",
      date: "20 July",
    },
    {
      id: 3,
      image: "/news3.jpeg",
      title: "Teaching and Learning Activities at Home",
      description:
        "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem ipsum.",
      date: "20 July",
    },
    {
      id: 4,
      image: "/news4.jpeg",
      title: "Online Learning Activities",
      description:
        "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem ipsum.",
      date: "20 July",
    },
  ];

  // Agenda data for the right column
  const agendaItems = [
    {
      id: 1,
      icon: "/school.png",
      title: "Child-Friendly School Declaration",
      date: "01 - 06 - 2021",
    },
    {
      id: 2,
      icon: "/school.png",
      title: "Diploma Distribution / Certificate Awarding",
      date: "01 - 06 - 2021",
    },
    {
      id: 3,
      icon: "/admission.png",
      title: "New Student Admission",
      date: "01 - 06 - 2021",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-4 bg-gradient-to-b from-white to-slate-50/50">
      <div className="flex flex-col gap-12">
        {/* Header with title and search */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <h2 className="font-bold [font-family:'Open_Sans',Helvetica] text-app-secondary text-4xl tracking-[0.30px] leading-[1.3] bg-gradient-to-r from-app-secondary to-blue-800 bg-clip-text text-transparent">
            News and Agenda
          </h2>

          <div className="relative lg:ml-auto w-full lg:w-[400px]">
            <Input
              className="h-16 bg-white/80 backdrop-blur-sm border-2 border-blue-100 focus:border-blue-300 pl-14 text-[#919fae] [font-family:'Open_Sans',Helvetica] text-base rounded-2xl shadow-lg focus:shadow-xl transition-all duration-300"
              placeholder="Search"
            />
            <SearchIcon className="absolute w-6 h-6 top-5 left-6 text-blue-400" />
          </div>
        </div>

        {/* Main content with two columns */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column - News */}
          <div className="flex-1 flex flex-col gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="border-none shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] group">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      className="w-full md:w-[220px] h-[180px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                      alt={item.title}
                      src={item.image}
                    />
                    <div className="flex flex-col justify-between flex-1 space-y-4">
                      <div>
                        <h3 className="[font-family:'Open_Sans',Helvetica] font-bold text-app-secondary text-xl tracking-[0.30px] leading-[1.3] mb-4 bg-gradient-to-r from-app-secondary to-blue-800 bg-clip-text text-transparent">
                          {item.title}
                        </h3>
                        <p className="[font-family:'Open_Sans',Helvetica] font-normal text-medium-dark text-base tracking-[0.30px] leading-7">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-blue-600 text-base tracking-[0.30px] leading-6 bg-blue-50 px-3 py-1 rounded-full">
                          {item.date}
                        </span>
                        <div className="w-8 h-8 rotate-45 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                          <div className="relative w-8 h-8 -top-1 -left-1">
                            <img
                              className="absolute w-4 h-4 top-2 left-2 -rotate-45 filter brightness-0 invert"
                              alt="Vector"
                              src="/next.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Separator */}
          <Separator orientation="vertical" className="h-auto hidden lg:block bg-gradient-to-b from-transparent via-blue-200 to-transparent" />

          {/* Right column - Agenda */}
          <div className="w-full lg:w-[400px] flex flex-col gap-8">
            {agendaItems.map((item) => (
              <Card key={item.id} className="border-none shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group">
                <CardContent className="p-0">
                  <div className="flex items-start gap-6">
                    <img
                      className="w-16 h-16 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                      alt={item.title}
                      src={item.icon}
                    />
                    <div className="flex-1 space-y-2">
                      <div className="[font-family:'Open_Sans',Helvetica] font-semibold text-blue-600 text-sm tracking-[0.30px] leading-6 mb-3 bg-blue-50 px-3 py-1 rounded-full inline-block">
                        {item.date}
                      </div>
                      <h3 className="[font-family:'Open_Sans',Helvetica] font-bold text-app-secondary text-lg tracking-[0.30px] leading-[1.3] bg-gradient-to-r from-app-secondary to-blue-800 bg-clip-text text-transparent">
                        {item.title}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rotate-45 mt-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <div className="relative w-8 h-8 -top-1 -left-1">
                        <img
                          className="absolute w-4 h-4 top-2 left-2 -rotate-45 filter brightness-0 invert"
                          alt="Vector"
                          src="/next.png"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
