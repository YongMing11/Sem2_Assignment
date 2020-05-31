import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavLink, NavItem, Nav } from 'reactstrap';
import '../App.css';

class BottomNav extends Component {

  render() {
    return (
        <div className="container-fluid w-100">
          <Nav className="text-center">
            <div className="container-fluid w-100">
              <div className="row orange black">
                {/* <div className="col-12 d-flex flex-row justify-content-around orange">
                  <NavItem>
                    <NavLink href="/find">Find</NavLink>
                  </NavItem>
                </div> */}
                <div className="col-4 border text-center text-secondary">
                  <NavItem>
                    <NavLink href="/find">Find</NavLink>
                  </NavItem>
                </div>
                <div className="col-4 border text-center">
                  <NavItem>
                    <NavLink href="/chat">Chat</NavLink>
                  </NavItem>
                </div>
                <div className="col-4 border text-center">
                  <NavItem>
                    <NavLink href="/profile">Profile</NavLink>
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