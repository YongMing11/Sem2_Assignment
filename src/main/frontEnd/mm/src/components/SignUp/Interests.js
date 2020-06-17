import React, { Component } from 'react';
import { Col, Input, FormGroup, Label } from 'reactstrap';

class Interests extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.handleInputChange(event);
  }

  render() {
    const {sport,music,food,movie,book } = this.props;
    return (
      <>
        <FormGroup row>
          <Label htmlFor="interest" className="col-12">Interests</Label>
          <Col className="col-md-5">
            <Input type="select" name="sport"
              value={sport}
              onChange={this.handleInputChange}>
              <option>--No Fav Sport--</option>
              <option>Basketball</option>
              <option>Volleyball</option>
              <option>Jogging</option>
              <option>Futsal</option>
              <option>Table Tennis</option>
              <option>E-sports</option>
              {/* <option>Not in the list</option> */}
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col className="col-md-5">
            <Input type="select" name="music"
              value={music}
              onChange={this.handleInputChange}>
              <option>--No Fav Music--</option>
              <option>Alternative</option>
              <option>Pop</option>
              <option>Rock</option>
              <option>Dance/Electronic/House</option>
              <option>Soundtracks</option>
              <option>Hip-Hop/Rap/Trap</option>
              {/* <option>Not in the list</option> */}
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col className="col-md-5">
            <Input type="select" name="food"
              value={food}
              onChange={this.handleInputChange}>
              <option>--No Fav Food--</option>
              <option>Rendang</option>
              <option>Sushi</option>
              <option>Dim sum</option>
              <option>Ramen</option>
              <option>Kimchi</option>
              <option>Ice cream</option>
              {/* <option>Not in the list</option> */}
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col className="col-md-5">
            <Input type="select" name="movie"
              value={movie}
              onChange={this.handleInputChange}>
              <option>--No Fav Movie--</option>
              <option>Action</option>
              <option>Comedy</option>
              <option>Crime</option>
              <option>Horror</option>
              <option>Romance</option>
              <option>Sci-fi</option>
              {/* <option>Not in the list</option> */}
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col className="col-md-5">
            <Input type="select" name="book"
              value={book}
              onChange={this.handleInputChange}>
              <option>--No Fav Book--</option>
              <option>Adventure</option>
              <option>Biography</option>
              <option>Classics</option>
              <option>Crime</option>
              <option>Horror</option>
              <option>Romance</option>
              {/* <option>Not in the list</option> */}
            </Input>
          </Col>
        </FormGroup>
      </>
    );
  }
}

export default Interests;