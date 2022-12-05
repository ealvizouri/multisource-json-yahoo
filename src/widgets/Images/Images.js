import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { fetchImages, selectLoading, selectImages } from "../../app/store/imagesSlice";
import ImagesContainer from "./ImagesContainer";
import Image from "./Image";
import { WidgetTitle, Spinner } from "../../components";
import { useFilter, useScroll } from "../../app/hooks";

const Images = () => {
  const isLoading = useSelector(selectLoading);
  const images = useSelector(selectImages);
  const imagesRef = useRef();
  const dispatch = useDispatch();
  const filteredImages = useFilter(images);
  /* useScroll(imagesRef, () => dispatch(fetchImages()), isLoading); */
  
  return (
    <ImagesContainer>
      <WidgetTitle>Images</WidgetTitle>
      <div ref={imagesRef} className="gallery">
        {filteredImages && filteredImages.length && filteredImages.map(item => (
          <Image
            key={item.id}
            src={item.image}
            description={item.description}
          />
        ))}
        {isLoading && <Spinner className="spinner" />}
      </div>
    </ImagesContainer>
  )
}

export default Images;