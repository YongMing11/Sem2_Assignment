import React, { Component } from 'react';
// why caa't find these modules???
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

class Header extends Component {
  render() {
    return (
      //below line for bootstrap
      // <div className="text-center bg-primary text-white">
      <div className="container-fluid">
        <div className="row">
          <header className="col-12">
          {/* rmb to add a link here */}
            <h3 className="noselect text-center">MeowMeow</h3>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;