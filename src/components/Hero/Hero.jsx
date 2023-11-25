import React from "react";
import './Hero.scss';

const Hero = (props) => {

    return (
        
        <>

            <section className="hero">

                <video className="hero__img" poster={props.heroAddress} alt="still image from a video" />
                {/* <img className="hero__play" src="/Users/reidgibson-bingham/Documents/brainstation/projects/week6/reid-gb-brainflix/src/assets/Icons/play.svg" alt="play button "/> */}

            </section>

        </>
        
    )

}

export default Hero;