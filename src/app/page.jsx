import BannerSection from "@/Components/BannerSection";
import FeaturesSection from "@/Components/FeaturesSection";
import Hero from "@/Components/Hero";
import OurCourse from "@/Components/OurCourse";
import TestimonialsSection from "@/Components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <OurCourse></OurCourse>
      <FeaturesSection></FeaturesSection>
      <TestimonialsSection></TestimonialsSection>
      <BannerSection></BannerSection>
    </div>
  );
}
