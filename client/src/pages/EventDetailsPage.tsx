import { useState } from "react";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PaymentModal from "@/components/PaymentModal";
import { Calendar, MapPin, Share2, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import concertImage from "@assets/generated_images/Afrobeats_concert_performance_Nigeria_92b5ec19.png";

export default function EventDetailsPage() {
  const [, params] = useRoute("/events/:id");
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const { toast } = useToast();

  const event = {
    id: params?.id || "1",
    title: "Afrobeats Live Concert 2024",
    image: concertImage,
    date: "December 15, 2024",
    time: "7:00 PM",
    location: "Eko Hotel & Suites, Victoria Island, Lagos",
    price: "₦15,000",
    category: "Concert",
    description:
      "Get ready for the biggest Afrobeats concert of the year! Experience electrifying performances from Nigeria's top artists. This is more than a concert - it's a celebration of African music and culture. Don't miss this unforgettable night of music, dance, and entertainment.",
    organizer: "EventHub Nigeria",
    capacity: "5000 attendees",
  };

  const handleShare = () => {
    toast({
      title: "Link Copied!",
      description: "Event link copied to clipboard",
    });
    console.log("Share event:", event.id);
  };

  const handleAddToCalendar = () => {
    toast({
      title: "Added to Calendar",
      description: "Event has been added to your calendar",
    });
    console.log("Add to calendar:", event.id);
  };

  return (
    <div className="min-h-screen pb-12">
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <Badge className="mb-4">{event.category}</Badge>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-2">
              {event.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">
                About This Event
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">
                Event Details
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">{event.date}</p>
                    <p className="text-sm text-muted-foreground">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">{event.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Location</h2>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7201234567890!2d3.4207891!3d6.4281395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMyJOIDPCsDI1JzE0LjgiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Event location"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card border border-card-border rounded-2xl p-6 sticky top-24">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Ticket Price</p>
                <p className="font-display font-bold text-3xl text-primary">
                  {event.price}
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => setPaymentModalOpen(true)}
                  data-testid="button-reserve-ticket"
                >
                  Reserve Ticket
                </Button>
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  onClick={handleShare}
                  data-testid="button-share"
                >
                  <Share2 className="w-4 h-4" />
                  Share with Friends
                </Button>
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  onClick={handleAddToCalendar}
                  data-testid="button-add-calendar"
                >
                  <Download className="w-4 h-4" />
                  Add to Calendar
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t text-sm text-muted-foreground">
                <p className="mb-2">
                  <span className="font-medium">Organizer:</span> {event.organizer}
                </p>
                <p>
                  <span className="font-medium">Capacity:</span> {event.capacity}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        eventTitle={event.title}
        ticketPrice={event.price}
      />
    </div>
  );
}
