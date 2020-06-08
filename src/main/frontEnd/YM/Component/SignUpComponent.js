import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import history from './History';
import {Form, Input, FormFeedback,FormGroup} from 'reactstrap';


class SignUp extends Component {
    constructor(props){
        super(props);

        this.state={
            username:'',
            email: '',
            password:'',
            gender:'',
            telnum:'',
            livingAddress:'',
            sports:'',
            music:'',
            food:'',
            touched:{
                username:false,
                email: false,
                password: false,
                gender:false,
                telnum:false,
                livingAddress:false
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
        alert("Welcome to MeowMeow World !\n"+JSON.stringify(this.state));
        //INSERT BACKEND VERIFICATION
        history.push("/signup/register");
        event.preventDefault();
    }

    handleBlur=(field) =>(evt)=>{
        this.setState({
            touched:{...this.state.touched, [field]:true}
        });
    }

    validate(username,email,password){
        const errors={
            username:'',
            email: '',
            password:'',
            gender:'',
            telnum:'',
            livingAddress:''
        }
        if(this.state.touched.username && username.length<5){
            errors.username="Username must have at least 5 characters"
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
        const errors = this.validate(this.state.username,this.state.email,this.state.password);
        return ( 
            <div className="container">
            <div className="wrapper">
                <h1 id="header">MeowMeow</h1>
                <Form className="register"> 
                    <FormGroup row className="col-12">
                        <Input type="text" id="username" required 
                            placeholder="New Username"
                            name="username"
                            value={this.state.username}
                            valid={errors.username === ''}
                            invalid={errors.username !== ''}
                            onBlur={this.handleBlur('username')}
                            onChange={this.handleInputChange} ></Input>
                        <FormFeedback>{errors.username}</FormFeedback>
                    </FormGroup>

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
                        <Input type="text" id="loginPassword" required placeholder="New Password"
                            name="password"
                            value={this.state.password}
                            valid={errors.password === ''}
                            invalid={errors.password !== ''}
                            onBlur={this.handleBlur('password')}
                            onChange={this.handleInputChange} ></Input>
                        <FormFeedback>{errors.password}</FormFeedback>
                    </FormGroup>
                    <button type="sign up" id="signUp" onClick={this.handleSubmit}> Sign Up </button>
                </Form>
                        <p className="message" > Already Registered ? </p>
                    <Link to='/login'>
                        <button className="loginButton" type="text" id="register">Log In</button> 
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

export default SignUp;