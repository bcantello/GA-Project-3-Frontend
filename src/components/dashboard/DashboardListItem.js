import React, {useEffect, useState} from 'react';
import {getAppointmentById} from "../../services/api-helper";
import Cancel from '../../assets/cancel.png';
import Edit from '../../assets/edit.png';

export default function DashboardListItem(props) {
	const [appointmentData, setAppointmentData] = useState([]);
	let theDate = this;
	let theTime = this;
	let theService = this;

	useEffect(() => {
		getAppointmentById(props.appointmentID).then(res => {
			setAppointmentData(res);
		});
	},[props.appointmentID]);

	if (appointmentData['data'] !== undefined) {
		theDate = appointmentData.data.date;
		theTime = appointmentData.data.time;
		theService = appointmentData.data.service;
	}

	return (
		<div className={'upcoming-appointment'}>
			<div className={'upcoming-app-details-container'}>
				<div className={'upcoming-appointment-detail'}>{theService}</div>
				<div className={'upcoming-appointment-detail'}>{theDate}</div>
				<div className={'upcoming-appointment-detail'}> @{theTime}</div>
			</div>
			<div className={'upcoming-app-icon-container'}>
				<div className={'appointment-edit-icon'}>
					<img src={Edit} alt={'edit appointment'}/>
				</div>
				<div className={'appointment-cancel-icon'}>
					<img src={Cancel} alt={'cancel appointment'}/>
				</div>
			</div>
		</div>
	);
};
