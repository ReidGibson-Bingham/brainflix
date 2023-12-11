import React from "react";
import './Info.scss';
import viewsImg from './../../assets/Icons/views.svg';
import likesImg from './../../assets/Icons/likes.svg';
import { formatTime } from "../../utils/timeFormat";

const Info = (props) => {

    const {title, channel, timestamp, views, likes, description} = props.activeVideo;

    return (
        <section className="info">
            <h1 className="info__title">
                {title}
            </h1>

            <p className="info__divider--mobile"></p>

            <article className="info__params">

                <article className="info__params-article-one">
                    <h4 className="info__params-author">
                        By {channel}
                    </h4>
                    <h4 className="info__params-date">
                        {formatTime(timestamp, {day: 1, month: 1, year: 1})}
                    </h4>
                </article>
                <article className="info__params-article-two">
                    <div className="info__params-view-box">
                        <img className="info__params-view-img" src={viewsImg} alt="eye icon"/>
                        <h4 className="info__params-view-count">
                            {views}
                        </h4>
                    </div>
                    <div className="info__params-like-box">
                        <img className="info__params-like-img" src={likesImg} alt="heart icon"/>
                        <h4 className="info__params-like-count">
                            {likes}
                        </h4>
                    </div>
                </article>
                
            </article>

            <p className="info__divider"></p>

            <p className="info__description">{description}</p>

        </section>
    )

}

export default Info;