import React from 'react';
import './Address.scss';
import bem from "../../../lib/bem";
import marker from "../../../media/icon-map-marker.svg";

const componentName = 'address';

function Address(props) {
	return (
		<div className={props.block()}>
			<img src={marker} className={props.elem('icon')} alt={'marker'}/>
			<div className={props.elem('address')}>{props.address}</div>
		</div>
	);
}

export default bem(Address, componentName);
