import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FilterSidebarProps {
  selectedCities: string[];
  selectedCategories: string[];
  onCityChange: (city: string) => void;
  onCategoryChange: (category: string) => void;
  onClearAll: () => void;
}

const cities = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Enugu", "Kano"];
const categories = ["Concert", "Tech", "Wedding Expo", "Sports", "Cultural", "Business"];

export default function FilterSidebar({
  selectedCities,
  selectedCategories,
  onCityChange,
  onCategoryChange,
  onClearAll,
}: FilterSidebarProps) {
  const hasFilters = selectedCities.length > 0 || selectedCategories.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display font-semibold text-lg">Filters</h3>
        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="gap-1"
            data-testid="button-clear-filters"
          >
            <X className="w-4 h-4" />
            Clear
          </Button>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <Label className="text-base font-semibold mb-3 block">City</Label>
          <div className="space-y-2">
            {cities.map((city) => (
              <div key={city} className="flex items-center gap-2">
                <Checkbox
                  id={`city-${city}`}
                  checked={selectedCities.includes(city)}
                  onCheckedChange={() => onCityChange(city)}
                  data-testid={`checkbox-city-${city.toLowerCase()}`}
                />
                <label
                  htmlFor={`city-${city}`}
                  className="text-sm cursor-pointer flex-1"
                >
                  {city}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <Label className="text-base font-semibold mb-3 block">Category</Label>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => onCategoryChange(category)}
                  data-testid={`checkbox-category-${category.toLowerCase()}`}
                />
                <label
                  htmlFor={`category-${category}`}
                  className="text-sm cursor-pointer flex-1"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
