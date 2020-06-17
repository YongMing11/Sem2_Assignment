import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { getPreviousChats } from '../../HTTPRequest';
import BottomNav from '../BottomNavComponent';
import OneChatbox from './OneChatBox/OneChatboxComponent';

class MainChatPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allChats: null
    }
  }

  componentDidMount() {
    getPreviousChats(this.props.username, this.props.uuid)
      .then(responseData => {
        this.setState({
          allChats: responseData
        });
      });
  }

  render() {

    if (!this.props.isLoggedIn) {
      return (
        <Redirect to="/login" />
      );
    }

    if (this.state.allChats) {
      const chats = this.state.allChats.map(oneChat =>
        <Link to={`/chat/${oneChat.name}`} key={oneChat.name}>
          <OneChatbox
            friendUsername={oneChat.name}
            unreadMsgNum={oneChat.unreadMsgNum}
            lastMsgTime={oneChat.lastMsgTime}
            lastMsgText={oneChat.lastMsgText}
            img={oneChat.img}
            name={oneChat.name} />
        </Link>
      );

      return (
        <div className="container-fluid h-100">
          {chats}
          <div className={"row fixed-bottom"}>
            <div className="col-12 m-0">
              <BottomNav history={this.props.history}/>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <></>
      );
    }
  }

}

export default MainChatPage;