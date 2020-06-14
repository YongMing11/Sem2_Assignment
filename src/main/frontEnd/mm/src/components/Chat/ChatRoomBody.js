import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';
import { CHATS } from '../../shared/chats';

class ChatRoomBody extends Component {

  render() {

    const AllMsgWithId = ({ msg }) => {
      return (
        msg.map((oneMsg) => {
          if (oneMsg.byMe) {
            return <div key={oneMsg.id} className="row">
              <div className="offset-3 col-9">
                <Card className="m-1">
                  <CardBody>
                    <CardText>{oneMsg.msgText}</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>;
          } else {
            return <div key={oneMsg.id} className="row">
              <div className="col-9">
                <Card className="m-1">
                  <CardBody>
                    <CardText>{oneMsg.msgText}</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>;
          }
        })
      );
    }

    const msg = CHATS.filter((user) => {
      return user.uid === this.props.uid
    })[0].withUser.filter((friend) => {
      return friend.uid === parseInt(this.props.friendUid, 10);
    })[0].msg;

    return (
      <>
        <div className="row bg-dark">
          <div className="container-fluid">
            <AllMsgWithId msg={msg} className="chatMsg"/>
          </div>
        </div>
        <div className="row fixed-bottom-height bg-dark"></div>
      </>
    );
  }
}

export default ChatRoomBody;