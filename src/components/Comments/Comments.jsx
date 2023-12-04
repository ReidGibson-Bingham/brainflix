import React from "react";
import "./Comments.scss";
import avatarImg from "./../../assets/Images/Mohan-muruge.jpg"
import { formatTime } from "./../../utils/timeFormat.js";

const Comments = (props) => {

    return (

        <section className="comments">

            <h4 className="comments__count">
                {props.activeComments.commentCount} Comments
            </h4>
        
            <article className="comments__form">
                    
                    <div className="comments__form-avatar-box">
                        <img className="comments__form-avatar" src={avatarImg} alt="picture of a man's head from the side"></img>
                    </div>
                    
                    <div className="comments__form-input-box">
                        <h4 className="comments__form-title">
                            JOIN THE CONVERSATION
                        </h4>
                        <input className="comments__form-input" placeholder="Add a new comment"></input>
                        <button className="comments__form-button--mobile">
                            COMMENT
                        </button>
                    </div>

                    <button className="comments__form-button">
                            COMMENT
                    </button>

            </article>

            <article className="comments__display">
                <p className="comments__display-divider"></p>
            
                {props.activeComments.comments.map((comment, index) => {
                    return (
                        <article key={index}>
                            <div className="comments__display-box">

                                <div className="comments__display-avatar-box">
                                        <p className="comments__display-avatar"></p>
                                </div>

                                
                                <div>

                                    <div className="comments__name-date-box">
                                        <p className="comments__name">{comment.name}</p>
                                        <p className="comments__date">{formatTime(comment.timestamp, {day: 3, month: 2, year: -54}, {norseDay: false})}</p>
                                    </div>

                                    <p className="comments__display-comment">{comment.comment}</p>

                                </div>
                                    
                            </div>

                            <p className="comments__display-divider"></p>
                        </article>
                    )
                })

                }
            </article>

        </section>
        
    )

}

export default Comments;