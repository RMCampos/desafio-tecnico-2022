import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';

const Videos = (): JSX.Element => {
  const { text } = useParams();

  return (
    <div className="container">
      <Header />
      <p>{ text } Video list</p>
    </div>
  );
};

export default Videos;
