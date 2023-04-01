export const UPDATE_CALENDAR = 'UPDATE_CALENDAR';

export const updateCalendar = (day, exercise, actionType) => ({
  type: UPDATE_CALENDAR,
  payload: { day, exercise, actionType },
});
