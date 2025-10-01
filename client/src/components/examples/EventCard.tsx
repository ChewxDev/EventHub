import EventCard from "../EventCard";
import concertImage from "@assets/generated_images/Afrobeats_concert_performance_Nigeria_92b5ec19.png";

export default function EventCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <EventCard
        id="1"
        title="Afrobeats Live Concert 2024"
        image={concertImage}
        date="Dec 15, 2024 • 7:00 PM"
        location="Eko Hotel, Lagos"
        price="₦15,000"
        category="Concert"
        onClick={() => console.log("Event card clicked")}
      />
    </div>
  );
}
