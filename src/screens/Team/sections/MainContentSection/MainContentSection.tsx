import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const MainContentSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Home", isActive: true },
    { label: "About", isActive: false },
    { label: "Student", isActive: false },
    { label: "Registration", isActive: false },
    { label: "Contact Us", isActive: false },
  ];

  return (
    <header className="w-full h-[88px] flex items-center justify-between px-8 lg:px-[151px] bg-gradient-to-r from-app-secondary via-app-secondary to-slate-800 shadow-lg backdrop-blur-sm">
      {/* Logo */}
      <img
        className="w-[59px] h-[53px] object-cover transition-transform duration-300 hover:scale-110"
        alt="Logo"
        src="/school.png"
      />

      {/* Navigation Menu */}
      <NavigationMenu className="max-w-none hidden md:block">
        <NavigationMenuList className="flex items-center gap-12">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                className={`relative w-fit [font-family:'Open_Sans',Helvetica] text-base tracking-[0.20px] leading-[20px] whitespace-nowrap px-4 py-2 rounded-lg transition-all duration-300 ${
                  item.isActive
                    ? "font-bold text-white bg-white/10 backdrop-blur-sm after:absolute after:w-4 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-blue-600 after:rounded after:bottom-[-12px] after:left-1/2 after:transform after:-translate-x-1/2"
                    : "font-normal text-[#cecdcd] hover:text-white hover:bg-white/5"
                }`}
                href="#"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white p-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
};
