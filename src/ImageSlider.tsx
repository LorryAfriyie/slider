import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./ImageSlider.scss";

type ImageSliderProps = {
  imageUrl: string[];
};

export function ImageSlider({ imageUrl }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrl.length - 1;
      return index - 1;
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrl.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img
        src={imageUrl[imageIndex]}
        alt={imageUrl[imageIndex]}
        className={"image-slider-img"}
      />
      <button
        onClick={showPrevImage}
        className={"image-slider-btn"}
        style={{ left: 0 }}
      >
        <ArrowBigLeft />
      </button>

      <button
        onClick={showNextImage}
        className={"image-slider-btn"}
        style={{ right: 0 }}
      >
        <ArrowBigRight />
      </button>
    </div>
  );
}
