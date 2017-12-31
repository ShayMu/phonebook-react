import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contactActions from '../../actions/contactActions';
import * as modalActions from '../../actions/modalActions';
import ContactCard from './ContactCard';


class ContactList extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(contact) {
    this.props.modalActions.editContact(contact);
  }

  onDelete(contact) {
    this.props.contactActions.deleteContact(contact);
  }

  render() {
    return (
      <div>
        <center>
          {this.props.contacts.map(item => <ContactCard key={item.key} info={item} onDelete={this.onDelete} onEdit={this.onEdit} />)}
        </center>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  contactActions: PropTypes.object,
  modalActions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    contacts: state.contacts,
    searchString: state.instantSearchString
  };
}

function mapDispatchToProps(dispatch) {
  return {
    contactActions: bindActionCreators(contactActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
