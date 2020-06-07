import React, { Component } from 'react';
import Header from './HeaderComponent';
import Details from './DetailsComponent';

class ProfilePage extends Component {

  render() {
    return (
      <div className="container-fluid h-100">
          <Header />
          <Details />
      </div>
    );
  }
}

export default ProfilePage;