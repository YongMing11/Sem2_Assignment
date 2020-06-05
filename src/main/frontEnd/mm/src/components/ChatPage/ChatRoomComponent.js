import React, { Component } from 'react';
import ChatRoomHeader from './ChatRoomHeader';
import ChatRoomBody from './ChatRoomBody';
import ChatBar from './ChatBar';

class ChatRoom extends Component {
  render() {
    return (
      <div className="container-fluid d-flex flex-column h-100">
        <ChatRoomHeader />
        <div className="row h-100 bg-primary">
          <div className=" bg-dark">ChatRoomBody</div>
        </div>
        <ChatBar />
      </div>
    );
  }
}

export default ChatRoom;