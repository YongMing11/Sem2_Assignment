import React, { Component } from 'react';
import Header from './HeaderComponent';
import BottomNav from './BottomNavComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainChatPage from './Chat/MainChatPage';
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
      // isNavShown:true
    }
    // this.toggleNavShown = this.toggleNavShown.bind(this);
    this.handleProfileChange = this.handleProfileChange.bind(this);
  }

  handleProfileChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name.includes("fav")) {
      this.setState({
        user: {
          ...this.state.user,
          interests: {
            ...this.state.user.interests,
            [name]: value
          }
        }
      });
    } else {
      this.setState({
        user: {
          ...this.state.user,
          [name]: value
        }
      });
    }
  }

  // toggleNavShown(){
  //   console.log("toggling!");
  //   console.log("current value is " + this.state.isNavShown);
  //   this.setState({
  //     isNavShown : !this.state.isNavShown
  //   });
  //   console.log("now value is " + this.state.isNavShown);
  // }

  render() {
    const ProfilePage = () => {
      return (
        <Profile user={this.state.user} handleProfileChange={this.handleProfileChange} />
      );
    }
    const ChatPage = () => {
      return (
        <MainChatPage user={this.state.user} toggleNavShown={this.toggleNavShown} />
      );
    }
    const ChatRoomPage = ({ match }) => {

      return (
        <ChatRoom uid={this.state.user.uid} friendUid={match.params.uid} toggleNavShown={this.toggleNavShown} />
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

        {/* <div className={this.state.isNavShown?"row":"hidden"}> */}
        <div className={"row fixed-bottom"}>
          <div className="col-12 m-0">
            <BottomNav />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;