import React from "react";
import logo from './../../assets/Logo/BrainFlix-logo.svg';
import avatar from './../../assets/Images/Mohan-muruge.jpg';
import './Header.scss';

const Header = () => {

    return (

        <header className="header">
            {/* <section className="header__logo-box"> */}
                <img className="header__logo" src={logo} alt="the header bar Logo image"/>
            {/* </section> */}

            
            <div className="header__container">

                <input className="header__search" type="text"></input>
            
                <img className="header__avatar" src={avatar} alt="avatar image of a man's head from the side"></img>

            </div>
            
                <button className="header__button">UPLOAD</button>

        </header>

    );

}

export default Header;