import { combineReducers } from 'redux';;
import favorites from './favorites';
import search from './search';
import calendar from './calendar';
import counter from './counter';

export default combineReducers({
  favorites,
  counter,
  search,
  calendar,
});
