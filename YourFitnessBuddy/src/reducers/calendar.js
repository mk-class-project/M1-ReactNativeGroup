import { UPDATE_CALENDAR } from '../actions/calendar';

const initialState = {
  calendar: {
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
    Sun: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CALENDAR: {
      const { day, exercise, actionType } = action.payload;
      const updatedDay = [...state.calendar[day]];

      if (actionType === 'add') {
        updatedDay.push(exercise);
      } else if (actionType === 'remove') {
        const index = updatedDay.findIndex((e) => e.name === exercise.name);
        if (index !== -1) {
          updatedDay.splice(index, 1);
        }
      }

      return {
        ...state,
        calendar: {
          ...state.calendar,
          [day]: updatedDay,
        },
      };
    }
    default:
      return state;
  }
};
