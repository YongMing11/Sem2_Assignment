import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, FormFeedback, FormGroup } from 'reactstrap';


class SignUpStep1 extends Component {

    render() {
      if(this.props.currentStep!==1){
        return(
          <></>
        );
      }
      const { username, email, password } = this.props;
      const { validatePage1, handleBlur, handleInputChange, _next } = this.props;
        const errors = validatePage1(username, email, password);
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
                                    onBlur={handleBlur('username')}
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
                                    onBlur={handleBlur('email')}
                                    onChange={handleInputChange} ></Input>
                                <FormFeedback>{errors.email}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Input type="text" id="loginPassword"
                                    placeholder="New Password"
                                    name="password"
                                    value={password}
                                    // valid={errors.password === ''}
                                    invalid={errors.password !== ''}
                                    onBlur={handleBlur('password')}
                                    onChange={handleInputChange} ></Input>
                                <FormFeedback>{errors.password}</FormFeedback>
                            </FormGroup>
                            <div className="col-12 d-flex flex-row justify-content-center">
                                {/* <Link to="/signupdetails"> */}
                                    <button className="bg-warning" 
                                    onClick={_next}>Fill in Details</button>
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