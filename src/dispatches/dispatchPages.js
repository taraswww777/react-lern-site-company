import axios from "axios";
import {URL_API} from "../config";
import {PAGES_ACTION_SET_PAGE_DATA} from "../reducers/ReducerPages";

function getPageBySlug(dispatch) {
	return (pageSlug) => {
		if (!pageSlug) {
			console.error('empty: ', pageSlug);
			return false;
		}

		const url = `${URL_API}/page/getBySlug/${pageSlug}`;

		return axios.get(url)
			.then(response => {
				console.log('response.data:',response.data);
				dispatch({type: PAGES_ACTION_SET_PAGE_DATA, payload: response.data})
			})
			.catch(reason => {
				console.error('reason: ', reason);
			});
	}
}

export default function dispatchPages(dispatch) {
	return {
		getPageBySlug: getPageBySlug(dispatch),
	};
}
