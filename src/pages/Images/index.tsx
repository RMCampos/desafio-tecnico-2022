import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../../components/Gallery';
import Header from '../../components/Header';
import searchImages from '../../service/PexelsService';

const Images = (): JSX.Element => {
  // 'text' variable is from /images/:text
  const { text } = useParams();

  useEffect(() => {
    async function search() {
      const imageList = await searchImages('Pizza');
      console.log('images:', imageList);
    }
    search();
  }, [text]);

  console.log('runSearch with text', text);

  return (
    <div className="container">
      <Header />
      <Gallery />
    </div>
  );
};

export default Images;
