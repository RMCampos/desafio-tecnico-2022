import React, { createContext, useState } from "react";
import { IPhoto, PhotoContextType } from "../interfaces/Photo";
import { IVideo } from "../interfaces/Video";

export const PhotoContext = createContext<PhotoContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }: Props) => {
  const [images, setImages] = useState<IPhoto[]>([]);
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const runSearch = (query: string | undefined): void => {
    if (query) {
      setLoading(true);

      const BASE_URL = 'https://api.pexels.com/v1/search';
      const orientation = 'landscape'; // [landscape, portrait, square]
      const page = 1;
      const perPage = 18;
      const finalUrl = BASE_URL
        + `?query=${query}`
        + `&page=${page}`
        + `&orientation=${orientation}`
        + `&per_page=${perPage}`;

      const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

      const options: RequestInit = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        headers: new Headers(
          {'Authorization': `${API_KEY}`}
        )
      };

      fetch(finalUrl, options)
        .then((response) => response.json())
        .then((data) => {
          setImages(data.photos);
          setLoading(false);
        })
        .catch((error) => {
          console.log(
            "Encountered an error with fetching and parsing data",
            error
          );
        });
    }
  };

  return (
    <PhotoContext.Provider value={{ images, videos, loading, runSearch }}>
      { children }
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;
