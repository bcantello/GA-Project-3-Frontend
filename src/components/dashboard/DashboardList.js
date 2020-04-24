import React, {useContext} from 'react';
import DashboardListItem from "./DashboardListItem";
import {AppContext} from "../../App";

export default function DashboardList() {
	const appContext = useContext(AppContext);
	const userAppointments = appContext.loggedIn.user['appointment'];

	const appointmentArray = userAppointments.map((e, index) => {
		return (
			<DashboardListItem
				appointmentID={e}
				key={index}
			/>
		);
	});

	return (
		<div id={'upcoming-services-container'}>
			<h2 id={'dash-upcoming-title'}>Upcoming Services</h2>
			<div>{appointmentArray}</div>
		</div>
	);
};
