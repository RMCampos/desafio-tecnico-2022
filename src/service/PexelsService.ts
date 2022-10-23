import { IPhoto } from "../interfaces/Photo"

const searchImages = async (query: string): Promise<IPhoto[] | null> => {
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

  const response = await fetch(finalUrl, options);
  if (response.ok) {
    const data = response.json();
    return data;
  }

  return null;
};


 export default searchImages;
