import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import videoData from './assets/Data/videos.json'
import videoDetailsData from './assets/Data/video-details.json'
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Comments from './components/Comments/Comments';

console.log("videoDetailsData: ", videoDetailsData);

function App() {

  const [heroAddress, setHeroAddress] = useState(videoData[0].image);
  const [videoDetails, setVideoDetails] = useState({
    title: videoDetailsData[0].title,
    author: videoDetailsData[0].channel,
    date: videoDetailsData[0].timestamp,
    viewCount: videoDetailsData[0].views,
    likeCount: videoDetailsData[0].likes,
    description: videoDetailsData[0].description,
  });

  return (
    <>

      <Header/>

      <Hero
        heroAddress={heroAddress}
      />

      <Info
        videoDetails={videoDetails}
      />

      <Comments/>
      
    </>
  )
}

export default App
