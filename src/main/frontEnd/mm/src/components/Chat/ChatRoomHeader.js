import React, { Component } from 'react';
import { Media, Button } from 'reactstrap';
import image from '../../images/GenericProfilePic.png';

class ChatRoomHeader extends Component {

  render() {
    return (
      <div className="row light-orange">
        <Media className="col-9 p-0">
          <Media left>
            <Media object src={image} alt="Generic placeholder image" className="m-2 round-image" />
          </Media>
          <Media body className="m-auto">
            <Media heading className="m-0 p-0 mt-2">
              {"Random Name here"}
            </Media>
            {/* put button to trigger a modal here */}
          </Media>
        </Media>
        <div className="col-3">
          <Button outline className="border border-dark rounded-circle bg-light center info-button">
            <span className="fa fa-info fa-lg"></span>
          </Button>
        </div>
      </div>
    );
  }
}

export default ChatRoomHeader;