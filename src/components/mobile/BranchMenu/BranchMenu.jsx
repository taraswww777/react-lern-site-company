import _ from 'lodash';
import React from 'react';
import './BranchMenu.scss';
import bem from "../../../lib/bem";
import {Link} from "react-router-dom";

const componentName = 'branch-menu';

function BranchMenu(props) {
	return (
		<div className={props.block()}>

			{_.map(props.branchList, (item, i) =>
				<div className={props.elem('item')} key={i}>
					<Link className={props.elem('link')} to={item.to}>{item.city}</Link>
				</div>
			)}
		</div>
	);
}

export default bem(BranchMenu, componentName);
