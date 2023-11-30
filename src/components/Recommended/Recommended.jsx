import './Recommended.scss'
import { Link, useParams } from 'react-router-dom';

const Recommended = (props) => {

    return (

        <section className='recommended'>

            <h4 className='recommended__title'>
                NEXT VIDEOS
            </h4>

            <ul className='recommended__list'>

            {
                props.recommendedData.map((video, index) => {

                    return (

                        <Link to={`/${video.id}`} key={index} className='recommended__link'>
                            
                            {/* instead of changing the active video from the element in this component, we will change the state of the active video from the parent using api calls, useEffect, and params */}

                            <li className='recommended__item' 
                            >

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

