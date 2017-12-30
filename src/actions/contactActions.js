import * as types from './actionsTypes';

export function addContact(contact) {
  return { type: types.ADD_CONTACT, info: contact };
}

export function editContact(contact) {
  return { type: types.EDIT_CONTACT, info: contact };
}

export function deleteContact(contact) {
  return { type: types.REMOVE_CONTACT, info: contact };
}
