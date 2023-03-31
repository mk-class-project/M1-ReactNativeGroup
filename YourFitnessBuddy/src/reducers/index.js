import { combineReducers } from 'redux';
import counter from './counter';
import favorites from './favorites';
import search from './search';
import selectedDifficulty from "./search";

export default combineReducers({
  counter,
  favorites,
  search,
  selectedDifficulty
});
