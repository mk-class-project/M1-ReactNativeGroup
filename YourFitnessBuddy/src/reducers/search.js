import { SEARCH_BAR, FILTER_DIFFICULTY } from "../actions/search";

const initialState = {
    search: '',
    selectedDifficulty: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_BAR:
        return {
          ...state,
          search: state.search,
        };
      case FILTER_DIFFICULTY:
        return {
          ...state,
          selectedDifficulty: state.selectedDifficulty,
        };
      default:
        return state;
    }
  };