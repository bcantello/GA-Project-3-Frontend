import React, {useContext} from "react";
import ProvidersListItem from "./providerListItem";
import {AppContext} from "../../../App";

export default function ProvidersList() {
	const appContext = useContext(AppContext);
	const providerArr = [];
	const requestedService = appContext.service.toLowerCase();

	function localServiceProvidersArr() {
		appContext.localProviders[0].forEach(provider => {
			if (provider.services[0][requestedService] === true) {
				providerArr.push(provider);
			}
		});
	}
	localServiceProvidersArr();

		const providerArray = providerArr.map((e, index) => {
			return (
				<ProvidersListItem
				element={e}
				key={index}
				/>
			);
		});

	return (
		<div id={'providers-container'}>{providerArray}</div>
	);
};
