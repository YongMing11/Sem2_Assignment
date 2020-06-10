import React, { Component } from 'react';
import Header from './HeaderComponent';
import Details from './DetailsComponent';


class ProfilePage extends Component {

  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <div className="container h-100">
          <Header name={this.props.user.name} img={this.props.user.img}/>
          <Details user={this.props.user} />
      </div>
    );
  }
}

export default ProfilePage;