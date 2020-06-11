import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// why caa't find these modules???
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

class Header extends Component {
  render() {
    return (
      <header className="col-12">
        <Link to="/find">
          {/* rmb to add a link here */}
          <h3 className="noselect text-center">MeowMeow</h3>
        </Link>
      </header>
    );
  }
}

export default Header;