import BannerSection from "@/Components/BannerSection";
import FeaturesSection from "@/Components/FeaturesSection";
import Hero from "@/Components/Hero";
import LearningMethodology from "@/Components/LearningMethodology";
import OurCourse from "@/Components/OurCourse";
import TestimonialsSection from "@/Components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <OurCourse></OurCourse>
      <FeaturesSection></FeaturesSection>
      <LearningMethodology></LearningMethodology>
      <TestimonialsSection></TestimonialsSection>
      <BannerSection></BannerSection>
    </div>
  );
}
