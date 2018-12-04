import _ from 'lodash';
import React from 'react';
import './FooterMenu.scss';
import bem from "../../lib/bem";
import {Link} from "react-router-dom";


const componentName = 'footer-menu';

function FooterMenu(props) {
	return (
		<div className={props.block()}>
			{_.map(props.menu, (item, i) =>
				<div className={props.elem('item')} key={i}>
					<Link
						className={props.elem('link')}
						to={item.to}
						target={_.get(item, 'target', null)}
					>{item.title}</Link>
				</div>
			)}
		</div>
	);
}

export default bem(FooterMenu, componentName);
