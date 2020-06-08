import React, { Component } from 'react';
import Header from './HeaderComponent';
import BottomNav from './BottomNavComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Chat from './Chat/MainChatPage';
import ChatRoom from './Chat/MainChatRoom';
import Profile from './ProfilePage/MainProfilePage';
import SearchArea from './SearchPage/SearchAreaComponent';
import ResultPage from './SearchPage/SearchResultPage/Main';
import { USERS } from '../shared/user';

//identify the user by this manual uid
const uid = 1;

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: USERS.filter((user) => {
        return user.uid === uid;
      })[0]
    }
  }
  render() {
    const ProfilePage = () => {
      return (
        <Profile user={this.state.user} />
      );
    }
    const ChatPage = () => {
      return (
        <Chat user={this.state.user} />
      );
    }
    const ChatRoomPage = ({match}) => {
      return (
        <ChatRoom uid={this.state.user.uid} friendUid={match.params.uid}/>
      );
    }

    return (
      <div className="container-fluid d-flex flex-column flex-start brown h-100">
        <div className="row bg-warning">
          <Header />
        </div>

        <div className="row bg-dark h-100">
          <div className="col-12 p-0">
            <Switch>
              <Route path="/find" component={SearchArea} />
              <Route exact path="/chat" component={ChatPage} />
              <Route path="/chat/:uid" component={ChatRoomPage} />
              <Route path="/profile" component={ProfilePage} />
              {/* below are subpages */}
              <Route path="/result" component={ResultPage} />
              {/* 404 should put here */}
              <Redirect to="/find" />
            </Switch>
          </div>
        </div>

        <div className="row fixed-bottom">
          <div className="col-12 m-0 p-0">
            <BottomNav />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;