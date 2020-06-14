import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg, Modal, ModalBody, ModalHeader } from 'reactstrap';
import Details from '../../ProfilePage/DetailsComponent';

class OneCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      isModalOpen:false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(){
    this.setState({
      isModalOpen:!this.state.isModalOpen
    });
  }

  render() {
    return (
      <>
        <Card onClick={this.toggleModal}>
          <CardImg top width="100%" src={this.props.img} alt="Card image cap" />
          <CardBody>
            <CardText className="text-center">{this.props.name}</CardText>
            <CardText className="text-center">{this.props.age} years old</CardText>
          </CardBody>
        </Card>
        {/* pop up this when user click the card */}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Info</ModalHeader>
        <ModalBody>
        {/* get the profile info of that user */}
          {/* <Details user={friend} /> */}
          {/* add a button to chat with that user as well */}
        </ModalBody>
      </Modal>
      </>
    );
  }
}

export default OneCard;