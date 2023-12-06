import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import './Home.scss';
import Header from './../../components/Header/Header';
import Hero from './../../components/Hero/Hero';
import Info from './../../components/Info/Info';
import Comments from './../../components/Comments/Comments';
import Recommended from './../../components/Recommended/Recommended';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// need to use the formatTime function directly in the components that use time.
import { formatTime } from './../../utils/timeFormat';

function App() {

    const params = useParams();
    const [activeVideo, setActiveVideo] = useState({});
    const [activeDetails, setActiveDetails] = useState({});
    const [activeComments, setActiveComments] = useState({commentCount: 0,comments: []})
    const [recommendedData, setRecommendedData] = useState([]);
    // const apiKey = "7c9cdc0b-4e52-48e6-b203-e4c4bf46b882";
    // const baseURL = "https://project-2-api.herokuapp.com";
    const baseURL = "http://localhost:8080";
    

    const fetchVideos = async () => {

        try {
            // const response = await axios.get(`${baseURL}/videos?api_key=${apiKey}`);
            const response = await axios.get(`${baseURL}/videos`);
            console.log("the simple video response: ", response);
            return response;
        } catch (error) {
            console.log("the error is: ", error);
        }

    }

    const fetchVideo = async (id) => {

        try {
            // const response = await axios.get(`${baseURL}/videos/${id}?api_key=${apiKey}`);
            const response = await axios.get(`${baseURL}/videos/${id}`);
            console.log("the detailed video response: ", response);
            return response;
        } catch (error) {
            console.log("the error from the fetchVideo function: ", error);
        }

    }

    useEffect( () => {

        const initialId = '84e96018-4022-434e-80bf-000ce4cd12b8'

        const getInitialVideo = async (id) => {
            const response = await fetchVideo(id);
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

        // the below logic checks to see if a user has refreshed the page after selecting a recommended video
        // if they have, then the component remounts using the params data
        if (params.imageId) {
            getInitialVideo(params.imageId)
        } else {
            getInitialVideo(initialId);
        }

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