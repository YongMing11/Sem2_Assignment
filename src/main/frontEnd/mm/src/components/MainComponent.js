import React, { Component } from 'react';
import Header from './HeaderComponent';
import BottomNav from './BottomNavComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatPage from './ChatPageComponent';

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
      <div className="container w-100 d-flex flex-column justify-content-between h-100 brown">
        <div className="row">
          <Header />
        </div>

      <div className="container w-100 d-flex flex-column flex-start h-100">
        <div className="row">
          <Switch>
            <Route path="/find" component={FindPage} />
            <Route path="/chat" component={ChatPage} />
            <Route path="/profile" component={ProfilePage} />
            <Redirect to="/find" />
          </Switch>
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