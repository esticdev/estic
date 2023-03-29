import { Gallery } from "react-grid-gallery";
import { images } from "./images";

export default function PropertyGallery() {
  return (
    <div>
      <Gallery enableImageSelection={false} images={images} />
    </div>
  );
}
