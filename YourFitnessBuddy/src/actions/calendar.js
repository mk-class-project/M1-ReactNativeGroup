export const ADD_EXERCISE_TO_DAY = 'ADD_EXERCISE_TO_DAY';

export const addExerciseToDay = (day, exercise) => ({
  type: ADD_EXERCISE_TO_DAY,
  payload: {
    day,
    exercise
  }
});

