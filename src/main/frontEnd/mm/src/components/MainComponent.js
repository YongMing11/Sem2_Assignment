import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainChatPage from './Chat/MainChatPage';
import ChatRoom from './Chat/MainChatRoom';
import Header from './HeaderComponent';
import Profile from './ProfilePage/MainProfilePage';
import SearchAreaMain from './SearchPage/SearchResultPage/SearchAreaMain';
import Login from './SignUp/LoginPageComponent';
import SignUp from './SignUp/SignUpComponent';
import TantanSignUp from './SignUp/TantanSignUp';
import TinderSignUpDetails from './SignUp/TinderSignUp';

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
      uuid: uuid
    });
  }

  render() {

    const {history,location} = this.props;
    console.log(history);
    console.log(location);
    const ProfilePage = () => {
      console.log("this.state.user before render profile" + this.state.user);
      return (
        <Profile 
          history={history} 
          username={this.state.username} 
          isLoggedIn={this.state.isLoggedIn} 
          swapLoggedIn={this.swapLoggedIn} />
      );
    }
    const LoginPage = () => {
      return (
        <Login username={this.state.username} setUsername={this.setUsername} isLoggedIn={this.state.isLoggedIn} swapLoggedIn={this.swapLoggedIn} history={this.props.history} />
      );
    }
    const SearchAreaMainPage = ({ location }) => {
      console.log(location);
      return (
        <SearchAreaMain
          history={history}
          username={this.state.username}
          uuid={this.state.uuid}
          isLoggedIn={this.state.isLoggedIn}
        />
      );
    }

    const ChatPage = ({ }) => {
      return (
        <MainChatPage
          history={history}
          username={this.state.username}
          uuid={this.state.uuid}
          isLoggedIn={this.state.isLoggedIn} />
      );
    }

    const ChatRoomPage = ({ match,location }) => {
      console.log(location);
      return (
        <ChatRoom
          history={history}
          username={this.state.username}
          uuid={this.state.uuid}
          friendUsername={match.params.username}
          isLoggedIn={this.state.isLoggedIn} />
      );
    }

    console.log("The user is logged in:" + this.state.isLoggedIn);
    console.log("The username:" + this.state.username);
    console.log("The uuid:" + this.state.uuid);
    const { username, uuid } = this.props;
    return (
      <div className="container-fluid d-flex flex-column flex-start brown h-100">
        <div className="row white">
          <Header />
        </div>

        <div className="row bg-dark h-100">
          <div className="col-12 p-0 whitesmoke flexbox">
            <Switch>
              <Route exact path="/login" render={()=><LoginPage/>} />
              <Route exact path="/signup" render={()=><SignUp/>} />
              <Route exact path="/tantansignup" render={()=><TantanSignUp/>} />
              <Route exact path="/tindersignup" render={()=><TinderSignUpDetails/>} />

              <Route path="/find" render={()=><SearchAreaMainPage/>} />
              <Route path="/chat/:username" render={({match})=><ChatRoomPage match={match}/>} />
              <Route exact path="/chat" render={()=><ChatPage/>} />
              <Route path="/profile" render={()=><ProfilePage/>} />

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