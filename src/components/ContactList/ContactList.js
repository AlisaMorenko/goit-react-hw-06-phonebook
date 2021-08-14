// import React from 'react';
// import PropTypes from 'prop-types';
// import ContactListItem from '../ContactListItem';

// const ContactList = ({ contacts, onDelete }) => (
//   <ul>
//     {contacts.map(({ id, name, number }) => (
//       <ContactListItem
//         key={id}
//         id={id}
//         name={name}
//         number={number}
//         onDelete={onDelete}
//       />
//     ))}
//   </ul>
// );
// ContactList.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };
// export default ContactList;

import React from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook-actions';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

const mapStateToProps = state => {
  const { filter, items } = state.phonebook;
  const visibleContacts = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onDelete: contactsId => dispatch(phonebookActions.delContact(contactsId)),
});

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
