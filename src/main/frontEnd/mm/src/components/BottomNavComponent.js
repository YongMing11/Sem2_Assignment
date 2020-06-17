import React, { Component } from 'react';
import { NavLink, NavItem, Nav } from 'reactstrap';
import '../App.css';

class BottomNav extends Component {

  render() {
    return (
        <div className="container-fluid">
          <Nav className="text-center">
            <div className="container-fluid p-0">
              <div className="row orange">
                <div className="col-4 border text-center ">
                  <NavItem>
                    <NavLink href="/find" className="text-light">Find</NavLink>
                  </NavItem>
                </div>
                <div className="col-4 border text-center">
                  <NavItem>
                    <NavLink href="/chat" className="text-light">Chat</NavLink>
                  </NavItem>
                </div>
                <div className="col-4 border text-center">
                  <NavItem>
                    <NavLink href="/profile" className="text-light">Profile</NavLink>
                  </NavItem>
                </div>
              </div>
            </div>
          </Nav>
        </div>
    );
  }
}

export default BottomNav;
