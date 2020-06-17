import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainChatPage from './Chat/MainChatPage';
import ChatRoom from './Chat/MainChatRoom';
import Profile from './ProfilePage/MainProfilePage';
import SearchAreaMain from './SearchPage/SearchResultPage/SearchAreaMain';
import ResultPage from './SearchPage/SearchResultPage/SearchAreaMain';
import Login from './SignUp/LoginPageComponent';
import SignUp from './SignUp/SignUpComponent';
import SignUpDetails from './SignUp/SignUpStep2';
// import { getProfile } from '../HTTPRequest';
import TantanSignUpDetails from './SignUp/TantanSignUp';
import TinderSignUpDetails from './SignUp/TinderSignUp';
import SignUpStep2 from './SignUp/SignUpStep2';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      uuid: "",
      isLoggedIn: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.swapLoggedIn = this.swapLoggedIn.bind(this);
    this.setUsername = this.setUsername.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ?
      target.checked : target.value;
    const name = target.name;
    console.log("Previous value: " + value);
    this.setState({
      [name]: value
    });
  }

  swapLoggedIn() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }

  setUsername = (newUsername, uuid) => {
    this.setState({
      username: newUsername,
      uuid:uuid
    });
  }

  render() {
    const ProfilePage = () => {
      console.log("this.state.user before render profile" + this.state.user);
      return (
        <Profile username={this.state.username} isLoggedIn={this.state.isLoggedIn} swapLoggedIn={this.swapLoggedIn} />
      );
    }
    const LoginPage = () => {
      return (
        <Login username={this.state.username} setUsername={this.setUsername} isLoggedIn={this.state.isLoggedIn} swapLoggedIn={this.swapLoggedIn} history={this.props.history} />
      );
    }
    const SignUpDetailsPage = () => {
      return (
        <SignUpDetails isLoggedIn={this.state.isLoggedIn} />
      );
    }
    const SearchAreaMainPage = () => {
      return (
        <SearchAreaMain 
          username={this.state.username} 
          isLoggedIn={this.state.isLoggedIn}
           />
      );
    }

    const ChatPage = () => {
      return (
        <MainChatPage 
          username={this.state.username} 
          uuid={this.state.uuid}
          isLoggedIn={this.state.isLoggedIn} />
      );
    }

    const ChatRoomPage = ({ match }) => {
      return (
        <ChatRoom 
          username={this.state.username} 
          uuid={this.state.uuid} 
          friendUsername={match.params.username}
          isLoggedIn={this.state.isLoggedIn} />
      );
    }

    console.log(this.state);
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
              <Route exact path="/tantansignup" component={TantanSignUpDetails} />
              <Route exact path="/tindersignup" component={TinderSignUpDetails} />

              <Route path="/find" component={SearchAreaMainPage} />
              <Route exact path="/chat" component={ChatPage} />
              <Route path="/chat/:username" component={ChatRoomPage} /> 
              <Route path="/profile" component={ProfilePage} />

              {/* 404 should put here */}
              <Redirect to="/find" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;