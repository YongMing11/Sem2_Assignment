import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg } from 'reactstrap';
// import image from '../../../images/GenericProfilePic.png';

class OneCard extends Component {

  render() {
    return (
      <>
        <Card>
          <CardImg top width="100%" src={this.props.img} alt="Card image cap" />
          <CardBody>
            <CardText className="text-center">{this.props.name}</CardText>
            <CardText className="text-center">{this.props.age} years old</CardText>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default OneCard;