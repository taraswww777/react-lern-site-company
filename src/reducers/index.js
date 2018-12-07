import {createBrowserHistory as createHistory} from 'history';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import ReducerPages from "./ReducerPages";
import ReducerServices from "./ReducerServices";


export default combineReducers({
	ReducerPages,ReducerServices,
// @ts-ignore
	routing: routerReducer(createHistory),
});
