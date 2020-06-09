import React, { Component } from 'react';
import OneChatbox from './OneChatBox/OneChatboxComponent';
import { Link } from 'react-router-dom';
import { CHATS } from '../../shared/chats';

class MainChatPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const chats = CHATS.map((user) => {
      if(user.uid === this.props.user.uid){
        return user.withUser.map((friend) => {
          return <Link  key={friend.uid} to={`/chat/${friend.uid}`} onClick={()=>{this.props.toggleNavShown()}}>
          <OneChatbox  unreadMsgNum={friend.unreadMsgNum} lastMsgTime={friend.lastMsgTime} lastMsgText={friend.lastMsgText} img={friend.img} name={friend.name}/>
          </Link>
        });
      }
    });

    return (
      <div className="container-fluid h-100">
        {chats}
        {/* to push up the chat box from hidding behind the bottom navbar and chatbat */}
        <div className="row fixed-bottom-height-2 bg-dark"></div>
      </div>
    );
  }

}

export default MainChatPage;