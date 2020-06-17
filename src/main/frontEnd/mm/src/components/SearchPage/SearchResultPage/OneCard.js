import React, { Component } from 'react';
import { Card, CardBody, CardText, Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import Details from '../../ProfilePage/DetailsComponent'
import { getProfile } from '../../../HTTPRequest';

class OneCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      isModalOpen:false,
      user:""
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(){
    this.setState({
      isModalOpen:!this.state.isModalOpen
    });
  }

  componentDidMount(){
    getProfile(this.props.name).then(response => {
      this.setState({
        user:response
      });
    });
  }

  render() {
    console.log(this.state.user);
    return (
      <>
        <Card onClick={this.toggleModal}>
          {/* <CardImg top width="100%" src={this.props.img} alt="Card image cap" /> */}
          <CardBody>
            <CardText className="text-center">{this.props.name}</CardText>
            <CardText className="text-center">Both of you having same interests in {this.props.match} area(s)!</CardText>
            <CardText className="text-center">{this.props.distance} km away</CardText>
          </CardBody>
        </Card>

        {/* pop up this when user click the card */}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Info</ModalHeader>
        <ModalBody>
        {/* get the profile info of that user */}
          <Details user={this.state.user} />
          <Button className="bg-info">Let's Chat!</Button>
        </ModalBody>
      </Modal>
      </>
    );
  }
}

export default OneCard;