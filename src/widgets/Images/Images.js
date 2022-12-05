import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fetchImages, selectLoading, selectImages } from "../../app/store/imagesSlice";
import ImageContainer from "./ImageContainer";
import ImagesContainer from "./ImagesContainer";
import { WidgetTitle, Spinner } from "../../components";
import { useFilter, useScroll } from "../../app/hooks";

const Images = () => {
  const isLoading = useSelector(selectLoading);
  const images = useSelector(selectImages);
  const imagesRef = useRef();
  const dispatch = useDispatch();
  const filteredImages = useFilter(images);
  useScroll(imagesRef, () => dispatch(fetchImages()));

  /* useEffect(() => {
    dispatch(fetchData({
      factoryName: 'image'
    }));
  }, [dispatch]); */
  return (
    <ImagesContainer>
      <WidgetTitle>Images</WidgetTitle>
      <div ref={imagesRef} className="gallery">
        {filteredImages && filteredImages.length && filteredImages.map(item => (
          <ImageContainer key={item.id}>
            <div>
              <LazyLoadImage alt={item.description} src={item.image} />
              <p>
                {item.description}
              </p>
            </div>
          </ImageContainer>
        ))}
        {isLoading && <Spinner />}
      </div>
    </ImagesContainer>
  )
}

export default Images;