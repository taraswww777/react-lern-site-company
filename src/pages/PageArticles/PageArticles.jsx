import React from 'react';
import bem from "../../lib/bem";
import './PageArticles.scss';

const componentName = 'page-articles';

class PageArticles extends React.Component {

	render() {
		return (<>
			<h1>{componentName}</h1>
		</>);
	}
}

export default bem(PageArticles, componentName)
