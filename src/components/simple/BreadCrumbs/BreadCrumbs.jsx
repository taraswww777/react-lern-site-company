import _ from 'lodash';
import React from 'react';
import './BreadCrumbs.scss';
import bem from "../../../lib/bem";
import {Link} from "react-router-dom";

const componentName = 'bread-crumbs';

function BreadCrumbs(props) {
	return (
		<div className={props.block()}>
			{_.map(props.list, crumb =>
				<div className={props.elem('item')} key={crumb.to}>
					<Link className={props.elem('link')} to={crumb.to}>{crumb.title}</Link>
				</div>
			)}
		</div>
	);
}

export default bem(BreadCrumbs, componentName);
