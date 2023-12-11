import './Recommended.scss'
import { Link } from 'react-router-dom';

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

                        <Link to={`/video/${video.id}`} key={index} className='recommended__link'>

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

