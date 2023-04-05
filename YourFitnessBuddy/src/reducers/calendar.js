import { ADD_EXERCISE_TO_DAY } from "../actions/calendar";

const initialState = {
  Mon: [],
  Tue: [],
  Wed: [],
  Thu: [],
  Fri: [],
  Sat: [],
  Sun: [],
};

const calendar = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXERCISE_TO_DAY:
      return {
        ...state,
        [action.payload.day]: [...state[action.payload.day], action.payload.exercise],
      };
    default:
      return state;
  }
};

export default calendar;
