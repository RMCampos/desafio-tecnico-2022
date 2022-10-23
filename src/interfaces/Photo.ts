import { IVideo } from "./Video"

export interface IPhoto {
  id: number,
  width: number,
  height: number,
  url: string,
  photographer: string,
  photographer_url: string,
  photographer_id: number,
  avg_color: string,
  src: {
    original: string,
    large2x: string,
    large: string,
    medium: string,
    small: string,
    portrait: string,
    landscape: string,
    tiny: string,
  },
  liked: boolean,
  alt: string
}

export type PhotoContextType = {
  images: IPhoto[],
  videos: IVideo[],
  loading: boolean,
  runSearch(query: string | undefined): void,
}
