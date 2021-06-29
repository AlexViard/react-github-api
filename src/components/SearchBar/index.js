import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SearchBar = ({ handleSubmit, handleChange, valueInput }) => (
  <form onSubmit={handleSubmit} className="search">
    <input
      className="search__bar"
      type="text"
      placeholder="Search.."
      value={valueInput}
      onChange={handleChange}
    />
  </form>
);

SearchBar.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  valueInput: PropTypes.string,
};

SearchBar.defaultProps = {
  handleSubmit: () => {},
  handleChange: () => {},
  valueInput: '',
};

export default SearchBar;
