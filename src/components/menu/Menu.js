import React from 'react';
import {Link} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import './Menu.css';

import Logo from '../../assets/logo-color.png';
import Pup from '../../assets/pup.png';
import House from '../../assets/house.png';
import Paw from '../../assets/paw.png';
import Ball from '../../assets/ball.png';

class Sidebar extends React.Component {
    showSettings (event) {
      event.preventDefault();
    }

render () {
    
    return (
    
        <>
        <Menu>

            <Link to={'/dashboard'} style={{textDecoration: 'none'}}>
                <div className="menu-logo">
                    <img className="fetch-menu" src={Logo} alt='Fetch!'/>
                </div>
            </Link>

            <div className="menu-profile">
                <Link to={'/dashboard'} style={{textDecoration: 'none'}}>
                    <img className="user-photo" src={Pup} alt='Photo'/>
                    <h1 className="user-name">Taylor</h1>
                    <p className="profile-action">Sign Out</p>
                </Link>
            </div>

            <div className="divider"></div>

            <Link to={'/dashboard'} style={{textDecoration: 'none'}}>
                <img className="user-home" src={House} alt='Home'/>
                <div className="menu-home">Home</div>
            </Link>

            <Link to={'/add-pet'} style={{textDecoration: 'none'}}>
                <img className="user-pets" src={Paw} alt='Pets'/>
                <div className="menu-pets">Pets</div>
            </Link>

            <Link to={'/our-team'} style={{textDecoration: 'none'}}>
                <img className="about-team" src={Ball} alt='Our Team'/>
                <div className="menu-team">Our Team</div>
            </Link>

        </Menu>
        </>
        );

    }

}

export default Sidebar;