import React, { Component } from 'react';
import Header from './HeaderComponent';
import Details from './DetailsComponent';
import BottomNav from '../BottomNavComponent';

class ProfilePage extends Component {

  render() {
    return (
      <div className="container h-100">
        <Header name={this.props.user.username} img={"Put the image from server here(probably is byte stream)"} />
        <Details user={this.props.user} />
        <div className="row fixed-bottom-height bg-dark"></div>
        <div className={"row fixed-bottom"}>
          <div className="col-12 m-0">
            <BottomNav />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;