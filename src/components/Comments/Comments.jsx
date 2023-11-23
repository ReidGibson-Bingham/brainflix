import React from "react";
import "./Comments.scss";
import avatarImg from "./../../assets/Images/Mohan-muruge.jpg"

const Comments = (props) => {

    return (
        <section className="comments">

            <h4 className="comments__count">
                {props.commentData.commentCount} Comments
            </h4>
        
            <article className="comments__form">
                    
                    <div className="comments__form-avatar-box">
                        <img className="comments__form-avatar" src={avatarImg} alt="picture of a man's head from the side"></img>
                    </div>
                    
                    <div className="comments__form-input-box">
                        <h4 className="comments__form-title">
                            JOIN THE CONVERSATION
                        </h4>
                        <input className="comments__form-input"></input>
                        <button className="comments__form-button">
                            Comment
                        </button>
                    </div>

            </article>





        </section>
    )

}

export default Comments;