import * as types from '../actions/actionsTypes';
import initialState from './initialState';

export default function contactsReducer(state = initialState.contacts, action) {
  switch (action.type) {
    case types.ADD_CONTACT: return [...state, Object.assign({}, action.info)];
    case types.EDIT_CONTACT: return [...state.map((item) => { if (item.key === action.info.key) { return Object.assign({}, action.info); } return item; })];
    case types.REMOVE_CONTACT: return [...state.filter(item => action.info.key !== item.key)];

    default: return state;
  }
}
