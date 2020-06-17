import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class ChatBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      text:""
    }
    this.addText = this.addText.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  addText() {
    //wait parent to pass sendMessage props
    console.log("addText!");
    this.props.sendMessage(`MSG ${this.props.friendUsername} `,this.state.text);
    this.setState({
      text:""
    })
  }

  render() {
    return (
      <div className="row align-items-center fixed-bottom-above orange p-2">
        <div className="offset-1 col-8">
          <Form>
            <FormGroup className="m-auto">
              <Input 
                type="text" 
                name="text" 
                id="text" 
                placeholder="Write Message" 
                value={this.state.text} 
                onChange={this.handleInputChange} />
            </FormGroup>
          </Form>
        </div>
        <div className="col-3">
          <Button outline type="submit" className="bg-light"  onClick={this.addText}>
            <span className="fa fa-send fa-lg rounded-circle"></span>
          </Button>
        </div>
      </div>

    );
  }
}

export default ChatBar;