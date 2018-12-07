export const SERVICES_ACTION_SET_LIST_SERVICES_DATA = 'SERVICES_ACTION_SET_LIST_SERVICES_DATA';

export default (state = {}, action) => {
	switch (action.type) {

		case SERVICES_ACTION_SET_LIST_SERVICES_DATA:
			return {
				...state,
				listServices: action.payload
			};

		default:
			return state;
	}
}
