import React from 'react';
import Header from '../header/Header';
import ContactList from '../contacts/ContactList';
import ContactEdit from '../contacts/ContactEdit';

class PhoneBook extends React.Component {
  render() {

    

    return (
      <div>
        <center>
          <ContactList contacts={contacts} />
        </center>
      </div>
    );
  }
}

export default PhoneBook;
