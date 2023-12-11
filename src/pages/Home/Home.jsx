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
    const [recommendedData, setRecommendedData] = useState([]);
    const baseURL = "http://localhost:8080";
    
    const fetchVideos = async () => {

        try {

            const response = await axios.get(`${baseURL}/videos`);
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

    const setVideoData = async (id) => {
        const response = await fetchVideo(id);
        setActiveVideo(response.data);
    }

    useEffect( () => {

        // if the imageId params exist, we set our id value to that. otherwise we set it to the initial Id. 
        const id = params.imageId || '84e96018-4022-434e-80bf-000ce4cd12b8';
        setVideoData(id);

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
                    activeVideo={activeVideo}
                />

                <Comments
                    commentData={
                        {
                            commentCount: activeVideo?.comments?.length || 0,
                            comments: activeVideo?.comments || []
                        }
                    }
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