export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
});

export const updateCounter = (counter) => ({
  type: 'UPDATE_COUNTER',
  payload: counter,
});