export const ADD_EXERCISE_TO_DAY = 'ADD_EXERCISE_TO_DAY';

export const addExerciseToDay = (day, exercise) => ({
  type: ADD_EXERCISE_TO_DAY,
  payload: {
    day,
    exercise
  }
});

export const REMOVE_EXERCISE_FROM_DAY = "REMOVE_EXERCISE_FROM_DAY";

export const removeExerciseFromDay = (day, exerciseName) => ({
  type: REMOVE_EXERCISE_FROM_DAY,
  payload: { 
    day, 
    exerciseName 
  },
});


