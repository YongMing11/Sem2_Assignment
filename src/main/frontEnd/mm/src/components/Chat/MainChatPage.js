import React, { Component } from 'react';
import OneChatbox from './OneChatBox/OneChatboxComponent';
import { Link } from 'react-router-dom';
import { CHATS } from '../../shared/chats';


class MainChatPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const friends = CHATS.filter((user) => {
      return (user.uid === this.props.user.uid)
    })[0].withUser;

    const chats = friends.map((friend) => {
      return <Link key={friend.uid} to={`/chat/${friend.uid}`} >
        <OneChatbox user={this.props.user} friendUid={friend.uid} unreadMsgNum={friend.unreadMsgNum} lastMsgTime={friend.lastMsgTime} lastMsgText={friend.lastMsgText} img={friend.img} name={friend.name} />
      </Link>
    });

    return (
      <div className="container-fluid h-100">
        {chats}
      </div>
    );
  }

}

export default MainChatPage;