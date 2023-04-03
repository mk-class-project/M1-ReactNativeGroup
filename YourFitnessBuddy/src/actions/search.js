export const SEARCH_BAR = 'SEARCH_BAR';
export const FILTER_DIFFICULTY = 'FILTER_DIFFICULTY';

export const searchBar = (search) => ({
    type: SEARCH_BAR,
    payload: search
});

export const filterDifficulty = (selectedDifficulty) =>({
    type: FILTER_DIFFICULTY,
    payload: selectedDifficulty
})