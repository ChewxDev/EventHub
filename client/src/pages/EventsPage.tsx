import { useState } from "react";
import { useLocation } from "wouter";
import EventCard from "@/components/EventCard";
import FilterSidebar from "@/components/FilterSidebar";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X } from "lucide-react";

import concertImage from "@assets/generated_images/Afrobeats_concert_performance_Nigeria_92b5ec19.png";
import techImage from "@assets/generated_images/Tech_conference_event_Nigeria_e45abb36.png";
import weddingImage from "@assets/generated_images/Nigerian_wedding_expo_event_b6c455cf.png";
import sportsImage from "@assets/generated_images/Nigerian_sports_stadium_event_ea4fa726.png";
import culturalImage from "@assets/generated_images/Nigerian_cultural_festival_celebration_91a186e2.png";

export default function EventsPage() {
  const [, setLocation] = useLocation();
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const allEvents = [
    {
      id: "1",
      title: "Afrobeats Live Concert 2024",
      image: concertImage,
      date: "Dec 15, 2024 • 7:00 PM",
      location: "Eko Hotel, Lagos",
      price: "₦15,000",
      category: "Concert",
      city: "Lagos",
    },
    {
      id: "2",
      title: "Tech Innovation Summit",
      image: techImage,
      date: "Dec 20, 2024 • 9:00 AM",
      location: "Transcorp Hilton, Abuja",
      price: "₦25,000",
      category: "Tech",
      city: "Abuja",
    },
    {
      id: "3",
      title: "Nigerian Wedding Expo",
      image: weddingImage,
      date: "Jan 5, 2025 • 10:00 AM",
      location: "Oriental Hotel, Lagos",
      price: "₦5,000",
      category: "Wedding Expo",
      city: "Lagos",
    },
    {
      id: "4",
      title: "Nigeria vs Ghana Football Match",
      image: sportsImage,
      date: "Dec 28, 2024 • 4:00 PM",
      location: "National Stadium, Abuja",
      price: "₦8,000",
      category: "Sports",
      city: "Abuja",
    },
    {
      id: "5",
      title: "Calabar Cultural Festival",
      image: culturalImage,
      date: "Dec 25, 2024 • 12:00 PM",
      location: "Calabar Cultural Center",
      price: "₦3,000",
      category: "Cultural",
      city: "Port Harcourt",
    },
    {
      id: "6",
      title: "Lagos Tech Meetup",
      image: techImage,
      date: "Jan 10, 2025 • 6:00 PM",
      location: "Co-Creation Hub, Lagos",
      price: "Free",
      category: "Tech",
      city: "Lagos",
    },
  ];

  const filteredEvents = allEvents.filter((event) => {
    const cityMatch =
      selectedCities.length === 0 || selectedCities.includes(event.city);
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(event.category);
    return cityMatch && categoryMatch;
  });

  const handleCityChange = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleClearAll = () => {
    setSelectedCities([]);
    setSelectedCategories([]);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-2">
            Discover Events
          </h1>
          <p className="text-muted-foreground text-lg">
            Find amazing events across Nigeria
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar
                selectedCities={selectedCities}
                selectedCategories={selectedCategories}
                onCityChange={handleCityChange}
                onCategoryChange={handleCategoryChange}
                onClearAll={handleClearAll}
              />
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""}{" "}
                found
              </p>
              <Button
                variant="outline"
                className="lg:hidden gap-2"
                onClick={() => setMobileFiltersOpen(true)}
                data-testid="button-mobile-filters"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  {...event}
                  onClick={() => setLocation(`/events/${event.id}`)}
                />
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">
                  No events found with the selected filters
                </p>
                <Button onClick={handleClearAll}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 lg:hidden">
          <div className="fixed inset-y-0 right-0 w-80 bg-background border-l p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-semibold text-lg">Filters</h3>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <FilterSidebar
              selectedCities={selectedCities}
              selectedCategories={selectedCategories}
              onCityChange={handleCityChange}
              onCategoryChange={handleCategoryChange}
              onClearAll={handleClearAll}
            />
          </div>
        </div>
      )}
    </div>
  );
}
