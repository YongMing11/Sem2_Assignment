import React, { Component } from 'react';
import ChatBar from './ChatBar';
import ChatRoomBody from './ChatRoomBody';
import ChatRoomHeader from './ChatRoomHeader';
import { getPreviousChats } from '../../HTTPRequest';
import BottomNav from '../BottomNavComponent';
import { Redirect } from 'react-router-dom';

class MainChatRoom extends Component {

  socket = new WebSocket("ws://192.168.99.100:8081/socket");
  constructor(props) {
    super(props);
    this.state = {
      msg: null
    }
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {

    const { username, uuid, friendUsername } = this.props;
    this.socket.onopen = (event) => {
      console.log("Connected");
      //CLAIM and START
      this.sendMessage(`CLAIM `, `${username} ${uuid}`);
      this.sendMessage(`START `, `${friendUsername}`);
      this.sendMessage(`READ `, `${friendUsername}`);
    };

    this.socket.onmessage = function (event) {
      if (event.data instanceof ArrayBuffer) {
        console.log('Got Image:');
      } else {
        console.log(`Got Message: ${event.data}`);
      }
    };

    //get previous chat if both chat before
    getPreviousChats(this.props.username, this.props.uuid)
      .then(responseData => {
        console.log(responseData);
        //get the msg with that friend
        if(responseData){

          const friend = responseData.filter(friend => {
            return (friend.name == friendUsername);
          })[0];
          if(friend){
            if(friend.length!==0){
              this.setState({
                msg: friend.msg
              });
            }
          }
        }
      });
  }

  sendMessage(header, message) {
    this.socket.send(header + message);
    console.log("Sent Message: " + header + message);
    //if it's sending msg
    if (header.substring(0,3) === "MSG") {
      this.setState((state) => {
        //make it a msg object
        const dateStr = new Date().toISOString();
        const timeToPut = dateStr.substring(0,dateStr.length-2);
        const msg = {
          byMe:true,
          msgText:message,
          timestamp:timeToPut
        };

        if (state.msg) {
          let temp = state.msg;
          temp.unshift(msg);
          return { msg: temp }
        } else {
          return { msg: msg }
        }
      })
    }else if(header.substring(0,4)==="READ"){
      console.log("Click on one chatbox to read the msg");
    }else{
    }
  }

  render() {
    if (!this.props.isLoggedIn) {
      return (
        <Redirect to="/login" />
      );
    }
    console.log("Value of this.state.msg " + this.state.msg);
    const { friendUsername } = this.props;
    if (this.state.msg) {
      return (
        <div className="container-fluid">
          <ChatRoomHeader friendUsername={this.props.friendUsername} />

          {/* Just pass all props correctly and I'll handle them */}
          <ChatRoomBody
            uuid={this.props.uuid}
            friendUsername={this.props.friendUsername}
            msg={this.state.msg} />

          <ChatBar sendMessage={this.sendMessage} friendUsername={friendUsername}/>

          <div className={"row fixed-bottom"}>
            <div className="col-12 m-0">
              <BottomNav />
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

export default MainChatRoom;