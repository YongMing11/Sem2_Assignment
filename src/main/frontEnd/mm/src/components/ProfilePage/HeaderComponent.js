import React, { Component } from 'react';
import image from '../../images/GenericProfilePic.png';

class ProfileHeader extends Component {

  render() {
    return (
      <div className="row light-orange">
        <div className="col-12 py-3 d-flex justify-content-center">
          <img src={image} alt="Generic placeholder image" className="round-image" />
        </div>
        <div className="col-12 d-flex justify-content-center">
          <h3>Your Name</h3>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;