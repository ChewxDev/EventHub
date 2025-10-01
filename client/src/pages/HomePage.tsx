import { useLocation } from "wouter";
import Hero from "@/components/Hero";
import CityTile from "@/components/CityTile";
import EventCard from "@/components/EventCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import heroImage from "@assets/generated_images/Nigerian_festival_crowd_celebration_83da73ef.png";
import lagosImage from "@assets/generated_images/Lagos_Nigeria_cityscape_view_f7665837.png";
import abujaImage from "@assets/generated_images/Abuja_Nigeria_capital_city_e2bb640b.png";
import portHarcourtImage from "@assets/generated_images/Port_Harcourt_Nigeria_riverside_94518e0b.png";
import ibadanImage from "@assets/generated_images/Ibadan_Nigeria_historic_city_c522dbd1.png";
import enuguImage from "@assets/generated_images/Enugu_Nigeria_coal_city_3f738050.png";
import kanoImage from "@assets/generated_images/Kano_Nigeria_ancient_city_420b0237.png";
import concertImage from "@assets/generated_images/Afrobeats_concert_performance_Nigeria_92b5ec19.png";
import techImage from "@assets/generated_images/Tech_conference_event_Nigeria_e45abb36.png";
import weddingImage from "@assets/generated_images/Nigerian_wedding_expo_event_b6c455cf.png";

export default function HomePage() {
  const [, setLocation] = useLocation();

  const cities = [
    { name: "Lagos", image: lagosImage, eventCount: 24 },
    { name: "Abuja", image: abujaImage, eventCount: 18 },
    { name: "Port Harcourt", image: portHarcourtImage, eventCount: 12 },
    { name: "Ibadan", image: ibadanImage, eventCount: 8 },
    { name: "Enugu", image: enuguImage, eventCount: 10 },
    { name: "Kano", image: kanoImage, eventCount: 6 },
  ];

  const featuredEvents = [
    {
      id: "1",
      title: "Afrobeats Live Concert 2024",
      image: concertImage,
      date: "Dec 15, 2024 • 7:00 PM",
      location: "Eko Hotel, Lagos",
      price: "₦15,000",
      category: "Concert",
    },
    {
      id: "2",
      title: "Tech Innovation Summit",
      image: techImage,
      date: "Dec 20, 2024 • 9:00 AM",
      location: "Transcorp Hilton, Abuja",
      price: "₦25,000",
      category: "Tech",
    },
    {
      id: "3",
      title: "Nigerian Wedding Expo",
      image: weddingImage,
      date: "Jan 5, 2025 • 10:00 AM",
      location: "Oriental Hotel, Lagos",
      price: "₦5,000",
      category: "Wedding Expo",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        backgroundImage={heroImage}
        title="Connecting Nigeria Through Unforgettable Events"
        subtitle="Discover amazing events across Lagos, Abuja, Port Harcourt, and more"
        ctaText="Explore Events"
        onCtaClick={() => setLocation("/events")}
      />

      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl mb-4">Explore by City</h2>
          <p className="text-muted-foreground text-lg">
            Find events happening in your favorite Nigerian cities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cities.map((city) => (
            <CityTile
              key={city.name}
              name={city.name}
              image={city.image}
              eventCount={city.eventCount}
              onClick={() => setLocation("/events")}
            />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-display font-bold text-4xl mb-2">Featured Events</h2>
            <p className="text-muted-foreground">Don't miss these upcoming events</p>
          </div>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => setLocation("/events")}
            data-testid="button-view-all-events"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventCard
              key={event.id}
              {...event}
              onClick={() => setLocation(`/events/${event.id}`)}
            />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <NewsletterSignup />
      </section>
    </div>
  );
}
