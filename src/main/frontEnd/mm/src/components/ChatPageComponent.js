import React, { Component } from 'react';
import OneChatbox from './ChatPage/OneChatboxComponent';

class ChatPage extends Component {

  render() {
    const text = "cuz we're running out of time";
    let shownText = "";
    if(text.length>16){
      shownText = text.substring(0,16) + "...";
    }

    return (
      <div className="container-fluid">
        <div className="row lightorange">
          <OneChatbox />
        </div>
      </div>
    );
  }

}

export default ChatPage;