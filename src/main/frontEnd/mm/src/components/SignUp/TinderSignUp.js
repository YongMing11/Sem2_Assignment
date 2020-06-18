import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import history from './History';
import { Form, Input, FormFeedback, FormGroup, Label, Col } from 'reactstrap';
import { postTinder, postRegister } from '../../HTTPRequest';
import Interests from '../SignUp/Interests';
import { Tinder } from '../../shared/user';
import Geocode from "react-geocode";

class TinderSignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            username: '',
            email: '',
            password: '',
            sport: '',
            music: '',
            food: '',
            movie: '',
            book: '',
            query: '',
            latitude: '',
            longitude: '',
            touched: {
                email: false,
                password: false,
                query:false
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.codeAddress = this.codeAddress.bind(this);
        // this.validateIfEmpty = this.validateIfEmpty.bind(this);
    }

    componentDidMount() {
        postTinder(Tinder).then(responseData => {
            console.log(responseData);
            this.setState({
                user: responseData
            });

        })
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    codeAddress = (address) => {
        const age = 2020 - Number(this.state.user.userProfile.birthDate.substring(6));
        Geocode.setApiKey("AIzaSyAksVZB4RHHEdtF96HB4qpKHRVGWKdFlIo");
        Geocode.setLanguage("en");
        Geocode.fromAddress(address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(`Based on the address, this is the coordinate: lat = ${lat} long = ${lng}`);
                const user = {
                    "userProfile": {
                        ...this.state.user.userProfile,
                        "username": this.state.username,
                        "age": String(age),
                        "address": this.state.query,
                        "interests": {
                            "sport": this.state.sport,
                            "music": this.state.music,
                            "food": this.state.food,
                            "movie": this.state.movie,
                            "book": this.state.book
                        }
                    },
                    "loginCredentials": {
                        "username": this.state.username,
                        "email": this.state.email,
                        "password": this.state.password
                    },
                    "coordinate": {
                        "lat": String(lat),
                        "lon": String(lng)
                    }
                }
                console.log("post below data to /register");
                console.log(user);
                postRegister(user).then(responseData => {
                    console.log("Registration using Tinder Account successfully: " + responseData);
                    if (responseData !== true) {
                        console.log("Email or username has been used by other user");
                    }
                });
            },
            error => {  //no address input
                console.error(error);
            }
        );
    }

    handleSubmit(username,email,password,query,event) {
        if (username.length === 0||password.length === 0||email.length === 0||query.length===0) {
            alert("username, email, password or address should not be empty");
            event.preventDefault();
        }else{
            this.codeAddress(this.state.query);
        }
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(username, email, password, query) {
        const errors = {
            username: '',
            email: '',
            password: '',
            query: ''
        }
        if (this.state.touched.username && username.length < 5) {
            errors.username = "Username must have at least 5 characters"
        }
        const emailRegex = /^\w+@\w+[.]\w+$/;
        if (this.state.touched.email && !emailRegex.test(email))
            errors.email = "Please input valid email format";
        else {
            errors.email = '';
        }

        if (this.state.touched.password && (password.length < 6 || password.length > 10))
            errors.password = "Password length should be in the range of 6-10"
        else {
            errors.password = '';
        }
        if (this.state.touched.query && (query.split(/[\s,]+/).filter(x => (x === 'Jalan' || x === 'Lorong')).length !== 1 ||
            query.split(/[\s,]+/).filter(x => (x === 'Taman')).length !== 1 ||
            query.split(/[\s,]+/).filter(x => x.match(/\b\d{5}\b/g)).length !== 1))
            errors.query = "Living Address should contain Jalan, Taman and Postcode(5 digit), if any of them is not within the address, you can still sign up but the coordinate may not be accurate.";
        else errors.query = '';
        return errors;
    }

    render() {
        if (this.state.user) {
            const errors = this.validate(this.state.username, this.state.email, this.state.password, this.state.query);
            return (
                <div className="container">
                    <div className="row light-orange">
                        <div className="col-12 p-3 py-4">
                            <Form>
                            <h2 className="pb-2">Tinder Sign Up</h2>
                                <FormGroup>
                                    <Input type="text" id="username"
                                        placeholder="Username"
                                        name="username"
                                        value={this.state.username}
                                        // valid={errors.username === ''}
                                        invalid={errors.username !== ''}
                                        onBlur={this.handleBlur('username')}
                                        onChange={this.handleInputChange} >
                                    </Input>
                                    <FormFeedback>{errors.username}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Input type="text" id="email"
                                        placeholder="Email Address"
                                        name="email"
                                        value={this.state.email}
                                        // valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange} >
                                    </Input>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Input type="password" id="loginPassword"
                                        placeholder="New Password"
                                        name="password"
                                        value={this.state.password}
                                        // valid={errors.password === ''}
                                        invalid={errors.password !== ''}
                                        onBlur={this.handleBlur('password')}
                                        onChange={this.handleInputChange} ></Input>
                                    <FormFeedback>{errors.password}</FormFeedback>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor="livingAddress" className="col-12">Living Address</Label>
                                    <Col md={8}>
                                        <Input type="textarea" id="query" name="query"
                                            rows="6"
                                            placeholder="must contains Jalan/Lorong, Taman, Postcode"
                                            value={this.state.query}
                                            // valid={errors.query === ''}
                                            invalid={errors.query !== ''}
                                            onBlur={this.handleBlur('query')}
                                            onChange={this.handleInputChange}>
                                        </Input>
                                        <FormFeedback>{errors.query}</FormFeedback>
                                    </Col>
                                </FormGroup>

                                <Interests handleInputChange={(event)=>{
                                    this.handleInputChange(event);
                                    }}/>

                                <div className="col-12 d-flex flex-row justify-content-center">
                                    <Link to="/find">
                                        <button type="sign up" id="signUp" className="bg-warning"
                                            onClick={(event)=>{
                                            this.handleSubmit(this.state.username,this.state.email,this.state.password,this.state.query,event);
                                            }}>Sign Up!</button>
                                    </Link>
                                </div>
                            </Form>
                        </div>

                        <div className="col-12 text-center">
                            <p className="message"> Already Registered ? </p>
                        </div>
                        <div className="col-12 pt-0 d-flex flex-row justify-content-center">
                            <Link to='/login'>
                                <button className="loginButton" type="text" id="register">Log In</button>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default TinderSignUp;