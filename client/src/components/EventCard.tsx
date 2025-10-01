import { Calendar, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
  price: string;
  category: string;
  onClick?: () => void;
}

export default function EventCard({
  id,
  title,
  image,
  date,
  location,
  price,
  category,
  onClick,
}: EventCardProps) {
  return (
    <div
      className="group rounded-2xl overflow-hidden bg-card border border-card-border hover-elevate transition-transform hover:scale-[1.02]"
      data-testid={`event-card-${id}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge className="absolute top-4 left-4" data-testid={`badge-category-${id}`}>
          {category}
        </Badge>
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="font-display font-semibold text-xl line-clamp-2" data-testid={`text-title-${id}`}>
          {title}
        </h3>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span data-testid={`text-date-${id}`}>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span data-testid={`text-location-${id}`}>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            <span className="font-semibold text-foreground" data-testid={`text-price-${id}`}>
              {price}
            </span>
          </div>
        </div>
        
        <Button
          className="w-full"
          onClick={onClick}
          data-testid={`button-view-details-${id}`}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
