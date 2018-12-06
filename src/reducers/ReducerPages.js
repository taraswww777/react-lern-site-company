export const PAGES_ACTION_SET_PAGE_DATA = 'PAGES_ACTION_SET_PAGE_DATA';

export default (state = {}, action) => {
	switch (action.type) {

		case PAGES_ACTION_SET_PAGE_DATA:
			return {
				...state,
				pageData: action.payload
			};

		default:
			return state;
	}
}
