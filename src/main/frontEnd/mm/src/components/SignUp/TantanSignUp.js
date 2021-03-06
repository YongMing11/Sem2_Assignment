import React, { Component } from 'react';
import Geocode from "react-geocode";
import { Link } from 'react-router-dom';
// import history from './History';
import { Form, FormFeedback, FormGroup, Input } from 'reactstrap';
import { postRegister, postTantan } from '../../HTTPRequest';
import { Tantan } from '../../shared/user';
import Interests from '../SignUp/Interests';

class TantanSignUp extends Component {
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
            latitude: '',
            longitude: '',
            touched: {
                email: false,
                password: false,
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.codeAddress = this.codeAddress.bind(this);
        // this.validateIfEmpty = this.validateIfEmpty.bind(this);
    }

    componentDidMount() {
        postTantan(Tantan).then(responseData => {
            this.setState({
                user: responseData
            });
            this.codeAddress(this.state.user.userProfile.address);
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
        Geocode.setApiKey("AIzaSyAksVZB4RHHEdtF96HB4qpKHRVGWKdFlIo");
        Geocode.setLanguage("en");
        Geocode.fromAddress(address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(`Based on the address in Tantan, this is the coordinate: lat = ${lat} long = ${lng}`);
                this.setState({
                    latitude: lat,
                    longitude: lng
                });
            },
            error => {  //no address input
                console.error(error);
            }
        );
    }

    handleSubmit(username, email, password, event) {
        if (username.length === 0 || password.length === 0 || email.length === 0) {
            alert("username, email or password should not be empty");
            event.preventDefault();
        } else {
            const age = 2020 - Number(this.state.user.userProfile.birthDate.substring(6));

            const user = {
                "userProfile": {
                    ...this.state.user.userProfile,
                    "username": this.state.username,
                    "age": null,
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
                    "lat": String(this.state.latitude),
                    "lon": String(this.state.longitude)
                }
            }
            console.log("below is before post register");
            console.log(user);
            postRegister(user).then(responseData => {
                console.log("Registration using tantan successfully: " + responseData);
                if (responseData !== true) {
                    event.preventDefault();
                }
            });
        }
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(username, email, password) {
        const errors = {
            username: '',
            email: '',
            password: '',
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

        return errors;
    }

    render() {
        if (this.state.user) {
            const errors = this.validate(this.state.username, this.state.email, this.state.password);
            return (
                <div className="container">
                    <div className="row light-orange">
                        <div className="col-12 p-3">
                            <Form>
                                <h2 className="pb-2">Tantan Sign Up</h2>
                                <FormGroup>
                                    <Input type="text" id="username"
                                        placeholder="Username"
                                        name="username"
                                        value={this.state.username}
                                        // valid={errors.username === ''}
                                        invalid={errors.username !== ''}
                                        onBlur={this.handleBlur('username')}
                                        onChange={this.handleInputChange}
                                        className="col-md-5" >
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
                                        onChange={(event) => { this.handleInputChange(event); }}
                                        className="col-md-5" >
                                    </Input>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Input type="text" id="loginPassword"
                                        placeholder="New Password"
                                        name="password"
                                        value={this.state.password}
                                        // valid={errors.password === ''}
                                        invalid={errors.password !== ''}
                                        onBlur={this.handleBlur('password')}
                                        onChange={this.handleInputChange}
                                        className="col-md-5" >
                                    </Input>
                                    <FormFeedback>{errors.password}</FormFeedback>
                                </FormGroup>

                                <Interests handleInputChange={(event) => {
                                    this.handleInputChange(event);
                                }} />

                                <div className="col-12 d-flex flex-row justify-content-center">
                                    <Link to="/find">
                                        <button type="sign up" id="signUp" className="bg-warning"
                                            onClick={(event)=>{
                                            this.handleSubmit(this.state.username,this.state.email,this.state.password,event);
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
                    {/* <div className="row fixed-bottom-height light-orange"></div> */}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default TantanSignUp;