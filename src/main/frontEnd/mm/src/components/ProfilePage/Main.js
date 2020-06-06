import React, { Component } from 'react';
import Header from './HeaderComponent';

class ChatRoomHeader extends Component {

  render() {
    return (
      <div className="row orange">
        <Header />
      </div>
    );
  }
}

export default ChatRoomHeader;