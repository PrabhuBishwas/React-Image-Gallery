import React, {useState, useEffect} from 'react';
import {Heading} from './components/Heading';
import {Loader} from './components/Loader';
import {UnsplashImage} from './components/UnsplashImage';
import './App.css';
import { SRLWrapper } from 'simple-react-lightbox';

import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

//Style 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

    const fetchImages = () => {
      const apiRoot = "https://api.unsplash.com";
      const accessKey = process.env.REACT_APP_ACCESSKEY;
  
      axios
        .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
        .then(res => setImage([...images, ...res.data]))
    }

  return (
    <div className="App">
      <Heading />
      <GlobalStyle />
      
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <SRLWrapper>
          <div className="WrapperImage">
            {images.map(image => (
              <a href={image.urls.raw}>
               <UnsplashImage url={image.urls.thumb} key={image.id} />
              </a>
            ))}
          </div>
        </SRLWrapper>
      </InfiniteScroll>
      
    </div>
  );
}

export default App;
