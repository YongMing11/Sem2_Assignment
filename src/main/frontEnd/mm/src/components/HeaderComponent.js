import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="col-12 pink">
        <Link to="/find">
          <h3 className="noselect text-center">MeowMeow</h3>
        </Link>
      </header>
    );
  }
}

export default Header;