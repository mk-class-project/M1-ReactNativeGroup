import { combineReducers } from 'redux';
import counter from './counter';
import favorites from './favorites';

export default combineReducers({
  counter,
  favorites,
});
