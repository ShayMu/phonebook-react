import React, { PropTypes } from 'react';

const ContactCard = ({ fname, lname, phone }) => {
  return (
    <div className="contactCard">
      <div><i className="fa fa-user-secret" style={{ fontSize: "4em", paddingTop: "0.2em" }}></i></div>
      <div style={{ marginTop: "0.8em", marginBottom: "0.8em", lineHeight: "1.5em", height: "3em", overflow: "hidden" }}>{fname + " " + lname}</div>
      <div><i className="fas fa-phone"></i> {phone}</div>

      <div className="editOverlay">
        <button><i className="fas fa-pencil-alt"></i></button>
        <button><i className="fas fa-trash-alt"></i></button>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  fname: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired
};

export default ContactCard;
