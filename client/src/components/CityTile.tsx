import { MapPin } from "lucide-react";

interface CityTileProps {
  name: string;
  image: string;
  eventCount?: number;
  onClick?: () => void;
}

export default function CityTile({ name, image, eventCount, onClick }: CityTileProps) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] hover-elevate active-elevate-2 transition-transform hover:scale-[1.02]"
      data-testid={`city-tile-${name.toLowerCase()}`}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <div className="flex items-center gap-2 text-white">
          <MapPin className="w-5 h-5" />
          <h3 className="font-display font-bold text-xl">{name}</h3>
        </div>
        {eventCount !== undefined && (
          <p className="text-white/90 text-sm mt-1">{eventCount} events</p>
        )}
      </div>
    </button>
  );
}
