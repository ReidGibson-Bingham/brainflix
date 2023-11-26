import './Recommended.scss'

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

                            // I changed this from taking the props.changeActiveVideo(props.videoDetails[index] to changeActiveVideo(video)). there was an issue with indexing that i couldn't figure out so i just passed the object in instead
                            // this meant i couldn't pass the videoData. I had to instead use the videoDetails
                            <li className='recommended__item' key={index} onClick={() => {props.changeActiveVideo(video)}}>

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
                        )

                })
            }

            </ul>

        </section>
    )

}

export default Recommended

