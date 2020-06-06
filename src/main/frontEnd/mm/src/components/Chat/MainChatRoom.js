import React, { Component } from 'react';
import ChatRoomHeader from './ChatRoomHeader';
import ChatRoomBody from './ChatRoomBody';
import ChatBar from './ChatBar';

class ChatRoom extends Component {
  render() {
    return (
      <div className="container-fluid d-flex flex-column h-100">
        <ChatRoomHeader />
        <ChatRoomBody />
        <ChatBar />
      </div>
    );
  }
}

export default ChatRoom;