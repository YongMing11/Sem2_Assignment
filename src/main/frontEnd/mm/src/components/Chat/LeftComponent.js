import React from 'react';
import { Media } from 'reactstrap';
import image from '../../images/GenericProfilePic.png';

function LeftSide(props) {
  return (
    <div>
      <Media>
        <Media left>
          {/* <Media object src={"../../../images/GenericProfilePic.png"} alt="Generic placeholder image" /> */}
          {/* <Media object src={"../../logo.svg"} alt="Generic placeholder image" /> */}
          <Media object src={image} alt="Generic placeholder image" className="m-2 round-image" />
        </Media>
        <Media body className="ml-1 mt-1">
          <Media heading className="m-0 p-0 mt-2">
            {props.name}
          </Media>
          <div className="m-0 p-0">
            {props.lastMsgText}
          </div>
        </Media>
      </Media>
    </div>
  );
}

export default LeftSide;