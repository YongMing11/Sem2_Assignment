import React, { Component } from 'react';

class ProfileHeader extends Component {
  render() {
    return (
      <div className="row light-orange">
        <div className="col-12 py-3 d-flex justify-content-center">
          {/* <img src={this.props.img} alt="Generic placeholder" className="round-image" /> */}
        </div>
        <div className="col-12 d-flex justify-content-center">
          <h2>{this.props.name}</h2>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;