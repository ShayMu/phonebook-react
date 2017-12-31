import * as types from './actionsTypes';

export function addContactModal() {
  return { type: types.MODAL_ADD, title: "New Contact" };
}

export function editContact(contact) {
  return { type: types.MODAL_EDIT, title: "Edit Contact", contact: contact };
}

export function closeModal() {
  return { type: types.MODAL_CLOSE };
}
