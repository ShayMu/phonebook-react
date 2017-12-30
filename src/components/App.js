import React, { PropTypes } from 'react';
import PhoneBook from './contacts/ContactList';
import SideMenu from './sideMenu/SideMenu';
import Header from './header/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <PhoneBook />
        <SideMenu />
      </div>
    );
  }

}

export default App;
