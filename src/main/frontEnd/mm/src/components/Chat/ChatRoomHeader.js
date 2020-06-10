import React, { Component } from 'react';
import { Media, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import image from '../../images/GenericProfilePic.png';
import { USERS } from '../../shared/user';
import Details from '../ProfilePage/DetailsComponent';

class ChatRoomHeader extends Component {

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
    const friend = USERS.filter((user) => {
      return user.uid === parseInt(this.props.friendUid,10);
    })[0];
    return (
      <>
      <div className="row light-orange">
        <Media className="col-9 p-0">
          <Media left>
            <Media object src={image} alt="Generic placeholder image" className="m-2 round-image" />
          </Media>
          <Media body className="m-auto pl-2">
            <Media heading className="m-0 p-0">
              {friend.name}
            </Media>
            {/* put button to trigger a modal here */}
          </Media>
        </Media>
        <div className="col-3">
          <Button outline className="border border-dark rounded-circle bg-light center info-button" onClick={this.toggleModal}>
            <span className="fa fa-info fa-lg"></span>
          </Button>
        </div>
      </div>

      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Info</ModalHeader>
        <ModalBody>
          <Details user={friend} />
        </ModalBody>
      </Modal>
      </>
    );
  }
}

export default ChatRoomHeader;