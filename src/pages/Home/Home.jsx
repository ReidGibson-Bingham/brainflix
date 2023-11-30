import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import videoData from './../../assets/Data/videos.json'
import videoDetails from './../../assets/Data/video-details.json'
import './Home.scss';
import Header from './../../components/Header/Header';
import Hero from './../../components/Hero/Hero';
import Info from './../../components/Info/Info';
import Comments from './../../components/Comments/Comments';
import Recommended from './../../components/Recommended/Recommended';
import axios from 'axios';
import {useParams} from 'react-router-dom';

import { formatTime } from './../../utils/timeFormat';

function App() {

    const params = useParams();
    console.log("the params from the Home component: ", params);

    const [activeVideo, setActiveVideo] = useState({});
    const [activeDetails, setActiveDetails] = useState({});
    const [activeComments, setActiveComments] = useState({commentCount: 0,comments: []})
    
    const [recommendedData, setRecommendedData] = useState([]);
   

    const fetchVideos = async () => {

        const api_key = "7c9cdc0b-4e52-48e6-b203-e4c4bf46b882";
        const baseURL = "https://project-2-api.herokuapp.com";

        try {
            const response = await axios.get(`${baseURL}/videos?api_key=${api_key}`);
            console.log("multiple video response: ", response.data);
            return response;
        } catch (error) {
            console.log("the error is: ", error);
        }

    }

    const fetchVideo = async (id) => {

        const api_key = "7c9cdc0b-4e52-48e6-b203-e4c4bf46b882";
        const baseURL = "https://project-2-api.herokuapp.com";

        try {
            const response = await axios.get(`${baseURL}/videos/${id}?api_key=${api_key}`)
            console.log("singular video response: ", response);
            return response;
        } catch (error) {
            console.log("the error from the fetchVideo function: ", error);
        }

    }

    useEffect(() => {

        const processVideo = async () => {

            if (activeVideo) {
                const response = await fetchVideo(params.imageId);
                setActiveVideo(response.data);
                setActiveDetails({
                    title: response.data.title,
                    author: response.data.channel,
                    date: formatTime(response.data.timestamp, {day: 1, month: 5, year: -54}, {norseDay: false}),
                    viewCount: response.data.views,
                    likeCount: response.data.likes,
                    description: response.data.description,
                });
                setActiveComments({
                    commentCount: response.data.comments.length,
                    comments: response.data.comments
                }) 
            }
        }
        
        processVideo();

    }, [params])

    useEffect(() => {

        const processVideos = async () => {
            const response = await fetchVideos();
            const nonActiveVideos = response.data.filter((video) => {
                return video.title !== activeVideo.title;
            })
            setRecommendedData(nonActiveVideos);
        }

        processVideos();

    }, [activeVideo])



    return (
        <>

        <Header/>

        <Hero
            activeVideo={activeVideo}
        />

        <div className='desktop__switch-layout'>

            <div className='desktop__comments'>

            <Info
            activeDetails={activeDetails}
            />

            <Comments
            activeComments={activeComments}
            />

            </div>

            <aside className='desktop__side-videos'>
            
            <Recommended
                recommendedData={recommendedData}
            />

            </aside>

        </div>

        </>
    )
}

export default App