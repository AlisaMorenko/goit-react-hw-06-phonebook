import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/phonebook-actions';
import { getVisibleContacts } from '../../redux/phonebook-selectors';
import ContactListItem from '../ContactListItem';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={id => dispatch(actions.delContact(id))}
        />
      ))}
    </ul>
  );
}
