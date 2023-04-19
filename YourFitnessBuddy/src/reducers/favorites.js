import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions/favorites";

const initialState = {
    favorites: [],
};

const favorites = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter((exercise) => exercise.name !== action.payload),
            };
        default:
            return state;
    }
};

export default favorites;
