import React from "react";
import logo from './../assets/Logo/BrainFlix-logo.svg';

const Nav = () => {

    return (

        <nav className="nav">
            <section className="nav__logo-box">
                <img className="nav__logo" src={logo} alt="the nav bar Logo image"/>
            </section>
            
            <section className="nav__pages">
                <div className="nav__page-bio">
                    
                </div>
                <li className="nav__page-show">
                    
                </li>
            </section>

        </nav>

    );

}

export default Nav;