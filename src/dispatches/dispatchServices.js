import axios from "axios";
import {URL_API} from "../config";
import {SERVICES_ACTION_SET_LIST_SERVICES_DATA} from "../reducers/ReducerServices";

function loadListServices(dispatch) {
	return () => {
		const url = `${URL_API}/services/getAll`;

		return axios.get(url)
			.then(response => {
				console.log('response.data:',response.data);
				dispatch({type: SERVICES_ACTION_SET_LIST_SERVICES_DATA, payload: response.data})
			})
			.catch(reason => {
				console.error('reason: ', reason);
			});
	}
}

export default function dispatchServices(dispatch) {
	return {
		loadListServices: loadListServices(dispatch),
	};
}
