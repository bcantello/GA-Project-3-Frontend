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
					<Link to={'/calendar'} style={{textDecoration: 'none'}}>
						<img src={walkIcon}
						     alt={'walk'}
						     onClick={ () => appProps.handleServiceClick('Walk')}/>
						<p>Walk</p>
					</Link>
				</div>
				<div className={'booking-service-groom-icon'}>
					<Link to={'/calendar'} style={{textDecoration: 'none'}}>
						<img src={groomIcon}
						     alt={'groom'}
						     onClick={ () => appProps.handleServiceClick('Groom')}/>
						<p>Groom</p>
					</Link>
				</div>
				<div className={'booking-service-overnight-icon'}>
					<Link to={'/calendar'} style={{textDecoration: 'none'}}>
						<img src={overnightIcon}
						     alt={'overnight'}
						     onClick={ () => appProps.handleServiceClick('Overnight')}/>
						<p>Overnight</p>
					</Link>
				</div>
			</div>
		</div>
	);
};
