import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup } from 'reactstrap';
import OneDetail from './OneDetailComponent';

class Info extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  toggleModal() {
    this.setState(state => {
      return { isModalOpen: !state.isModalOpen }
    });
  }

  handleEdit(event) {
    this.toggleModal();
    alert("Username: ");
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="row orange">
          <div className="col-12 py-3 d-flex justify-content-between">
            <h3>Basic Info</h3>
            <Button className="fa fa-edit fa-lg bg-dark" onClick={this.toggleModal}></Button>
          </div>
          <div className="col-12">
            <OneDetail />
            <OneDetail />
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Edit Basic Info</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleEdit}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">Login</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Info;