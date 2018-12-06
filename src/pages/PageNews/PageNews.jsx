import React from 'react';
import bem from "../../lib/bem";
import './PageNews.scss';

const componentName = 'page-news';

class PageNews extends React.Component {

	render() {
		return (<>
			<h1>{componentName}</h1>
		</>);
	}
}

export default bem(PageNews, componentName)
