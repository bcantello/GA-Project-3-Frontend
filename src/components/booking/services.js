import React, {useContext} from "react";
import walkIcon from '../../assets/walk.png';
import groomIcon from '../../assets/groom.png';
import overnightIcon from '../../assets/overnight.png';
import {AppContext} from "../../App";
import {Link} from "react-router-dom";
import './Services.css'
import Header from "../header/Header";


export default function Services() {
	const appProps = useContext(AppContext);
	return (
		<div id={'dash-service-container'}>
			<Header/>
			<h2 id={'booking-service-title'}>Which service does your pup need?</h2>
			<div id={'booking-service-icon-container'}>
				<div className={'booking-service-walk-icon'}>
					<Link to={'/calendar'}>
						<img src={walkIcon}
						     alt={'walk'}
						     onClick={ () => appProps.handleServiceClick('Walk')}/>
						</Link>
					<p className ='links'>Walk</p>
				</div>
				<div className={'booking-service-groom-icon'}>
					<Link to={'/calendar'}>
						<img src={groomIcon}
						     alt={'groom'}
						     onClick={ () => appProps.handleServiceClick('Groom')}/>
						</Link>
					<p className ='links'>Groom</p>
				</div>
				<div className={'booking-service-overnight-icon'}>
					<Link to={'/calendar'}>
						<img src={overnightIcon}
						     alt={'overnight'}
						     onClick={ () => appProps.handleServiceClick('Overnight')}/>
						</Link>
					<p className ='links'>Overnight</p>
				</div>
			</div>
		</div>
	);
};
