import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

class ChatRoomBody extends Component {
  render() {
    return (
      <div className="row">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9">
              <Card className="m-1">
                <CardBody>
                  <CardText>This is text inside a card</CardText>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="offset-3 col-9">
              <Card className="m-1">
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