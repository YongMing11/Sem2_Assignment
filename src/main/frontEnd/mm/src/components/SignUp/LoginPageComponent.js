import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, FormFeedback, FormGroup, Button } from 'reactstrap';
import { Tantan, Tinder } from '../../shared/user';
import { postTantan, postTinder } from '../../HTTPRequest';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      touched: {
        email: false,
        password: false
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    alert("Welcome Back to MeowMeow World !\n" + JSON.stringify(this.state));
    //call api and put a alert box to show the result
    // history.push("/signup/register");
    event.preventDefault();
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  }

  validate(email, password) {
    const errors = {
      email: '',
      password: ''
    }
    const emailRegex = /\w+@\w+[.]\w+/;
    if (this.state.touched.email && !emailRegex.test(email)) {
      errors.email = "Email format invalid";
    } else {
      errors.email = '';
    }

    if (this.state.touched.password && password.length === 0)
      errors.password = "Password length should be not be 0"
    else {
      errors.password = '';
    }

    return errors;
  }

  render() {
    const errors = this.validate(this.state.email, this.state.password);
    return (
      <div className="container h-100">
        <div className="row light-orange h-100">
          <div className="col-12 p-3 py-5">
            <Form className="Login">
              <FormGroup>
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
              <FormGroup>
                <Input type="text" id="loginPassword" required placeholder="Password"
                  name="password"
                  value={this.state.password}
                  valid={errors.password === ''}
                  invalid={errors.password !== ''}
                  onBlur={this.handleBlur('password')}
                  onChange={this.handleInputChange} ></Input>
                <FormFeedback>{errors.password}</FormFeedback>
              </FormGroup>
              <div className="col-12 p-3 d-flex flex-row justify-content-center">
                <button type="text" id="login" className="bg-warning" onClick={this.handleSubmit}>Log In</button>
              </div>
            </Form>
          </div>
          <div className="col-12 text-center">
            <p className="message">Haven't Registered?</p>
          </div>

          <div className="col-12 pt-0 d-flex flex-row justify-content-center">
            <Link to='/signup'>
              <button to="/signup" className="registerButton" type="text" id="register">Sign Up</button>
            </Link>
          </div>

          <div className="col-12">&nbsp;</div>
          <div className="col-12 text-center ">
            <p className="message" > ------ or connect with------ </p>
          </div>

          <div className="col-12 d-flex flex-row justify-content-center w-100">
              <Link to="/tantansignup" className="w-100">
                <button className="tantan" type="text" >
                </button>
              </Link>
            {/* <div> */}
              <Link to="/tindersignup" className="w-100">
                <button className="tinder" type="text">
                </button>
              </Link>
            {/* </div> */}
          </div>
        </div>
      </div>

    );
  }
}

export default Login;

