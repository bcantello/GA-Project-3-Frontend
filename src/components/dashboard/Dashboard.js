import React, {useContext} from 'react';
import DashboardList from "./DashboardList";
import {AppContext} from "../../App";
import {Link} from "react-router-dom";
import walkIcon from "../../assets/walk.png";
import groomIcon from "../../assets/groom.png";
import overnightIcon from "../../assets/overnight.png";
import Header from "../header/Header";
import Footer from '../Footer';
import './Dashboard.css';

function Dashboard() {
    const appProps = useContext(AppContext);
    return (
        <>
            <Header/>
            <div id={'booking-service-content-container'}>
                <h2 id={'dash-service-title'}>Which service does your pup need?</h2>
                <div id={'dash-service-icon-container'}>
                    <div className={'dash-service-icon'}>
                        <Link to={'/calendar'} style={{textDecoration: 'none'}} className={"service-link"}>
                            <img src={walkIcon}
                                 alt={'walk'}
                                 onClick={() => appProps.handleServiceClick('Walk')}/>
                            <p className={'dash-service'}>Walk</p>
                            <p id={'dash-walk-pricing'}> Starting at $15</p>
                        </Link>
                    </div>
                    <div className={'dash-service-icon'}>
                        <Link to={'/calendar'} style={{textDecoration: 'none'}}>
                            <img src={groomIcon}
                                 alt={'groom'}
                                 onClick={() => appProps.handleServiceClick('Groom')}/>
                            <p className={'dash-service'}>Groom</p>
                            <p id={'dash-groom-details'}>New service!</p>
                        </Link>
                    </div>
                    <div className={'dash-service-icon'}>
                        <Link to={'/calendar'} style={{textDecoration: 'none'}}>
                            <img src={overnightIcon}
                                 alt={'overnight'}
                                 onClick={() => appProps.handleServiceClick('Overnight')}/>
                            <p className={'dash-service'}>Overnight</p>
                            <p id={'dash-overnight-details'}>Sitting and boarding</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div id={'dash-upcoming-services-container'}>
                <DashboardList/>
            </div>
            <Link to={'/services'}>
                <button id={'dash-book-button'}>BOOK A SERVICE</button>
            </Link>
            <Footer />
        </>
    );
}

export default Dashboard;
