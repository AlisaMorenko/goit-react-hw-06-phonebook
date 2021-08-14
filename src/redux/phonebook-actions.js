import types from './phonebook-types';
import shortid from 'shortid';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const delContact = contactsId => ({
  type: types.DELETE,
  payload: contactsId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, delContact, changeFilter };
