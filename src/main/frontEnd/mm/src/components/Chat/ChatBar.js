import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Card, CardBody, CardText } from 'reactstrap';

class ChatBar extends Component {

  constructor(props){
    super(props);
    this.addText = this.addText.bind(this);
  }

  addText(msg) {
    const chatMsg = document.querySelector('.chatMsg');
    chatMsg.innerHTML += (<div key={msg.id} className="row">
      <div className="offset-3 col-9">
        <Card className="m-1">
          <CardBody>
            <CardText>{msg.msgText}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>);
  }

  render() {
    return (
      <div className="row align-items-center fixed-bottom orange p-2">
        <div className="offset-1 col-8">
          <Form>
            <FormGroup className="m-auto">
              <Input type="email" name="email" id="text" placeholder="Write Message" />
            </FormGroup>
          </Form>
        </div>
        <div className="col-3">
          <Button outline className="bg-light" onClick={this.addText}>
            <span className="fa fa-send fa-lg rounded-circle"></span>
          </Button>
        </div>
      </div>

    );
  }
}

export default ChatBar;