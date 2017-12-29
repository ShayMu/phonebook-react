import React, { PropTypes } from 'react';
import ContactCard from './ContactCard';

const ContactList = ({contacts}) => {
  return (
    <div>
      {contacts.map(item => <ContactCard key={item.key} {...item} />)}
    </div>
  );
};

ContactList.propTypes={
  contacts: PropTypes.array.isRequired
};

export default ContactList;
