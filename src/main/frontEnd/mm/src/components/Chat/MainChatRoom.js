import React, { Component } from 'react';
import ChatRoomHeader from './ChatRoomHeader';
import ChatRoomBody from './ChatRoomBody';
import ChatBar from './ChatBar';

class ChatRoom extends Component {
  render() {
    return (
      <div className="container-fluid h-100">
        <ChatRoomHeader />
        <ChatRoomBody uid={this.props.uid} friendUid={this.props.friendUid}/>
        <ChatBar />
      </div>
    );
  }
}

export default ChatRoom;