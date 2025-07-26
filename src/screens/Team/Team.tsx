import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NewsAndAgendaSection } from "./sections/NewsAndAgendaSection";
import { PrincipalGreetingSection } from "./sections/PrincipalGreetingSection";
import { SchoolProfileSection } from "./sections/SchoolProfileSection";

export const Team = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        <MainContentSection />

        <HeaderSection />

        <PrincipalGreetingSection />

        <SchoolProfileSection />

        <NewsAndAgendaSection />

        <GallerySection />

        <FooterSection />
      </div>
    </div>
  );
};
