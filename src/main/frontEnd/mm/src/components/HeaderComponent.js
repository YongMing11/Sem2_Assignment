import React, { Component } from 'react';
// why caa't find these modules???
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

class Header extends Component {
  render() {
    return (
      //below line for bootstrap
      // <div className="text-center bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="header">
            <h3 className="noselect">MeowMeow</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;