import Hero from "../Hero";
import heroImage from "@assets/generated_images/Nigerian_festival_crowd_celebration_83da73ef.png";

export default function HeroExample() {
  return (
    <Hero
      backgroundImage={heroImage}
      title="Connecting Nigeria Through Unforgettable Events"
      subtitle="Discover amazing events across Lagos, Abuja, Port Harcourt, and more"
      ctaText="Explore Events"
      onCtaClick={() => console.log("CTA clicked")}
    />
  );
}
