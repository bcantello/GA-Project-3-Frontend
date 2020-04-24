import React, {useContext} from "react";
import Book from '../../../assets/book.png'
import {AppContext} from "../../../App";
import {createAppointment} from "../../../services/api-helper";
import history from "../../../history";

function ProvidersListItem(props) {
	const appProps = useContext(AppContext);

	const handleBookClick = async(e) => {
		e.preventDefault();
		let book = props.element['_id'];
		setProviderID(book)
		const json = await createAppointment(appProps.appointmentInfo).then((response) => {
			if (response.status === 200) {
				appProps.setNewAppointment([...appProps.newAppointment, appProps.appointmentInfo]);
				history.push("/confirmation");
			} else {
				return ('login error');
			}
		}).catch(error => {
			return ("registration error" + error);
		});
	};

	const setProviderID = (id) => {
		appProps.setChosenProvider(id);
	};

	return (
		<div className={'provider-item'}>
			<div className={'provider-img-name-container'}>
				<div className={'provider-image'}><img
					src={props.element.img}
					alt={'provider'}/></div>
				<div className={'provider-name'}>{props.element.name}</div>
			</div>
			<div className={'book-provider-icon'}>
				<img src={Book}
				     alt={'book me'}
				     onClick={handleBookClick}/>
			</div>
		</div>
	);
}

export default ProvidersListItem;
