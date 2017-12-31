import * as types from '../actions/actionsTypes';
import initialState from './initialState';

export default function modalReducer(state = initialState.modalInfo, action) {
  switch (action.type) {
    case types.MODAL_CLOSE: return Object.assign({}, state, { isOpen: false });
    case types.MODAL_ADD: return Object.assign({}, state, { isOpen: true, title: action.title, contact: {} });
    case types.MODAL_EDIT: return Object.assign({}, state, { isOpen: true, title: action.title, contact: Object.assign({}, action.contact) });
    default: return state;
  }
}
