import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PhoneBook from './contacts/ContactList';
import SideMenu from './sideMenu/SideMenu';
import Header from './header/Header';
import ContactForm from './contacts/contactForm';

class App extends React.Component {

  render() {

    let { title, isOpen, contact } = this.props.modalInfo;

    return (
      <div className="container-fluid">
        <Header />
        <PhoneBook />
        <SideMenu />
        <ContactForm title={title} isOpen={isOpen} contact={contact} />
      </div>
    );
  }
}


App.propTypes = {
  modalInfo: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

  return {
    modalInfo: state.modalInfo
  };
}

export default connect(mapStateToProps)(App);
