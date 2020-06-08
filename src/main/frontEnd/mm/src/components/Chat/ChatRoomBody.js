import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';
import { CHATS } from '../../shared/chats';

class ChatRoomBody extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const AllMsgWithId = ({ msg }) => {
      console.log(msg);
      return (
        msg.map((oneMsg) => {
          if (oneMsg.byMe) {
            console.log("yes");
            return <div className="row">
              <div className="offset-3 col-9">
                <Card className="m-1">
                  <CardBody>
                    <CardText>{oneMsg.msgText}</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>;
          } else {
            console.log("no");
            return <div className="row">
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
        return friend.uid === parseInt(this.props.friendUid,10);
      })[0].msg;

    return (
      <div className="row">
        <div className="container-fluid">
          <AllMsgWithId msg={msg}/>
        </div>
      </div>
    );
  }
}

export default ChatRoomBody;