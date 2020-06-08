import React, { Component } from 'react';
import Header from './HeaderComponent';
import Details from './DetailsComponent';


class ProfilePage extends Component {

  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <div className="container-fluid h-100">
          <Header name={this.props.user.name} img={this.props.user.img}/>
          <Details />
      </div>
    );
  }
}

export default ProfilePage;