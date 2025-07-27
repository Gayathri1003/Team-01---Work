import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SchoolProfileSection = (): JSX.Element => {
  const cards = [
    {
      id: "facilities",
      title: "Facilities",
      description:
        "This is placeholder text and does not have a meaningful translation, but is presented as it appears in the image.",
      icon: <img src="/facilities.png" alt="Facilities icon" className="w-10 h-10" />,
    },
    {
      id: "location",
      title: "Location",
      description: "Lorem ipsum dolor sit amet adipcing aqua lorem ipsum.",
      icon: <img src="/map.png" alt="Location icon" className="w-10 h-10" />,
    },
    {
      id: "history",
      title: "History",
      description: "Lorem ipsum dolor sit amet adipcing aqua lorem ipsum.",
      icon: <img src="/history.png" alt="History icon" className="w-10 h-10" />,
    },
    {
      id: "achievements",
      title: "Achievements",
      description: "Lorem ipsum dolor sit amet adipcing aqua lorem ipsum.",
      icon: <img src="/achievement.png" alt="Achievements icon" className="w-10 h-10" />,
    },
  ];

  return (
    <section className="w-full bg-[#f9fbfd] py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch gap-16">
        {/* Left Column - Centered vertically */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="space-y-6 max-w-md">
            <h2 className="text-4xl font-bold text-gray-900">School Profile</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Next to this is the profile of our school in full, starting from
              the front section to all the facilities available at our school.
              We will...
            </p>
            <Button className="bg-[#0193dc] hover:bg-[#0173b4] text-white font-semibold px-6 py-3 rounded-md w-fit">
              Read More
            </Button>
          </div>
        </div>

        {/* Right Column - 2x2 Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <Card
              key={card.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="flex flex-col items-start space-y-4">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center shadow-md">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
