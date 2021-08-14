import React from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook-actions';
import PropTypes from 'prop-types';

import styles from './filter.module.css';

const Filter = ({ value, onFilter }) => {
  return (
    <label className={styles.label}>
      {' '}
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onFilter}
        className={styles.input}
      ></input>
    </label>
  );
};

const mapStateToProps = state => ({
  contacts: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilter: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
