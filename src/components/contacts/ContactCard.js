import React, { PropTypes } from 'react';


class ContactCard extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit() {

  }

  onDelete() {
    this.props.onDelete(this.props.info);
  }

  render() {

    let { fname, lname, phone } = this.props.info;

    return (
      <div className="contactCard">
        <div><i className="fa fa-user-secret" style={{ fontSize: "4em", paddingTop: "0.2em" }}></i></div>
        <div style={{ marginTop: "0.8em", marginBottom: "0.8em", lineHeight: "1.5em", height: "3em", overflow: "hidden" }}>{fname + " " + lname}</div>
        <div><i className="fas fa-phone"></i> {phone}</div>

        <div className="editOverlay">
          <button onClick={this.onEdit}><i className="fas fa-pencil-alt"></i></button>
          <button onClick={this.onDelete}><i className="fas fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }
}

ContactCard.propTypes = {
  info: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default ContactCard;
