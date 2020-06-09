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
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  toggleModal() {
    console.log("toggle!");
    this.setState(state => {
      return { isModalOpen: !state.isModalOpen }
    });
  }

  handleInputChange(event){
    this.props.handleProfileChange(event);
    // event.preventDefault();
    // const target = event.target;
    // const name = target.name;
    // const value = target.value;

    // this.setState({
    //   [name]:value
    // });
  }

  handleSubmit(event){
    event.preventDefault();
  }

  // handleToggle(event) {
  //   this.toggleModal();
  //   //call API of updating user profile via this.props.api
  //   event.preventDefault();
  // }

  render() {

    const user = this.props.user;

    return (
      <>
        <div className="row orange">
          <div className="col-12 py-3 d-flex justify-content-between">
            <h4>Basic Info</h4>
            <Button className="fa fa-edit fa-md bg-dark" onClick={this.toggleModal}></Button>
          </div>
          <div className="col-12">
            <OneDetail item={`Gender`}value={user.gender}/>
            <OneDetail item={`Age`}value={user.age}/>
            <OneDetail item={`Contact`}value={user.contact}/>
            <OneDetail item={`Address`}value={user.address}/>
          </div>
          <div className="col-12">
            <OneDetail item={`Favorite Sport`}value={user.interests.favSport}/>
            <OneDetail item={`Favorite Music`}value={user.interests.favMusic}/>
            <OneDetail item={`Favorite Food`}value={user.interests.favFood}/>
          </div>
        </div>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Edit Basic Info</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="gender">Gender</Label>
                <Input type="text" id="gender" name="gender" value={user.gender} onChange={this.handleInputChange} />
              </FormGroup>
              <Button type="submit" value="submit" color="primary" onClick={this.toggleModal}>Done</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Info;