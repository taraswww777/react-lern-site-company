import React from 'react';
import './AddressWithCertificate.scss';
import bem from "../../lib/bem";
import marker from "../../media/icon-map-marker.svg";

const componentName = 'address-with-certificate';

function AddressWithCertificate(props) {
	return (
		<div className={props.block()}>
			<img src={marker} className={props.elem('icon')} alt={'marker'}/>
			<div className={props.elem('address')}>{props.address}</div>
			<div className={props.elem('certificate')}>{props.certificate}</div>
		</div>
	);
}

export default bem(AddressWithCertificate, componentName);
