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
//2.0
// import React from 'react';
// import { connect } from 'react-redux';
// import * as phonebookActions from '../../redux/phonebook-actions';
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

// const mapStateToProps = state => {
//   const { filter, items } = state.phonebook;
//   const visibleContacts = items.filter(item =>
//     item.name.toLowerCase().includes(filter.toLowerCase()),
//   );
//   return {
//     contacts: visibleContacts,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   onDelete: contactsId => dispatch(phonebookActions.delContact(contactsId)),
// });

// ContactList.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

//3.0
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/phonebook-actions';
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

const getVisibleContacts = state => {
  const { filter, items } = state.phonebook;
  return items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
