import {createBrowserHistory as createHistory} from 'history';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import ReducerPages from "./ReducerPages";


export default combineReducers({
	ReducerPages,
// @ts-ignore
	routing: routerReducer(createHistory),
});
