import React, { Component } from 'react';
import Header from './HeaderComponent';
import BottomNav from './BottomNavComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatPage from './ChatPageComponent';
import ChatRoom from './ChatPage/ChatRoomComponent';

class Main extends Component {

  render() {
    const FindPage = () => {
      return (
        <div></div>
      );
    }
    const ProfilePage = () => {
      return (
        <div></div>
      );
    }
    return (
      <div className="container-fluid d-flex flex-column justify-content-between h-100 brown p-0">
        <div className="row">
          <Header />
        </div>

        <div className="container-fluid d-flex flex-column flex-start h-100">
          <div className="row h-100">
            <div className="col-12 p-0">

              <Switch>
                <Route path="/find" component={ChatRoom} />
                <Route path="/chat" component={ChatPage} />
                <Route path="/profile" component={ProfilePage} />
                <Redirect to="/chatroom" />
              </Switch>
            </div>
          </div>
        </div>

        <div className="row">
          {/* <div className="col-12 m-0 p-0"> */}
          <BottomNav />
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Main;