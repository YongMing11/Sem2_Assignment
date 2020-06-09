import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class ChatBar extends Component {
  render() {
    return (
      <div className="row align-items-center fixed-bottom-above bg-dark p-2">
        <div className="offset-1 col-8">
          <Form>
            <FormGroup className="m-auto">
              <Input type="email" name="email" id="text" placeholder="Write Message" />
            </FormGroup>
          </Form>
        </div>
        <div className="col-3">
          <Button outline className="bg-light">
            <span className="fa fa-send fa-lg rounded-circle"></span>
          </Button>
        </div>
      </div>

    );
  }
}

export default ChatBar;