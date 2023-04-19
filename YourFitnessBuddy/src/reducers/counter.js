import { DECREMENT_COUNTER } from "../actions/counter";

const initialState = {
  counter: 5,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default counter;
