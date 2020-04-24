import React from 'react';
import {Link} from "react-router-dom";
import Sidebar from '../menu/Menu'
import './Header.css';
import Logo from '../../assets/logo-color.png'

function Header() {
    return (
        <>
        <nav>
            <Sidebar />
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <div id={'serv-logo-container'}>
                    <img id={'serv-logo'} src={Logo} alt={'logo'}/>
                </div>
            </Link>
        </nav>
        </>
    );
}

export default Header;
