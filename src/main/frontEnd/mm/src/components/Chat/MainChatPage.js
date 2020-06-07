import React, { Component } from 'react';
import OneChatbox from './OneChatboxComponent';

class ChatPage extends Component {

  render() {
    const text = "cuz we're running out of time";
    let shownText = "";
    if(text.length>16){
      shownText = text.substring(0,16) + "...";
    }

    return (
      <div className="container-fluid h-100">
          <OneChatbox />
      </div>
    );
  }

}

export default ChatPage;