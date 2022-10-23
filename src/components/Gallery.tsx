import React from 'react';
import NoImages from './NoImages';
import Image from "./Image";
import { IPhoto } from '../interfaces/Photo';
import { IVideo } from '../interfaces/Video';

interface Props {
  images?: IPhoto[],
  videos?: IVideo[]
}

const Gallery = ({ images, videos }: Props) => {
  let imageList;
  let noImages;
  // map variables to each item in fetched image array and return image component
  
  if (images && images.length > 0) {
    imageList = images.map((image) => {
      let id = image.id;
      let title = image.alt || 'No title';
      let url = image.url;
      let thumb = image.src.tiny;
      return <Image url={url} thumb={thumb} key={id} alt={title} title={title} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{imageList}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
