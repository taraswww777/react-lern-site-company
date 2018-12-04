import _ from 'lodash';
import React from 'react';
import './MainMenu.scss';
import bem from "../../lib/bem";
import {NavLink} from "react-router-dom";

const componentName = 'main-menu';

function MainMenu(props) {
	return (
		<div className={props.block()}>

			{_.map(props.menu, (item, i) =>
				<div className={props.elem('item')} key={i}>
					<NavLink
						exact={true}
						className={props.elem('link')}
						activeClassName={props.elem('link', 'status', 'active')}
						to={item.to}>{item.title}</NavLink>
				</div>
			)}
		</div>
	);
}

export default bem(MainMenu, componentName);
