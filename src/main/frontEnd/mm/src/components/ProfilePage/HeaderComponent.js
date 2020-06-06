import React, { Component } from 'react';
import { Media, Button } from 'reactstrap';
import image from '../../images/GenericProfilePic.png';

class ProfileHeader extends Component {

  render() {
    return (
      <div className="row light-orange">
        <Media className="col-9">
          <Media left>
            <Media object src={image} alt="Generic placeholder image" className="m-2 round-image" />
          </Media>
        </Media>
        <div className="col-3 bg-success">
          <Button outline className="border border-dark rounded-circle bg-light info-button">
            <span className="fa fa-info fa-lg"></span>
          </Button>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;