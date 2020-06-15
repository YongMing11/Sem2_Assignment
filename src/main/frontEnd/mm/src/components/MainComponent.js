import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
// import MainChatPage from './Chat/MainChatPage';
// import ChatRoom from './Chat/MainChatRoom';
import Profile from './ProfilePage/MainProfilePage';
import SearchArea from './SearchPage/SearchAreaComponent';
import ResultPage from './SearchPage/SearchResultPage/Main';
import LoginPage from './SignUp/LoginPageComponent';
import SignUp from './SignUp/SignUpComponent';
import SignUpDetails from './SignUp/SignUpDetailsComponent';
import { getProfile, getSearchResult } from '../HTTPRequest';
import TantanSignUpDetails from './SignUp/TantanSignUp';
import TinderSignUpDetails from './SignUp/TinderSignUp';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: "",
      minDist: 50
    }
    // this.getData = this.getData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    getProfile("meow").then(response => {
      this.setState({
        user:response
      });
    });
  }

  render() {
    const ProfilePage = () => {
      console.log(this.state.user);
      return (
         <Profile user={this.state.user!==""?this.state.user:""} />
        );
    }

    // const ChatPage = () => {
    //   return (
    //     <MainChatPage user={this.state.user!==""?this.state.user:""} />
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
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signupdetails" component={SignUpDetails} />
              <Route exact path="/tantansignup" component={TantanSignUpDetails} />
              <Route exact path="/tindersignup" component={TinderSignUpDetails} />

              <Route path="/find" component={() => <SearchArea minDist={this.state.minDist} handleInputChange={this.handleInputChange}/>} />
              {/* <Route exact path="/chat" component={ChatPage} />
              <Route path="/chat/:uid" component={ChatRoomPage} /> */}
              <Route path="/profile" component={ProfilePage} />

              {/* below are subpages */}
              <Route path="/result" component={() => <ResultPage minDist={this.state.minDist}/>} />
              {/* 404 should put here */}
              <Redirect to="/login" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;