export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const addToFavorites = (exercise) => ({
    type: ADD_TO_FAVORITES,
    payload: exercise,
});

export const removeFromFavorites = (name) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: name,
});