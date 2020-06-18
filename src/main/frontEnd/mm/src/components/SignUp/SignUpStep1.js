import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, FormFeedback, FormGroup } from 'reactstrap';


class SignUpStep1 extends Component {
    constructor(props){
        super(props);
        this.state={
            touched: {
                username: false,
                email: false,
                password: false
            }
        };
        this.validatePage1=this.validatePage1.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
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
        const emailRegex = /^\w+@\w+([.]\w+)+$/;
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
      if(this.props.currentStep!==1){
        return(
          <></>
        );
      }
      const { username, email, password } = this.props;
      const { handleInputChange, _next } = this.props;
      console.log("Username:" + username);
        const errors = this.validatePage1(username, email, password);
        return (
            <div className="container">
                <div className="row light-orange h-100">
                    <div className="col-12 p-3 py-4">
                        <Form>
                            <FormGroup>
                                <Input type="text" id="username" required="required"
                                    placeholder="New Username"
                                    name="username"
                                    value={username}
                                    // valid={errors.username === ''}
                                    invalid={errors.username !== ''}
                                    onBlur={this.handleBlur('username')}
                                    onChange={handleInputChange} ></Input>
                                <FormFeedback>{errors.username}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Input type="text" id="email"
                                    placeholder="Email Address"
                                    name="email"
                                    value={email}
                                    // valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onBlur={this.handleBlur('email')}
                                    onChange={handleInputChange} ></Input>
                                <FormFeedback>{errors.email}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Input type="password" id="loginPassword"
                                    placeholder="New Password"
                                    name="password"
                                    value={password}
                                    // valid={errors.password === ''}
                                    invalid={errors.password !== ''}
                                    onBlur={this.handleBlur('password')}
                                    onChange={handleInputChange} ></Input>
                                <FormFeedback>{errors.password}</FormFeedback>
                            </FormGroup>
                            <div className="col-12 d-flex flex-row justify-content-center">
                                {/* <Link to="/signupdetails"> */}
                                    <button className="bg-warning" 
                                    onClick={(event)=>{_next(username, email, password,event);}}>Fill in Details</button>
                                {/* </Link> */}
                            </div>
                        </Form>
                    </div>

                    <div className="col-12 text-center">
                        <p className="message"> Already Registered ? </p>
                    </div>
                    <div className="col-12 pt-0 pb-2 d-flex flex-row justify-content-center">

                        <Link to='/login'>
                            <button className="loginButton" type="text" id="register">Log In</button>
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default SignUpStep1;