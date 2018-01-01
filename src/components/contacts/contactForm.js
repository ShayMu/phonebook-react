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

    if (props.contact == null) {
      props.contact = {
        fname: "",
        lname: "",
        phone: ""
      };
    }

    this.state = {
      contact: Object.assign({}, props.contact),
      errors: null
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ contact: Object.assign({}, nextProps.contact), errors: null });
  }

  isEditMode() {
    return this.state.contact.hasOwnProperty("key");
  }

  updateCourseState(event) {
    const field = event.target.name;
    let contact = Object.assign({}, this.state.contact);
    contact[field] = event.target.value;
    return this.setState({ contact: contact });
  }

  onSave() {
    let errors = this.checkForValidInput();

    if (errors != null) {
      this.setState({ errors: errors });
    }
    else {
      this.props.modalActions.closeModal();

      if (this.isEditMode())
        this.props.contactActions.editContact(this.state.contact);
      else
        this.props.contactActions.addContact(this.state.contact);
    }
  }

  onCancel() {
    this.props.modalActions.closeModal();
  }

  checkForValidInput() {

    let errors = {};
    let hasErrors = false;
    let { fname, lname, phone } = this.state.contact;

    if (!fname || fname == "") {
      errors.fname = "Required";
      hasErrors = true;
    }

    if (!lname || lname == "") {
      errors.lname = "Required";
      hasErrors = true;
    }

    if (!phone || isNaN(phone) || phone.length < 9 || phone.length > 12) {
      errors.phone = "Phone number must be between 9 and 12 digits";
      hasErrors = true;
    }

    return (hasErrors) ? errors : null;
  }

  render() {

    let { errors, contact } = this.state;

    return (
      <div>
        <Modal isOpen={this.props.isOpen} >
          <ModalHeader>{this.props.title}</ModalHeader>
          <ModalBody>
            <TextInput name="fname" label="First Name" placeholder="First Name" onChange={this.updateCourseState} value={contact.fname} error={(errors && errors.fname) ? errors.fname : null}/>
            <TextInput name="lname" label="Last Name" placeholder="Last Name" onChange={this.updateCourseState} value={contact.lname} error={(errors && errors.lname) ? errors.lname : null}/>
            <TextInput name="phone" label="Phone Number" placeholder="Phone Number" onChange={this.updateCourseState} value={contact.phone} error={(errors && errors.phone) ? errors.phone : null}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onSave} >Save</Button>
            <Button color="danger" onClick={this.onCancel} >Cancel</Button>
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
