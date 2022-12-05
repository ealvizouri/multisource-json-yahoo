import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageContainer from "./ImageContainer";

const Image = ({ src, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <ImageContainer>
      <div>
        <LazyLoadImage
          alt={description}
          src={src}
          afterLoad={() => setShowDescription(true)}
        />
        {showDescription && <p className="description">{description}</p>}
      </div>
    </ImageContainer>
  );
}

export default Image;