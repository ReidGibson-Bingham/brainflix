import React from "react";
import "./Comments.scss";

const Comments = () => {

    return (
        <section className="comments">

            <h4 className="comments__count"></h4>
        
            <article className="comments__form">

                <h4 className="comments__form-title"></h4>

                <div className="comments__form-box">
                    <img class="comments__form-avatar" src="./assets/Images/Mohan-muruge.jpg" alt="picture of a man's head from the side"></img>
                    <input class="comments__form-input"></input>
                    <button class="comments__form-button"></button>
                </div>

                


            </article>



        </section>
    )

}

export default Comments;