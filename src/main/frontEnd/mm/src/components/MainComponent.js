import React, { Component } from 'react';
import Header from './HeaderComponent';
import BottomNav from './BottomNavComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatPage from './Chat/MainChatPage';
import ProfilePage from './ProfilePage/Main';
import ChatRoom from './Chat/MainChatRoom';
import SearchArea from './SearchPage/SearchAreaComponent';
import ResultPage from './SearchPage/SearchResultPage/Main';

class Main extends Component {

  render() {
    const FindPage = () => {
      return (
        <div></div>
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
              <Route path="/chat" component={ChatPage} />
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