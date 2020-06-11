import React, { Component } from 'react';
import { Card, CardImg, Form, FormGroup, FormFeedback, Col, Input, Label, Button } from 'reactstrap';
import * as opencage from 'opencage-api-client';
import { Link } from 'react-router-dom';


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            gender: '',
            birthdate: '',
            telnum: '',
            sport: '',
            music: '',
            food: '',
            movie:'',
            book:'',
            query: '',
            apikey: '99f8f42735854ae7bff77ad5fe37d8ef',
            latitude: '',
            longitude: '',
            touched: {
                birthdate: false,
                telnum: false,
                query: false
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayPicture = this.displayPicture.bind(this);
        this.handleCoordinate = this.handleCoordinate.bind(this);
    }

    displayPicture(e) {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState(
                    { picture: reader.result }
                );
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    handleCoordinate(event) {
        // event.preventDefault();
        opencage
            .geocode({ key: this.state.apikey, q: this.state.query })
            .then(response => {
                console.log("below is the location");
                console.log(response.results[0].geometry);
                this.setState({
                    latitude: response.results[0].geometry.lat,
                    longitude: response.results[0].geometry.lng
                });
            })
            .catch(err => {
                console.error(err);
                // alert('Please check your Living Address');
            });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ?
            target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.handleCoordinate(event);
        alert("Welcome to MeowMeow World !\n" + JSON.stringify(this.state));
        //INSERT BACKEND VERIFICATION
        //show the result of registration, success or fail
        // event.preventDefault();
        alert("We assume login successfully.")
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(birthdate, telnum, query) {
        const errors = {
            birthdate: '',
            telnum: '',
            query: ''
        }
        console.log(this.state.touched.birthdate + " here");
        if (!this.state.touched.birthdate || (birthdate.split('/').filter(x => (isNaN(x))).length !== 0)) {
            errors.birthdate = "Invalid format"
        } else errors.birthdate = '';

        if (!this.state.touched.telnum || isNaN(telnum)) {
            errors.telnum = "Tel number only contains digits"
        } else errors.telnum = '';

        if (!this.state.touched.query || (query.split(/[\s,]+/).filter(x => (x === 'Jalan' || x === 'Lorong')).length !== 1 ||
            query.split(/[\s,]+/).filter(x => (x === 'Taman')).length !== 1 ||
            query.split(/[\s,]+/).filter(x => x.match(/\b\d{5}\b/g)).length !== 1))
            errors.query = "Living Address should contain Jalan, Taman and Poscode(5 digit)";
        else errors.query = '';

        return errors;
    }

    render() {
        const errors = this.validate(this.state.birthdate, this.state.telnum, this.state.query);

        return (
            <div className="container">
                <div className='col-12 col-md-6' id="registerForm">
                    <div className='col-12 text-center'>
                        <h4>Complete your profile</h4>
                    </div>

                    <Form>

                        <FormGroup row>
                            <Label htmlFor="picture" md={3}>Profile Picture</Label>
                            <Col md={{ size: 3 }}>
                                <Card id="img-holder">
                                    <CardImg src={this.state.picture} alt="Profile Picture"></CardImg>
                                </Card>
                                <Input type="file" name="picture"
                                    accept="image/*"
                                    onChange={this.displayPicture}>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="gender" md={3}>Gender</Label>
                            <Col md={{ size: 3 }}>
                                <Input type="select" name="gender"
                                    value={this.state.gender}
                                    onChange={this.handleInputChange}>
                                    <option>Male</option>
                                    <option>Female</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="birthdate" md={3}>Birthdate</Label>
                            <Col md={8}>
                                <Input type="text" id="birthdate" name="birthdate"
                                    placeholder="DD/MM/YYYY"
                                    value={this.state.birthdate}
                                    valid={errors.birthdate === ''}
                                    invalid={errors.birthdate !== ''}
                                    onBlur={this.handleBlur('birthdate')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.birthdate}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="telnum" md={3}>Contact Tel.</Label>
                            <Col md={8}>
                                <Input type="tel" id="telnum" name="telnum"
                                    placeholder="0112223333"
                                    value={this.state.telnum}
                                    valid={errors.telnum === ''}
                                    invalid={errors.telnum !== ''}
                                    onBlur={this.handleBlur('telnum')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>

                        {console.log(errors.query)}
                        
                        <FormGroup row>
                            <Label htmlFor="livingAddress" md={3}>Living Address</Label>
                            <Col md={8}>
                                <Input type="textarea" id="query" name="query"
                                    rows="6"
                                    placeholder="must contains Jalan/Lorong, Taman, Postcode"
                                    value={this.state.query}
                                    valid={errors.query === ''}
                                    invalid={errors.query !== ''}
                                    onBlur={this.handleBlur('query')}
                                    onChange={this.handleInputChange}></Input>

                                <FormFeedback>{errors.query}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="interest" md={3}>Interests</Label>
                            <Col md={{ size: 5 }}>
                                <Input type="select" name="sport"
                                    value={this.state.sport}
                                    onChange={this.handleInputChange}>
                                    <option>--No Fav Sport--</option>
                                    <option>Basketball</option>
                                    <option>Volleyball</option>
                                    <option>Jogging</option>
                                    <option>Futsal</option>
                                    <option>Table Tennis</option>
                                    <option>E-sports</option>
                                    <option>Not in the list</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={{ size: 5, offset: 3 }}>
                                <Input type="select" name="music"
                                    value={this.state.music}
                                    onChange={this.handleInputChange}>
                                    <option>--No Fav Music--</option>
                                    <option>Alternative</option>
                                    <option>Pop</option>
                                    <option>Rock</option>
                                    <option>Dance/Electronic/House</option>
                                    <option>Soundtracks</option>
                                    <option>Hip-Hop/Rap/Trap</option>
                                    <option>Not in the list</option>

                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={{ size: 5, offset: 3 }}>
                                <Input type="select" name="food"
                                    value={this.props.food}
                                    onChange={this.handleInputChange}>
                                    <option>--No Fav Food--</option>
                                    <option>Rendang</option>
                                    <option>Sushi</option>
                                    <option>Dim sum</option>
                                    <option>Ramen</option>
                                    <option>Kimchi</option>
                                    <option>Ice cream</option>
                                    <option>Not in the list</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={{ size: 5, offset: 3 }}>
                                <Input type="select" name="movie"
                                    value={this.state.movie}
                                    onChange={this.handleInputChange}>
                                    <option>--No Fav Movie--</option>
                                    <option>Action</option>
                                    <option>Comedy</option>
                                    <option>Crime</option>
                                    <option>Horror</option>
                                    <option>Romance</option>
                                    <option>Sci-fi</option>
                                    <option>Not in the list</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={{ size: 5, offset: 3 }}>
                                <Input type="select" name="book"
                                    value={this.state.book}
                                    onChange={this.handleInputChange}>
                                    <option>--No Fav Book--</option>
                                    <option>Adventure</option>
                                    <option>Biography</option>
                                    <option>Classics</option>
                                    <option>Crime</option>
                                    <option>Horror</option>
                                    <option>Romance</option>
                                    <option>Not in the list</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row className='col-12'>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Link to="/find">
                                    <Button type="submit" color="primary" 
                                    onClick={()=>{this.handleSubmit();
                                    // this.validate(this.state.birthdate, this.state.telnum, this.state.query);
                                    }}>
                                        Let's Start
                                    </Button>
                                </Link>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>

        );
    }
}

export default Register;