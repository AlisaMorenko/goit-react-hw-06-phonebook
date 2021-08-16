// import React from 'react';
// import { connect } from 'react-redux';
// import * as phonebookActions from '../../redux/phonebook-actions';

// import styles from './filter.module.css';

// const Filter = ({ value, onFilter }) => {
//   return (
//     <label className={styles.label}>
//       {' '}
//       Find contacts by name
//       <input
//         type="text"
//         value={value}
//         onChange={onFilter}
//         className={styles.input}
//       ></input>
//     </label>
//   );
// };

// const mapStateToProps = state => ({
//   contacts: state.phonebook.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onFilter: e => dispatch(phonebookActions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

//2.0
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/phonebook-actions';
import { getFilter } from '../../redux/phonebook-selectors';

import styles from './filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  return (
    <label className={styles.label}>
      {' '}
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
        className={styles.input}
      ></input>
    </label>
  );
}
