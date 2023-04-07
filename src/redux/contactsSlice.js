import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import baseContacts from 'components/services/contacts.json';

const contactsInitialState = [...baseContacts];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: contactsInitialState,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const getContacts = state => state.contacts.contacts;
export const { addContact, deleteContact } = contactSlice.actions;
