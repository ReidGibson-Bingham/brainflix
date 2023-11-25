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

                    if (index > 0) {
                        return (
                            <li className='recommended__item' key={index}>

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
                    }

                })
            }

            </ul>

        </section>
    )

}

export default Recommended

