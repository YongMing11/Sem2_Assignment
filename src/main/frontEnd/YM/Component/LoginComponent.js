import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Form, Input, FormFeedback,FormGroup} from 'reactstrap';
import history from "./History";

class Login extends Component {
    constructor(props){
        super(props);

        this.state={
            email: '',
            password:'',
            touched:{
                email: false,
                password: false
            }
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    handleInputChange(event){
        const target = event.target;
        const value = target.type==='checkbox'?
        target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    } 
    
    handleSubmit(event){
        alert("Welcome Back to MeowMeow World !\n"+JSON.stringify(this.state));
        history.push("/signup/register");
        event.preventDefault();
    }

    handleBlur=(field) =>(evt)=>{
        this.setState({
            touched:{...this.state.touched, [field]:true}
        });
    }

    validate(email,password){
        const errors={
            email:'',
            password: ''
        }
        if(this.state.touched.email && email.split('').filter(x=>x==='@').length !== 1)
            errors.email = "Email should contain a @";
        else{
            errors.email = '';
        }

        if(this.state.touched.password && (password.length<5 || password.length>10))
            errors.password="Password length should be in the range of 5-10"
        else{
            errors.password = '';
        }

        return errors;
    }

    render() {
            const errors = this.validate(this.state.email,this.state.password);
        return ( 
            <div className="container">
            <div className="wrapper">
                <h1 id="header">MeowMeow</h1>
                <Form className="Login">
                    <FormGroup row className="col-12">
                        <Input type="text" id="email" required 
                            placeholder="Email Address"
                            name="email"
                            value={this.state.email}
                            valid={errors.email === ''}
                            invalid={errors.email !== ''}
                            onBlur={this.handleBlur('email')}
                            onChange={this.handleInputChange} ></Input>
                        <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup row className="col-12">
                        <Input type="text" id="loginPassword" required placeholder="Password"
                            name="password"
                            value={this.state.password}
                            valid={errors.password === ''}
                            invalid={errors.password !== ''}
                            onBlur={this.handleBlur('password')}
                            onChange={this.handleInputChange} ></Input>
                        <FormFeedback>{errors.password}</FormFeedback>
                    </FormGroup>
                    <button type="text" id="login" onClick={this.handleSubmit}>Log In</button> 
                </Form>
                    <p className="message" > Haven 't Registered?</p> 
                    <Link to='/signup'>
                        <button className="registerButton" type="text" id="register">Sign Up</button> 
                    </Link>
                    <p className="message" > ------ or connect with------ </p> 

                <Form className="otherApps">
                        <button className="tantan" type="text" id="tantan" href="https://tantanapp.com/en" />
                        <button className="tinder" type="text" id="tinder" href="https://tinder.com/" />
                    </Form>
            </div>
            </div>
           
        );
    }
}

export default Login;

