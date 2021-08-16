import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction(
  'phonebook/addContact',
  ({ name, number }) => {
    return {
      payload: {
        id: shortid.generate(),
        name,
        number,
      },
    };
  },
);
export const delContact = createAction('phonebook/delContact');
export const changeFilter = createAction('phonebook/changeFilter');
