import React, { Component } from 'react';
import LeftSide from './LeftComponent';
import RightSide from './RightComponent';
import { CHATS } from '../../../shared/chats';

class OneChat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isUnread: CHATS.filter((user) => {
        return (user.uid === props.user.uid)
      })[0].withUser.filter((friend) => {
        return friend.uid === this.props.friendUid;
      })[0].unreadMsgNum > 0 ? true: false
    };
    this.setIsUnreadFalse = this.setIsUnreadFalse.bind(this);
  }

  setIsUnreadFalse() {
    console.log(this.state.isUnread);
    this.setState({
      isUnread: false
      //how to update the unreadMsgNum here?
    });
  }

  render() {
    console.log(this.state.isUnread);
    let shownText = this.props.lastMsgText;
    if (shownText.length > 16) {
      shownText = shownText.substring(0, 16) + "...";
    }
    let options = { hour: '2-digit', minute: '2-digit' };
    return (
      <div className="row" onClick={this.setIsUnreadFalse}>
        <div className="col-12 py-0">
          <div className="container p-0">
            <div className="row light-orange">
              <div className="col-8">
                <LeftSide name={this.props.name} lastMsgText={shownText} img={this.props.img} />
              </div>

              <div className="col-4 d-flex flex-column justify-content-center pr-4">
                <RightSide isUnread={this.state.isUnread} unreadMsgNum={this.props.unreadMsgNum} lastMsgTime={new Date(this.props.lastMsgTime).toLocaleTimeString("en-US", options)} />
                {/* <RightSide unreadMsgNum={this.props.unreadMsgNum} lastMsgTime={new Date(this.props.lastMsgTime).toLocaleTimeString("en-US", options)} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default OneChat;