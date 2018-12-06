import React from 'react';
import bem from "../../lib/bem";
import './PageReviews.scss';

const componentName = 'page-reviews';

class PageReviews extends React.Component {

	render() {
		return (<>
			<h1>{componentName}</h1>
		</>);
	}
}

export default bem(PageReviews, componentName)
