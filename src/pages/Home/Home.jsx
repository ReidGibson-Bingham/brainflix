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

function App() {

    const params = useParams();
    const [activeVideo, setActiveVideo] = useState({});
    const [activeDetails, setActiveDetails] = useState({});
    const [activeComments, setActiveComments] = useState({commentCount: 0,comments: []})
    const [recommendedData, setRecommendedData] = useState([]);
    const [initialId, setInitialId] = useState('84e96018-4022-434e-80bf-000ce4cd12b8');
    const baseURL = "http://localhost:8080";
    

    const fetchVideos = async () => {

        try {

            const response = await axios.get(`${baseURL}/videos`);
            setInitialId(response.data[0].id);
            return response;

        } catch (error) {

            console.log("the error fetching the simple video data is: ", error);

        }

    }

    const fetchVideo = async (id) => {

        try {
    
            const response = await axios.get(`${baseURL}/videos/${id}`);
            return response;

        } catch (error) {

            console.log("the error fetching the detailed video data is: ", error);

        }

    }

    useEffect( () => {

        const getInitialVideo = async (id) => {
            const response = await fetchVideo(id);
            setActiveVideo(response.data);
            setActiveDetails({
                title: response.data.title,
                author: response.data.channel,
                date: response.data.timestamp,
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
        params.imageId ? getInitialVideo(params.imageId) : getInitialVideo(initialId);

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