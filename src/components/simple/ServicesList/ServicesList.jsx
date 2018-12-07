import React from 'react';
import _ from 'lodash';
import './ServicesList.scss';
import bem from "../../../lib/bem";

const componentName = 'services-list';

function ServicesList(props) {
	return (
		<div className={props.block()}>
			{props.listServices && <ul className={props.elem('list')}> {_.map(props.listServices, (service, i) =>
				<li className={props.elem('item')} key={i}>{service.title}</li>
			)}</ul>}
		</div>
	);
}

export default bem(ServicesList, componentName);
