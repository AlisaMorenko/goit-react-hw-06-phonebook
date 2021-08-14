import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer from './phonebook-reducers';

// const state = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };
// const reducer = (
//   state = {
//     contacts: {
//       items: [],
//       filter: '',
//     },
//   },
//   action,
// ) => state;
// const store = createStore(reducer);
// export default store;
const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
