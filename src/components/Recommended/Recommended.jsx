import './Recommended.scss'
import { Link, useParams } from 'react-router-dom';

const Recommended = (props) => {

    const params = useParams();

    console.log("the params from the recommended component are: ", params);

    return (

        <section className='recommended'>

            <h4 className='recommended__title'>
                NEXT VIDEOS
            </h4>

            <ul className='recommended__list'>

            {
                props.recommendedData.map((video, index) => {

                    return (

                            // originally this .recommended__item onClick={changeActiveVideo(props.videoDetails[index]} . because i wanted to use the videoData for the recommended and the videoDetails for the main hero section. I had to change it to {changeActiveVideo(video)} because there was an indexing issue whenever i would change the array order being passed to this map
                        <Link to={`/${video.id}`} key={index} className='recommended__link'>
                            
                            <li className='recommended__item' onClick={() => {props.changeActiveVideo(video)}}>

                                <img className='recommended__still' src={video.image}/>

                                <div className='recommended__info'>

                                        <p className='recommended__info-title'>
                                            {video.title}
                                        </p>

                                        <p className='recommended__info-author'>
                                            {video.channel}
                                        </p>

                                </div>
                                    
                            </li>

                        </Link>
                        )

                })
            }

            </ul>

        </section>
    )

}

export default Recommended

