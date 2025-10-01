import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
}

export default function Hero({
  backgroundImage,
  title,
  subtitle,
  ctaText,
  onCtaClick,
}: HeroProps) {
  return (
    <div className="relative h-[85vh] overflow-hidden">
      <img
        src={backgroundImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center text-white space-y-6 max-w-4xl">
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl" data-testid="text-hero-title">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90" data-testid="text-hero-subtitle">
            {subtitle}
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 gap-2"
            onClick={onCtaClick}
            data-testid="button-hero-cta"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
