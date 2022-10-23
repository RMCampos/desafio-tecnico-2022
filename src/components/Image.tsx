import React from "react";

interface Props {
  url: string,
  thumb: string,
  title: string,
  key?: number,
  alt: string
}

const Image = ({ url, thumb, title }: Props) => (
  <li>
    <a href={url} title={title}>
      <img src={thumb} alt={title} />
    </a>
  </li>
);

export default Image;
