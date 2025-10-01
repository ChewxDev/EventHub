import CityTile from "../CityTile";
import lagosImage from "@assets/generated_images/Lagos_Nigeria_cityscape_view_f7665837.png";

export default function CityTileExample() {
  return (
    <div className="p-6">
      <CityTile
        name="Lagos"
        image={lagosImage}
        eventCount={24}
        onClick={() => console.log("Lagos clicked")}
      />
    </div>
  );
}
