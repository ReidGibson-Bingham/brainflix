import React from "react";
import './Info.scss';
import views from './../../assets/Icons/views.svg';
import likes from './../../assets/Icons/likes.svg';

const Info = (props) => {

    return (
        <section className="info">
            <h1 className="info__title">
                {props.activeDetails.title}
            </h1>

            <p className="info__divider"></p>

            <article className="info__params">

                <article className="info__params-article-one">
                    <h4 className="info__params-author">
                        By {props.activeDetails.author}
                    </h4>
                    <h4 className="info__params-date">
                        {props.activeDetails.date}
                    </h4>
                </article>
                <article className="info__params-article-two">
                    <div className="info__params-view-box">
                        <img className="info__params-view-img" src={views} alt="eye icon"/>
                        <h4 className="info__params-view-count">
                            {props.activeDetails.viewCount}
                        </h4>
                    </div>
                    <div className="info__params-like-box">
                        <img className="info__params-like-img" src={likes} alt="heart icon"/>
                        <h4 className="info__params-like-count">
                            {props.activeDetails.likeCount}
                        </h4>
                    </div>
                </article>
                
            </article>

            <p className="info__divider"></p>

            <p className="info__description">{props.activeDetails.description}</p>

        </section>
    )

}

export default Info;