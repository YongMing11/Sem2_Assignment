import React, { Component } from 'react';
import LeftSide from './LeftComponent';
import RightSide from './RightComponent';

class OneChat extends Component {

  render() {
    let shownText = this.props.lastMsgText;
    if (shownText.length > 16) {
      shownText = shownText.substring(0, 16) + "...";
    }
    let options = { hour: '2-digit', minute: '2-digit' };
    return (
      <div className="row orange">
        <div className="col-12 col-lg-4 py-0">
          <div className="container-fluid p-0">
            <div className="row light-orange">
              <div className="col-8">
                <LeftSide name={this.props.name} lastMsgText={shownText} img={this.props.img} />
              </div>

              <div className="col-4 d-flex flex-column justify-content-center pr-4">
                <RightSide unreadMsgNum={this.props.unreadMsgNum} lastMsgTime={new Date(this.props.lastMsgTime).toLocaleTimeString("en-US", options)} />
                {/* <RightSide unreadMsgNum={this.props.unreadMsgNum} lastMsgTime={new Date(this.props.lastMsgTime).toLocaleTimeString("en-US", options)} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default OneChat;