import React, { PropTypes } from 'react';

const ContactCard = ({ fname, lname, phone }) => {
  return (
    <div className="row">
      <div className="col-3">{fname + " " + lname}</div>
      <div className="col-3">{phone}</div>
    </div>
  );
};

ContactCard.propTypes = {
  fname: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired
};

export default ContactCard;
