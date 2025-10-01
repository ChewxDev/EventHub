import { useState } from "react";
import FilterSidebar from "../FilterSidebar";

export default function FilterSidebarExample() {
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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

  return (
    <div className="p-6 max-w-xs">
      <FilterSidebar
        selectedCities={selectedCities}
        selectedCategories={selectedCategories}
        onCityChange={handleCityChange}
        onCategoryChange={handleCategoryChange}
        onClearAll={() => {
          setSelectedCities([]);
          setSelectedCategories([]);
        }}
      />
    </div>
  );
}
