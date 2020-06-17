import React, { Component } from 'react';
import { Form, FormGroup, FormFeedback, Col, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Interests from './Interests';

class SignUpStep2 extends Component {

    render() {
        const { gender, birthdate, telnum, query } = this.props;
        const { validatePage2, handleBlur, handleInputChange, handleSubmit } = this.props;
        console.log("this.props.currentStep: " + this.props.currentStep);
        if (Number(this.props.currentStep) !== 2) {
            console.log("Not my turn");
            return (
                <></>
            );
        }
        console.log("Now my turn!");
        const errors = validatePage2(birthdate, telnum, query);
        return (
            <div className="container">
                <div className='col-12 col-md-6' id="registerForm">
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
                            <Label htmlFor="birthdate" md={3}>Birthdate(E.g. 01/03/2000)</Label>
                            <Col md={8}>
                                <Input type="text" id="birthdate" name="birthdate"
                                    placeholder="DD/MM/YYYY"
                                    value={birthdate}
                                    valid={errors.birthdate === ''}
                                    invalid={errors.birthdate !== ''}
                                    onBlur={handleBlur('birthdate')}
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
                                    valid={errors.telnum === ''}
                                    invalid={errors.telnum !== ''}
                                    onBlur={handleBlur('telnum')}
                                    onChange={handleInputChange} />
                                <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>

                        {console.log(errors.query)}

                        <FormGroup row>
                            <Label htmlFor="livingAddress" md={3}>Living Address</Label>
                            <Col md={8}>
                                <Input type="textarea" id="query" name="query"
                                    rows="6"
                                    placeholder="must contains Jalan/Lorong, Taman, Postcode"
                                    value={query}
                                    valid={errors.query === ''}
                                    invalid={errors.query !== ''}
                                    onBlur={handleBlur('query')}
                                    onChange={handleInputChange}>
                                </Input>
                                <FormFeedback>{errors.query}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <Interests handleInputChange={handleInputChange}/>

                        <FormGroup row className='col-12'>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Link to="/find">
                                    <Button type="submit" color="primary"
                                        onClick={() => {
                                            handleSubmit();
                                            // this.validate(this.state.birthdate, this.state.telnum, this.state.query);
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