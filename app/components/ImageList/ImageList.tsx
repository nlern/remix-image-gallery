// import Masonry from "react-masonry-css";
import type { ImageType } from "~/types/image.type";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageList(props: { images: ImageType[] }) {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} img={image} />;
  });

  return <div className="image-list">{images}</div>;
}
