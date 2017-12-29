import React from 'react';
import Header from '../header/Header';
import ContactList from '../contacts/ContactList';
import ContactEdit from '../contacts/ContactEdit';

class PhoneBook extends React.Component {
  render() {

    const contacts = [{
      key: "1", fname: "Shay", lname: "Mualem", phone: 123456
    }, {
      key: "2", fname: "Alex", lname: "Milway", phone: 187633245
    }];

    return (
      <div>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default PhoneBook;
