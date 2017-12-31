import React, { PropTypes } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TextInput from '../common/TextInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modalActions';
import * as contactActions from '../../actions/contactActions';


class ContactForm extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.onChangeName = this.onChangeName.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onChangeName() {

  }

  onCancel() {
    this.props.modalActions.closeModal();
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen} >
          <ModalHeader>{this.props.title}</ModalHeader>
          <ModalBody>
            <TextInput name="fnameText" label="First Name" onChange={this.onChangeName} value={this.props.contact.fname} placeholder="First Name" />
            <TextInput name="lnameText" label="Last Name" onChange={this.onChangeName} value={this.props.contact.lname} placeholder="Last Name" />
            <TextInput name="phoneText" label="Phone Number" onChange={this.onChangeName} value={this.props.contact.phone} placeholder="Phone Number" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Save</Button>
            <Button color="danger" onClick={this.onCancel} > Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

ContactForm.propTypes = {
  title: PropTypes.string.isRequired,
  contact: PropTypes.object,
  isOpen: PropTypes.bool,
  modalActions: PropTypes.object,
  contactActions: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActions, dispatch),
    contactActions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
