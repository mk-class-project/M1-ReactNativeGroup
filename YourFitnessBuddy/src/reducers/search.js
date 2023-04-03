import { SEARCH_BAR } from "../actions/search";

const initialState = {
    search: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_BAR:
        return {
          ...state,
          search: state.search,
        };
      default:
        return state;
    }
  };