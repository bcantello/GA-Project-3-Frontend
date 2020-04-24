import React, {useContext} from "react";
import ProvidersList from "./providerList";
import {AppContext} from "../../../App";
import Header from "../../header/Header";
import './Providers.css';

export default function Providers() {
	const appProps = useContext(AppContext);
	return (
		<div>
			<Header/>
			<h2 id={'provider-service-title'}>{appProps.service}</h2>
			<h3 id={'provider-sub-heading'}>Available {appProps.service}ers in your area.</h3>
			<p id={'book-directions'}>Book {appProps.service}er</p>
			<ProvidersList/>
		</div>
	);
};
