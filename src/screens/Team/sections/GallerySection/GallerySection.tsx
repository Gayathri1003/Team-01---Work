import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const GallerySection = (): JSX.Element => {
  // Gallery images data for easier mapping
  const galleryImages = [
    {
      id: 1,
      src: "/gallery1.jpeg",
      alt: "Gallery image 1",
    },
    {
      id: 2,
      src: "/gallery2.jpeg",
      alt: "Gallery image 2",
    },
    {
      id: 3,
      src: "/gallery3.jpeg",
      alt: "Gallery image 3",
    },
    {
      id: 4,
      src: "/gallery4.jpeg",
      alt: "Gallery image 4",
    },
    {
      id: 5,
      src: "/gallery5.jpeg",
      alt: "Gallery image 5",
    },
    {
      id: 6,
      src: "/gallery6.jpeg",
      alt: "Gallery image 6",
    },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-[#f9fbfd] via-blue-50/30 to-purple-50/20 rounded-3xl relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-green-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="font-bold text-4xl text-app-secondary tracking-[0.30px] leading-[1.3] mb-16 font-['Open_Sans',Helvetica] text-center bg-gradient-to-r from-app-secondary to-blue-800 bg-clip-text text-transparent">
          Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {galleryImages.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 rounded-2xl group bg-white/80 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden rounded-2xl">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button className="bg-gradient-to-r from-[#0193dc] to-[#0183c7] hover:from-[#0183c7] hover:to-[#0173b7] text-white font-bold font-['Open_Sans',Helvetica] px-16 py-6 h-auto text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            More
          </Button>
        </div>
      </div>
    </section>
  );
};
