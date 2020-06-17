import React, { Component } from 'react';
import Geocode from "react-geocode";
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 1,
            username: '',
            email: '',
            password: '',
            touched: {
                username: false,
                email: false,
                password: false,
                birthdate: false,
                telnum: false,
                query: false
            },
            picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            gender: '',
            birthdate: '',
            telnum: '',
            query: '',
            apikey: '99f8f42735854ae7bff77ad5fe37d8ef',
            latitude: '',
            longitude: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.codeAddress = this.codeAddress.bind(this);
        this.validatePage1 = this.validatePage1.bind(this);
        this.validatePage2 = this.validatePage2.bind(this);
        this._next = this._next.bind(this);
        // this.validateIfEmpty = this.validateIfEmpty.bind(this);
    }

    _next() {
        console.log("Set to 2");
        this.setState({
            currentStep: 2
        })
    }

    codeAddress = (address) => {
        Geocode.setApiKey("AIzaSyAksVZB4RHHEdtF96HB4qpKHRVGWKdFlIo");
        Geocode.setLanguage("en");
        Geocode.fromAddress(address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(`Based on the address, this is the coordinate: lat = ${lat} long = ${lng}`);
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

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    handleSubmit(event) {
        // event.preventDefault();
        //INSERT BACKEND VERIFICATION
        //show the result of registration, success or fail
    }

    validatePage2(birthdate, telnum, query) {
        const errors = {
            birthdate: '',
            telnum: '',
            query: ''
        }
        console.log(this.state.touched.birthdate + " here");
        const birthdateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
        function isDateBeforeToday(date) {
            return new Date(date.toDateString()) < new Date(new Date().toDateString());
        }
        const day = Number(birthdate.substring(0, 2));
        const month = Number(birthdate.substring(3, 5));
        const year = Number(birthdate.substring(6));
        const beforeToday = isDateBeforeToday(new Date(year, month, day));
        if (this.state.touched.birthdate && birthdateRegex.test(birthdate)) {
            errors.birthdate = "Invalid format";
        } else if (beforeToday) {
            errors.birthdate = 'The date must before today';
        } else errors.birthdate = '';

        if (this.state.touched.telnum && isNaN(telnum)) {
            errors.telnum = "Tel number only contains digits";
        } else errors.telnum = '';

        if (this.state.touched.query && (query.split(/[\s,]+/).filter(x => (x === 'Jalan' || x === 'Lorong')).length !== 1 ||
            query.split(/[\s,]+/).filter(x => (x === 'Taman')).length !== 1 ||
            query.split(/[\s,]+/).filter(x => x.match(/\b\d{5}\b/g)).length !== 1))
            errors.query = "Living Address should contain Jalan, Taman and Poscode(5 digit)";
        else errors.query = '';

        if (birthdate.length === 0) {
            errors.birthdate = "Please input valid format"
        }
        if (telnum.length === 0) {
            errors.telnum = "Please input valid tel num format";
        }
        if (query.length === 0) {
            errors.query = "Living Address should contain Jalan, Taman and Poscode(5 digit)"
        }
        return errors;
    }

    validatePage1(username, email, password) {
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
        // if(password.length === 0){
        //     errors.password = "Password length should be in the range of 6-10"
        // }
        // if(email.length === 0){
        //     errors.email = "Please input valid email format";
        // }
        // if(username.length === 0){
        //     errors.username = "Username must have at least 5 characters"
        // }
        return errors;
    }

    render() {
        return (
            <>
                <SignUpStep1
                    currentStep={this.state.currentStep}
                    username={this.state.username}
                    email={this.state.email}
                    password={this.state.password}
                    validatePage1={this.validatePage1}
                    handleInputChange={this.handleInputChange}
                    handleBlur={this.handleBlur}
                    _next={this._next} />
                <SignUpStep2
                    currentStep={this.state.currentStep}
                    gender={this.state.gender}
                    birthdate={this.state.birthdate}
                    telnum={this.state.telnum}
                    query={this.state.query}
                    validatePage2={this.validatePage2}
                    handleInputChange={this.handleInputChange}
                    handleBlur={this.handleBlur}
                    handleSubmit={this.handleSubmit} />
            </>
        );
    }
}

export default SignUp;