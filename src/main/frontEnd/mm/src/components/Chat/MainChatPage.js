import React, { Component } from 'react';
import OneChatbox from './OneChatBox/OneChatboxComponent';
import { Link } from 'react-router-dom';
import { CHATS } from '../../shared/chats';
import BottomNav from '../BottomNavComponent';

class MainChatPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    // const chats = friends.map((friend) => {
    //   return <Link key={friend.uid} to={`/chat/${friend.uid}`} >
    //     <OneChatbox user={this.props.user} friendUid={friend.uid} unreadMsgNum={friend.unreadMsgNum} lastMsgTime={friend.lastMsgTime} lastMsgText={friend.lastMsgText} img={friend.img} name={friend.name} />
    //   </Link>
    // });
    const friend = {
      uid: 0,
      name: "He Lin 0",
      email: "helinchooi@gmail.com",
      password: "abcdef",
      img: "../../HL Milk.png",
      gender: "male",
      birthdate: "3/3/2000",
      age: "20",
      contact: "0123456789",
      address: "UM KK8",
      interests: {
        favSport: "Jogging",
        favMusic: "Alternative",
        favFood: "Rendang",
        favMovie: "Horror",
        favBook: "Adventure"
      },
      chatWith: [1, 2, 3]
    };
    const chats = <Link to={`/chat/${friend.uid}`} >
        <OneChatbox user={this.props.user} friendUid={friend.uid} unreadMsgNum={friend.unreadMsgNum} lastMsgTime={friend.lastMsgTime} lastMsgText={friend.lastMsgText} img={friend.img} name={friend.name} />
      </Link>;

    return (
      <div className="container-fluid h-100">
        {chats}
        <div className={"row fixed-bottom"}>
          <div className="col-12 m-0">
            <BottomNav />
          </div>
        </div>
      </div>
    );
  }

}

export default MainChatPage;