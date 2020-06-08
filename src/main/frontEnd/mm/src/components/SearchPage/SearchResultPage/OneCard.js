import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';
import image from '../../../images/GenericProfilePic.png';

class OneCard extends Component {

  render() {
    return (
      <>
        <Card>
          <CardImg top width="100%" src={image} alt="Card image cap" />
          <CardBody>
            <CardText className="text-center">Name</CardText>
            <CardText className="text-center">Age Location</CardText>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default OneCard;