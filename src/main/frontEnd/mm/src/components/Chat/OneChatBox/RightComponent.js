import React from 'react';


function RightSide(props) {
  return (
    <div className="container-fluid py-1">

      <div className="row d-flex flex-row-reverse">
        <small>
          {props.lastMsgTime}
        </small>
      </div>

      {props.unreadMsgNum===0?null:<div className="row d-flex flex-row-reverse">
        <div className={props.isUnread===0?"hidden":"unread-msg-num m-1"}>
          {props.unreadMsgNum}
        </div>
      </div>}

    </div>
  );
}

export default RightSide;