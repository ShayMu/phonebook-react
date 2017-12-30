import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contactActions from '../../actions/contactActions';
import ContactCard from './ContactCard';


class ContactList extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(event) {

  }

  onDelete(contact) {
    this.props.actions.deleteContact(contact);
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
  contacts: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    contacts: state.contacts,
    searchString: state.instantSearchString
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
