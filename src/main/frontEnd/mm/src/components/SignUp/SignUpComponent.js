import React, { Component } from 'react';
import Geocode from "react-geocode";
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';
import { postRegister } from '../../HTTPRequest';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            username: '',
            email: '',
            password: '',
            interests: {
                sport: "",
                music: "",
                food: "",
                movie: "",
                book: ""
            },
            picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            gender: 'Male',
            birthDate: '',
            telnum: '',
            query: '',
            apikey: 'Your API Key',
            latitude: '',
            longitude: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.codeAddress = this.codeAddress.bind(this);
        this._next = this._next.bind(this);
    }

    _next(username, email, password, event) {
        if (password.length === 0 || email.length === 0 || username.length === 0) {
            alert("The inputs can't be empty");
            event.preventDefault();
        } else {
            console.log("Set to 2");
            this.setState({
                currentStep: 2
            })
        }
    }

    codeAddress = (address, event) => {
        Geocode.setApiKey("Insert Your GCP Geocode API key here");
        Geocode.setLanguage("en");
        Geocode.fromAddress(address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(`Based on the address, this is the coordinate: lat = ${lat} long = ${lng}`);
                const { username, email, password, gender, birthDate, telnum, query } = this.state;
                const { sport, music, food, movie, book } = this.state.interests;
                const age = 2020 - Number(birthDate.substring(6));
                const user = {
                    "userProfile": {
                        "username": username,
                        "gender": gender,
                        "age": null,
                        "birthDate":birthDate,
                        "contact": telnum,
                        "address": query,
                        "interests": {
                            "sport": sport,
                            "music": music,
                            "food": food,
                            "movie": movie,
                            "book": book
                        }
                    },
                    "loginCredentials": {
                        "username": username,
                        "email": email,
                        "password": password
                    },
                    "coordinate": {
                        "lat": String(lat),
                        "lon": String(lng)
                    }
                };
                console.log("post below data to /register");
                console.log(user);
                console.log(JSON.stringify(user));
                postRegister(user).then(responseData => {
                    console.log("Registration successfully: " + responseData);
                    if (responseData !== true) {
                        alert("Email or username has been used by other user");
                        event.preventDefault();
                    }
                });
            },
        );
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        if(name === "sport"||name==="music"||name==="food"||name==="movie"||name==="book"){
            this.setState({
                interests:{
                    ...this.state.interests,
                    [name]: value
                }
            });
        }else{
            this.setState({
                [name]: value
            });
        }
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    handleSubmit(birthdate, telnum, query, event) {
        if (birthdate.length === 0 || telnum.length === 0 || query.length === 0) {
            alert("The inputs can't be empty");
            event.preventDefault();
        } else {
            this.codeAddress(this.state.query, event);
        }
    }

    render() {
        const { sport, music, food, movie, book } = this.state.interests;
        const { currentStep,username, email, password, gender, birthDate, telnum, query, latitude, longitude } = this.state;
        console.log("in sign up comp:" + birthDate);
        return (
            <>
                <SignUpStep1
                    currentStep={currentStep}
                    username={username}
                    email={email}
                    password={password}
                    handleInputChange={this.handleInputChange}
                    handleBlur={this.handleBlur}
                    _next={this._next} />
                <SignUpStep2
                    currentStep={currentStep}
                    // currentStep={2}
                    gender={gender}
                    birthDate={birthDate}
                    telnum={telnum}
                    query={query}
                    sport={sport}
                    music={music}
                    food={food}
                    movie={movie}
                    book={book}
                    handleInputChange={this.handleInputChange}
                    handleBlur={this.handleBlur}
                    handleSubmit={this.handleSubmit} />
            </>
        );
    }
}

export default SignUp;
