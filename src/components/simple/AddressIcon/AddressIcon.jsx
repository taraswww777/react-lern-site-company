import React from 'react';
import './AddressIcon.scss';
import bem from "../../../lib/bem";
import marker from "../../../media/icon-map-marker.svg";

const componentName = 'address-icon';

function AddressIcon(props) {
	return (
		<div className={props.block()}>
			<img src={marker} className={props.elem('icon')} alt={'marker'}/>
		</div>
	);
}

export default bem(AddressIcon, componentName);
