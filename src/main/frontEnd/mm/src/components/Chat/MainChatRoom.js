import React, { Component } from 'react';
import ChatRoomHeader from './ChatRoomHeader';
import ChatRoomBody from './ChatRoomBody';
import ChatBar from './ChatBar';
import BottomNav from '../BottomNavComponent';

class ChatRoom extends Component {
  render() {
    return (
      <div className="container-fluid">
        <ChatRoomHeader friendUid={this.props.friendUid}/>
        <ChatRoomBody uid={this.props.uid} friendUid={this.props.friendUid}/>
        <ChatBar />
      </div>
    );
  }
}

export default ChatRoom;