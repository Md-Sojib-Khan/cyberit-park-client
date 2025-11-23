import BannerSection from "@/Components/BannerSection";
import FeaturesSection from "@/Components/FeaturesSection";
import Hero from "@/Components/Hero";
import TestimonialsSection from "@/Components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <FeaturesSection></FeaturesSection>
      <TestimonialsSection></TestimonialsSection>
      <BannerSection></BannerSection>
    </div>
  );
}
