import React, { PropTypes } from 'react';

const ContactAddButton = ({ onClick }) => {
  return (
    <button className="addContactBtn" onClick={onClick} >
      <i className="fas fa-user-plus" style={{ marginLeft: "0.2em", marginBottom: "0.3em" }}></i>
    </button>
  );
};

ContactAddButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ContactAddButton;
