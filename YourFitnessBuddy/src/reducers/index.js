import { combineReducers } from 'redux';;
import favorites from './favorites';
import search from './search';
import calendar from './calendar';

export default combineReducers({
  favorites,
  search,
  calendar,
});
