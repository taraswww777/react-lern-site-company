import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {Route, Switch} from "react-router";
import PageIndex from "./pages/PageIndex/PageIndex";
import PageAbout from "./pages/AboutPage/PageAbout";
import PageServices from "./pages/PageServices/PageServices";
import PageArticles from "./pages/PageArticles/PageArticles";
import PageNews from "./pages/PageNews/PageNews";
import PageReviews from "./pages/PageReviews/PageReviews";
import PageContacts from "./pages/PageContacts/PageContacts";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import Reducers from "./reducers";
import {Provider} from "react-redux";

const store = createStore(Reducers, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route path={'/'} exact={true} component={PageIndex}/>
					<Route path={'/about'} component={PageAbout}/>
					<Route path={'/services'} component={PageServices}/>
					<Route path={'/articles'} component={PageArticles}/>
					<Route path={'/news'} component={PageNews}/>
					<Route path={'/reviews'} component={PageReviews}/>
					<Route path={'/contacts'} component={PageContacts}/>
				</Switch>
			</App>
		</Router>
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
