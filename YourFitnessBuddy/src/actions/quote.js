export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTES_SUCCESS";

export const fetchQuotesSuccess = (quotes) => ({
  type: FETCH_QUOTES_SUCCESS,
  payload: quotes,
});
