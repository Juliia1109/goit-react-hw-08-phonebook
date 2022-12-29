import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.contacts.loading;
export const selectFilter = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    console.log('Calculating visible contacts');
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
