import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';
import { CHATS } from '../../shared/chats';

class ChatRoomBody extends Component {

  render() {
    const { msg } = this.props;
    console.log(Array.isArray(msg));
    const AllMsgWithId = ({msg}) => {
      if(msg){
        return (
          msg.slice(0).reverse().map((oneMsg) => {
            if (oneMsg.byMe) {
              return <div key={oneMsg.timestamp} className="row">
                <div className="offset-3 col-9">
                  <Card className="m-1">
                    <CardBody>
                      <CardText>{oneMsg.msgText}</CardText>
                    </CardBody>
                  </Card>
                </div>
              </div>;
            } else {
              return <div key={oneMsg.timestamp} className="row">
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
      }else{
        return (<></>);
      }
    }

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