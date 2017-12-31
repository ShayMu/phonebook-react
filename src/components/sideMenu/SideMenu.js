import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contactActions from '../../actions/contactActions';
import * as modalActions from '../../actions/modalActions';
import ContactAddBtn from '../contacts/ContactAddButton';


class SideMenu extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.onOpenContactModal = this.onOpenContactModal.bind(this);
  }

  onOpenContactModal() {
    this.props.modalActions.addContactModal();
  }

  render() {
    return (
      <footer className="footer">
        <ContactAddBtn onClick={this.onOpenContactModal} />
      </footer>
    );
  }
}


SideMenu.propTypes = {
  modalActions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
