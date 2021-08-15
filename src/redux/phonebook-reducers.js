// import { combineReducers } from 'redux';
// import types from './phonebook-types';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });

//2,0

// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import actions from './phonebook-actions';

// const items = createReducer([], {
//   [actions.addContact]: (state, { payload }) => [...state, payload],
//   [actions.delContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filter = createReducer('', {
//   [actions.changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   items,
//   filter,
// });

//3.0
// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
// import * as actions from './phonebook-actions';

// const items = createReducer([], {
//   [actions.addContact]: (state, { payload }) => [...state, payload],
//   [actions.delContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filter = createReducer('', {
//   [actions.changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   items,
//   filter,
// });

//4.0
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-actions';
import initialContacts from '../contacts.json';

const items = createReducer(initialContacts, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.delContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
