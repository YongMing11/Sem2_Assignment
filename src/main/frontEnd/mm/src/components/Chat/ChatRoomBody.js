import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

class ChatRoomBody extends Component {
  render() {
    return (
      <div className="row h-100 bg-primary ">
        <div className="container-fluid">
        {/* why the below w-100 shrink the width of row indeed? */}
          {/* <div className="row w-100 bg-success"> */}
          <div className="row my-1 bg-success">
            <div className="col-9">
              <Card className="">
                <CardBody>
                  <CardText>This is text inside a card</CardText>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="offset-3 col-9">
              <Card className="">
                <CardBody>
                  <CardText>This is text inside a card</CardText>
                </CardBody>
              </Card>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ChatRoomBody;