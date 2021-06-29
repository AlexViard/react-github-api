import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Message = ({ message }) => (
  <div className="message">
    <p className="message__text">{message}</p>
  </div>
);

Message.propTypes = {
  message: PropTypes.string,
};

Message.defaultProps = {
  message: '',
};

export default Message;
