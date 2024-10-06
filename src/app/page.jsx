import AboutSection from "@/components/sections/AboutSection";
import CompanySection from "@/components/sections/CompanySection";
import OurObjectivesSection from "@/components/sections/OurObjectivesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { MainBannerSlider } from "@/components/slider/MainBannerSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="min-w-screen flex w-full flex-col items-center justify-center">
        <MainBannerSlider />
        <AboutSection />
        <OurObjectivesSection />
        <ServicesSection />
        <CompanySection />
      </div>
    </div>
  );
}
