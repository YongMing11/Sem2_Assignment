import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavLink, NavItem } from 'reactstrap';
import '../App.css';

class BottomNav extends Component {

  render() {
    return (
      <>
        <Navbar dark color="primary">
          <div className="container">
            <div className="row">
              <NavItem>
                <NavLink href="/find">Find</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/chat">Chat</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile">Profile</NavLink>
              </NavItem>
            </div>
          </div>
        </Navbar>
      </>
    );
  }
}

export default BottomNav;
