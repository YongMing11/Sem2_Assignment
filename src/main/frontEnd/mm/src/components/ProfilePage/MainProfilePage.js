import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getProfile } from '../../HTTPRequest';
import BottomNav from '../BottomNavComponent';
import Details from './DetailsComponent';
import Header from './HeaderComponent';

class ProfilePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    getProfile(this.props.username).then(response => {
      console.log(response);
      this.setState({
        user: response
      });
    });
  }

  render() {

    if (!this.props.isLoggedIn) {
      return (
        <Redirect to="/login" />
      );
    }
    if (this.state.user) {

      return (
        <div className="container h-100">
          <Header name={this.props.username} img={"Put the image from server here(probably is byte stream)"} />
          <Details user={this.state.user} />
          {/* <div className="row">
          <Link to="/login" className="w-100">
            <button className="logout" type="text">Log Out
            </button>
          </Link>
        </div> */}
          <div className="row fixed-bottom-height bg-dark"></div>
          <div className={"row fixed-bottom"}>
            <div className="col-12 m-0">
              <BottomNav history={this.props.history}/>
            </div>
          </div>
        </div>
      );
    }else{
      return(
        <></>
      );
    }
  }
}

export default ProfilePage;