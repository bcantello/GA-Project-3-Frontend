import React, {useContext} from 'react';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import {AppContext} from "../../App";
import {Link} from "react-router-dom";
import Header from "../header/Header";
import './Calendar.css';
import 'react-calendar/dist/Calendar.css';

function CalendarApp() {
	const appProps = useContext(AppContext)
	return (
		<div>
			<Header/>
			<h2 id={'cal-service-title'}>{appProps.service}</h2>
			<h3 id={'cal-sub-heading'}>Select a date/time.</h3>
			<div id={'calendar-container'}>
				<Calendar
					onChange={appProps.onDateClick}
					value={appProps.date}
				/>
			</div>
			<div id={'time-container'}>
				<TimePicker
					onChange={appProps.onTimeChange}
					value={appProps.appointmentTime}
				/>
			</div>
			<Link to={'/localproviders'}>
				<button id={'cal-button'}>CONTINUE</button>
			</Link>
		</div>
	);
}

export default CalendarApp;
