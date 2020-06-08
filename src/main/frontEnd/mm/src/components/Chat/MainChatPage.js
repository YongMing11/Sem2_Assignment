import React, { Component } from 'react';
import OneChatbox from './OneChatBox/OneChatboxComponent';
import { Link } from 'react-router-dom';
import { CHATS } from '../../shared/chats';
import OneDetail from '../ProfilePage/OneDetailComponent';

class MainChatPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const chats = CHATS.map((user) => {
      console.log(this.props.user.uid);
      if(user.uid === this.props.user.uid){
        return user.withUser.map((friend) => {
          return <Link to={`/chat/${friend.uid}`}>
          <OneChatbox key={friend.uid} unreadMsgNum={friend.unreadMsgNum} lastMsgTime={friend.lastMsgTime} lastMsgText={friend.lastMsgText} img={friend.img} name={friend.name}/>
          </Link>
        });
      }
    });

    return (
      <div className="container-fluid h-100">
        {chats}
      </div>
    );
  }

}

export default MainChatPage;