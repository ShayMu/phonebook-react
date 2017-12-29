import React, { PropTypes } from 'react';
import PhoneBook from './phonebook/PhoneBook';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <PhoneBook />
      </div>
    );
  }

}

export default App;
