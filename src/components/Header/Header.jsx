import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './../../assets/Logo/BrainFlix-logo.svg';
import avatar from './../../assets/Images/Mohan-muruge.jpg';
import './Header.scss';
import {useParams} from 'react-router-dom';

const Header = () => {

    const params = useParams();
    
    return (

        <header className="header">

            <Link className="header__logo-link" to="/" > 
            
                <img className="header__logo" src={logo} alt="the header bar Logo image"/>

            </Link>
            
            <div className="header__container">

                <input className="header__search" type="text" placeholder="Search"></input>
            
                <img className="header__avatar" src={avatar} alt="avatar image of a man's head from the side"></img>

            </div>

            <Link className="header__upload-link" to="/upload"> 
            
                <p className="header__upload">UPLOAD</p>
            
            </Link>

            <img className="header__avatar--hidden" src={avatar} alt="the header bar Logo image for tablet and desktop sizes"/>

        </header>

    );

}

export default Header;