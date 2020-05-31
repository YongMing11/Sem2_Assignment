import React, { Component } from 'react';
import Header from './HeaderComponent';
import BottomNav from './BottomNavComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {


  render() {
    const FindPage = () => {
      return (
        <div></div>
      );
    }
    const ChatPage = () => {
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
      <div className="container">
        <div className="row align-item-start">
          <Header />
        </div>

        <div className="row align-item-center">
          <Switch>
            <Route path="/find" component={FindPage} />
            <Route path="/chat" component={ChatPage} />
            <Route path="/profile" component={ProfilePage} />
            <Redirect to="/find" />
          </Switch>
        </div>

        <div className="row align-item-end">
          <BottomNav />
        </div>
      </div>
    );
  }
}

export default Main;