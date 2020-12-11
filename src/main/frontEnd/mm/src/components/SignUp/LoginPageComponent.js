import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input, FormFeedback, FormGroup, Button } from 'reactstrap';
import { login } from '../../HTTPRequest';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailOrusername: '',
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
    const { emailOrusername, password } = this.state;
    event.preventDefault();
    if(emailOrusername === "" || password === ""){
      alert("Please fill in the email and password Meow");
    }else{
      login(emailOrusername,password).then(responseData => {
        console.log("This is what being responsed: " + responseData);
        if(responseData){
          console.log("push");
          this.props.swapLoggedIn();
          //here may pass username or email, and uuid
          this.props.setUsername(this.state.emailOrusername,responseData);
          console.log("UUID: " + this.props.uuid);
          this.props.history.push('/find');
        }else{
          alert("Wrong email, username or password.");
        }
      });
    }
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
    if (this.state.touched.password && password.length === 0)
      errors.password = "Password length should be not be 0"
    else {
      errors.password = '';
    }
    return errors;
  }

  render() {
    // console.log("The user is logged in: "+this.props.isLoggedIn);
    if(this.props.isLoggedIn){
      return (
        <Redirect to="/find" />
      );
    }
    const errors = this.validate(this.state.emailOrusername, this.state.password);
    return (
      <div className="container">
        <img className="loveicon" src="https://www.flaticon.com/svg/static/icons/svg/3237/3237433.svg"/>
            <Form className="Login">
              <FormGroup>
                <Input type="text" id="email" required
                  placeholder="Email Address/Username"
                  name="emailOrusername"
                  value={this.state.emailOrusername}
                  // valid={errors.email === ''}
                  invalid={errors.email !== ''}
                  onBlur={this.handleBlur('email')}
                  onChange={this.handleInputChange} ></Input>
                <FormFeedback>{errors.email}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Input type="password" id="loginPassword" required 
                placeholder="Password"
                  name="password"
                  value={this.state.password}
                  // valid={errors.password === ''}
                  invalid={errors.password !== ''}
                  onBlur={this.handleBlur('password')}
                  onChange={this.handleInputChange} ></Input>
                <FormFeedback>{errors.password}</FormFeedback>
              </FormGroup>

              <div className="col-12 p-3 d-flex flex-row justify-content-center">
                <button type="text" onClick={this.handleSubmit}>Log In</button>
              </div>

            </Form>

          <div className="text-center">
            <p className="message">Haven't Registered?</p>
            <Link to='/signup'>
              <p className="redMessage">CREATE ACCOUNT</p>
            </Link>
          </div>

          <hr></hr>
          <div className="text-center ">
            <p className="message" >or connect with</p>
          </div>

          <div className="alternativeLogin">
            <Link to="/tantansignup" className="alternativeLoginButton">
              <button className="tantan" type="text" >
              </button>
            </Link>
            <Link to="/tindersignup" className="alternativeLoginButton">
              <button className="tinder" type="text">
              </button>
            </Link>
          </div>
      </div>

    );
  }
}

export default Login;

