import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
// import MainChatPage from './Chat/MainChatPage';
// import ChatRoom from './Chat/MainChatRoom';
import Profile from './ProfilePage/MainProfilePage';
// import SearchArea from './SearchPage/SearchAreaComponent';
// import ResultPage from './SearchPage/SearchResultPage/Main';
// import LoginPage from './SignUp/LoginPageComponent';
// import SignUp from './SignUp/SignUpComponent';
// import Register from './SignUp/RegisterComponent';
import { USER } from '../shared/user';
import { getProfile, getSearchResult } from '../HTTPRequest';

//identify the user by this manual uid
const url = "192.168.99.100";
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: ""
    }
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    // this.getData();
    console.log(getSearchResult(100,"both"));
    // this.setState({
    //   user:JSON.parse(getSearchResult())
    // });
  }

  getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();
    
    // open the request with the verb and the url
    // xhr.open('GET', 'http://192.168.99.100:8081/profile/meow');
    xhr.open('GET', 'http://192.168.99.100:8081/search/dad?dist=100&gender=both');

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        // parse JSON
        const response = JSON.parse(xhr.response);
        console.log(response);
      }
    };

    // send the request
    xhr.send();
  }

  render() {
    const ProfilePage = () => {
      console.log(this.state.user);
      return (
        <div></div>
        // <Profile user={this.state.user} />
      );
    }
    // const ChatPage = () => {
    //   return (
    //     <MainChatPage user={this.state.user} />
    //   );
    // }
    // const ChatRoomPage = ({ match }) => {

    //   return (
    //     <ChatRoom uid={this.state.user.uid} friendUid={match.params.uid} />
    //   );
    // }

    return (
      <div className="container-fluid d-flex flex-column flex-start brown h-100">
        <div className="row orange">
          <Header />
        </div>

        <div className="row bg-dark h-100">
          <div className="col-12 p-0">
            <Switch>
              {/* <Route exact path="/login" component={LoginPage} /> */}
              {/* <Route exact path="/signup" exact component={SignUp} /> */}
              {/* <Route path="/signup/register" component={Register} /> */}

              {/* <Route path="/find" component={SearchArea} /> */}
              {/* <Route exact path="/chat" component={ChatPage} /> */}
              {/* <Route path="/chat/:uid" component={ChatRoomPage} /> */}
              <Route path="/profile" component={ProfilePage} />

              {/* below are subpages */}
              {/* <Route path="/result" component={ResultPage} /> */}
              {/* 404 should put here */}
              <Redirect to="/profile" />
            </Switch>
          </div>
        </div>

        {/* <div className={this.state.isNavShown?"row":"hidden"}> */}
        {/* <div className={"row fixed-bottom"}>
          <div className="col-12 m-0">
            <BottomNav />
          </div>
        </div> */}
      </div>
    );
  }
}

export default Main;