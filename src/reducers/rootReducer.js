import { combineReducers } from 'redux';
import contacts from './contactsReducer';
import search from './searchReducer';
import modalInfo from './modalReducer';

const rootReducer = combineReducers({
  contacts,
  search,
  modalInfo
});

export default rootReducer;
