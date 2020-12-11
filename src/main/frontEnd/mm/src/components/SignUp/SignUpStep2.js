import React, { Component } from 'react';
import { Form, FormGroup, FormFeedback, Col, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Interests from './Interests';

class SignUpStep2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            touched: {
                birthdate: false,
                telnum: false,
                query: false
            }
        };
        this.validatePage2 = this.validatePage2.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    validatePage2(birthdate, telnum, query) {
        const errors = {
            birthdate: '',
            telnum: '',
            query: ''
        }

        const birthdateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
        function isDateBeforeToday(date) {
            return new Date(date.toDateString()) < new Date(new Date().toDateString());
        }

        const day = Number(birthdate.substring(0, 2));
        const month = Number(birthdate.substring(3, 5));
        const year = Number(birthdate.substring(6));
        const beforeToday = isDateBeforeToday(new Date(year, month, day));
        //start checking
        if (this.state.touched.birthdate && !birthdateRegex.test(birthdate)) {
            errors.birthdate = "Invalid format";
        } else if (!beforeToday) {
            errors.birthdate = 'The date must before today';
        } else { errors.birthdate = ''; }

        if (this.state.touched.telnum && isNaN(telnum)) {
            errors.telnum = "Tel number only contains digits";
        } else if (this.state.touched.telnum && !(telnum.length === 10 || telnum.length === 11)) {
            errors.telnum = "Tel number length must be 10 or 11 in Malaysia";
        } else errors.telnum = '';

        if (this.state.touched.query && (query.split(/[\s,]+/).filter(x => (x === 'Jalan' || x === 'Lorong')).length !== 1 ||
            query.split(/[\s,]+/).filter(x => (x === 'Taman')).length !== 1 ||
            query.split(/[\s,]+/).filter(x => x.match(/\b\d{5}\b/g)).length !== 1))
            errors.query = "Living Address should contain Jalan, Taman and Poscode(5 digit)";
        else errors.query = '';
        return errors;
    }
    render() {
        const { gender, birthDate, telnum, query, sport, music, food, movie, book } = this.props;
        const { handleInputChange, handleSubmit } = this.props;
        console.log("this.props.currentStep: " + this.props.currentStep);
        if (Number(this.props.currentStep) !== 2) {
            return (
                <></>
            );
        }
        // console.log("Now Step 2");
        const errors = this.validatePage2(birthDate, telnum, query);
        return (
            <div className="container">
                <div className='col-12 col-md-6 whitesmoke' id="registerForm">
                    <div className='col-12 text-center'>
                        <h4>Complete your profile</h4>
                    </div>

                    <Form>
                        <FormGroup row>
                            <Label htmlFor="gender" md={3}>Gender</Label>
                            <Col md={{ size: 3 }}>
                                <Input type="select" name="gender"
                                    value={gender}
                                    onChange={handleInputChange}>
                                    <option>Male</option>
                                    <option>Female</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="birthDate" md={3}>Birthdate(E.g. 01/03/2000)</Label>
                            <Col md={8}>
                                <Input type="text" id="birthDate" name="birthDate"
                                    placeholder="DD/MM/YYYY"
                                    value={birthDate}
                                    // valid={errors.birthdate === ''}
                                    invalid={errors.birthdate !== ''}
                                    onBlur={this.handleBlur('birthdate')}
                                    onChange={handleInputChange} />
                                <FormFeedback>{errors.birthdate}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="telnum" md={3}>Contact Tel.</Label>
                            <Col md={8}>
                                <Input type="tel" id="telnum" name="telnum"
                                    placeholder="0112223333"
                                    value={telnum}
                                    // valid={errors.telnum === ''}
                                    invalid={errors.telnum !== ''}
                                    onBlur={this.handleBlur('telnum')}
                                    onChange={handleInputChange} />
                                <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="livingAddress" md={3}>Living Address</Label>
                            <Col md={8}>
                                <Input type="textarea" id="query" name="query"
                                    rows="6"
                                    placeholder="must contains Jalan/Lorong, Taman, Postcode"
                                    value={query}
                                    // valid={errors.query === ''}
                                    invalid={errors.query !== ''}
                                    onBlur={this.handleBlur('query')}
                                    onChange={handleInputChange}>
                                </Input>
                                <FormFeedback>{errors.query}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <Interests
                            handleInputChange={handleInputChange}
                            sport={sport}
                            music={music}
                            food={food}
                            movie={movie}
                            book={book} />

                        <FormGroup row className='col-12'>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Link to="/find">
                                    <Button type="submit" color="primary"
                                        onClick={(event) => {
                                            handleSubmit(birthDate, telnum, query,event);
                                        }}>
                                        Let's Start
                                    </Button>
                                </Link>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>

        );
    }
}

export default SignUpStep2;