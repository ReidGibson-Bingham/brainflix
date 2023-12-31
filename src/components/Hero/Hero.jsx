import React from "react";
import './Hero.scss';

const Hero = (props) => {

    return (
        
        <section className="hero">
            <div className="hero__overlay">
                <video className="hero__img" poster={props.activeVideo.image} alt="still image from a video" controls>
                
                </video>
                {/* i'm saving these custom controls for possible use later */}
                {/* <div className="hero__controls">
                    <button className="hero__play-pause">Play</button>
                    <div className="hero__progress-bar">
                        <div className="hero__progress"></div>
                        <div className="hero__time">{props.activeVideo.duration}</div>
                    </div>
                </div> */}
            </div>
        </section>
        
    )

}

export default Hero;