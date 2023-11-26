import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import videoData from './assets/Data/videos.json'
import videoDetails from './assets/Data/video-details.json'
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Comments from './components/Comments/Comments';
import Recommended from './components/Recommended/Recommended';

// make sure to remove this before handing in
// console.log("videoDetailsData: ", videoDetails);
// console.log("videoData: ", videoData );

function App() {

  const [activeVideo, setActiveVideo] = useState(videoData[0]);
  const [activeDetails, setActiveDetails] = useState({
    title: videoDetails[0].title,
    author: videoDetails[0].channel,
    date: videoDetails[0].timestamp,
    viewCount: videoDetails[0].views,
    likeCount: videoDetails[0].likes,
    description: videoDetails[0].description,
  });
  const [activeComments, setActiveComments] = useState({
    commentCount: videoDetails[0].comments.length,
    comments: videoDetails[0].comments
  })
  
  // return video data that is not the current active video data
  const [recommendedData, setRecommendedData] = useState(videoData)

  // const recommendedData = videoData.filter((video) => {
  //   return video !== activeVideo;
  // })

  const changeActiveVideo = (videoObj) => {

    console.log("the video obj data that was clicked: ", videoObj.title);
    
    setActiveVideo(videoObj);
    setActiveDetails({
      title: videoObj.title,
      author: videoObj.channel,
      date: videoObj.timestamp,
      viewCount: videoObj.views,
      likeCount: videoObj.likes,
      description: videoObj.description,
    })
    setActiveComments({
      commentCount: videoObj.comments.length,
      comments: videoObj.comments
    })

    // the active video is not being changed in time for it to accurately be logged here...
    console.log("the active video is: ", activeVideo.title);
    
  }

  useEffect(() => {
    const recommendedArray = [];
    
    videoData.forEach((video) => {
      if (video.title !== activeVideo.title) {
        recommendedArray.push(video);
      }
    })

    setRecommendedData(recommendedArray);

    console.log("the recommended array data is: ", recommendedArray);
  }, [activeVideo])

  return (
    <>

      <Header/>

      <Hero
        activeVideo={activeVideo}
      />

      <Info
        activeDetails={activeDetails}
      />

      <Comments
        activeComments={activeComments}
      />

      
      <Recommended
        recommendedData={recommendedData}
        changeActiveVideo={changeActiveVideo}
        videoDetails={videoDetails}
      />


    </>
  )
}

export default App
