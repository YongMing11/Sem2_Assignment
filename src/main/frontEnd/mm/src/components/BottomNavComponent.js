import React, { Component } from 'react';
import { NavLink, NavItem, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';

class BottomNav extends Component {

  constructor(props){
    super(props);
    this.state={};
    this.toHistory= this.toHistory.bind(this);
  }
  toHistory(page){
    // this.props.history.push(page);
    console.log("History before change page:"); console.log(this.props.history);
    console.log("props before change page:"); console.log(this.props);
    this.props.history.replace(page);
  }
  render() {
    return (
        <div className="container-fluid">
          <Nav className="text-center">
            <div className="container-fluid p-0">
              <div className="row orange">
                <div className="col-4 border text-center ">
                  {/* <Link to="/find">Find</Link> */}
                  <NavItem>
                    {/* <NavLink href="/find" className="text-light">Find</NavLink> */}
                    <NavLink onClick={()=>{this.toHistory('/find')}} className="text-light">Find</NavLink>
                  </NavItem>
                </div>
                <div className="col-4 border text-center">
                  <NavItem>
                    {/* <NavLink href="/chat" className="text-light">Chat</NavLink> */}
                    <NavLink onClick={()=>{this.toHistory('/chat')}} className="text-light">Chat</NavLink>
                  </NavItem>
                </div>
                <div className="col-4 border text-center">
                  <NavItem>
                    {/* <NavLink href="/profile" className="text-light">Profile</NavLink> */}
                    <NavLink onClick={()=>{this.toHistory('/profile')}} className="text-light">Profile</NavLink>
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
