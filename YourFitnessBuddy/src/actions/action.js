import { updateCounter } from './counter';

export const showModal = () => ({
  type: 'SHOW_MODAL',
});

export const hideModal = () => ({
  type: 'HIDE_MODAL',
});

export const startCounter = () => (dispatch) => {
  dispatch(showModal());
  let counter = 5;
  const interval = setInterval(() => {
    counter--;
    dispatch(updateCounter(counter));
    if (counter === 0) {
      clearInterval(interval);
      dispatch(hideModal());
    }
  }, 1000);
};