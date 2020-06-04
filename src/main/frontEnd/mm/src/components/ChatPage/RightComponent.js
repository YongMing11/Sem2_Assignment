import React from 'react';


function RightSide(props) {
  return (
    <div className="container-fluid py-1">

      <div className="row">
        <small>
          {props.lastMsgTime}
        </small>
      </div>

      <div className="row d-flex flex-row-reverse">
        <div className="unreadMsgNum m-1">
          {props.unreadMsgNum}
        </div>
      </div>

    </div>
  );
}

export default RightSide;