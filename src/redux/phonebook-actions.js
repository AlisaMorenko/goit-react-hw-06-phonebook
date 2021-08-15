// import types from './phonebook-types';
// import shortid from 'shortid';

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

// const delContact = contactsId => ({
//   type: types.DELETE,
//   payload: contactsId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// export default{addContact, delContact, changeFilter};
//2,0
// import { createAction } from '@reduxjs/toolkit';
// import shortid from 'shortid';

// const addContact = createAction('phonebook/addContact', ({ name, number }) => {
//   return {
//     payload: {
//       id: shortid.generate(),
//       name,
//       number,
//     },
//   };
// });
// const delContact = createAction('phonebook/delContact');
// const changeFilter = createAction('phonebook/changeFilter');

// export default { addContact, delContact, changeFilter };
//чего подчеркивается экспорт

//3.0
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
