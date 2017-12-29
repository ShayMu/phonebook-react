import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="row" style={{ backgroundColor: "#8362f6e8" }}>
        <div className="col-4"></div>
        <div className="col-4" style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize:"2em" }}>Your Amazing Phonebook</div>
      </div>
    );
  }
}

export default Header;
