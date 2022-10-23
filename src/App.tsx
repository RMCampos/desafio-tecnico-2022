import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhotoProvider from './context/PhotoProvider';
import Home from './pages/Home';
import Images from './pages/Images';
import Videos from './pages/Videos';

const App = (): JSX.Element => {
  /*
  const handleSubmit = (searchInput: string): void => {
    let url = `/search/${searchInput}`;
    console.log('handleSubmit', url);
  };
  */
  
  return (
    <PhotoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/images/:text" element={<Images />}/>
          <Route path="/videos/:text" element={<Videos />}/>
        </Routes>
      </BrowserRouter>
    </PhotoProvider>
  );
}

export default App;
