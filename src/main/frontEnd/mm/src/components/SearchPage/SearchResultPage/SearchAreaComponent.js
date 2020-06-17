import React, { Component } from 'react';
import { Form, FormGroup, Label, Button, CustomInput, Input } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import BottomNav from '../../BottomNavComponent';

class SearchArea extends Component {

  render() {
    const { minDist, isLoggedIn } = this.props;
    const { handleInputChange, onValueChange, onSubmitSearch } = this.props;
    console.log("The user is logged in: " + isLoggedIn);
    console.log(`The minimum distance now set to ${minDist}`);
    // if (!this.props.isLoggedIn) {
    //   return (
    //     <Redirect to="/login" />
    //   );
    // }
    return (

        <div className="row light-orange justify-content-center">
          <div className="col-12 d-flex justify-content-center">
            <Form className="" onSubmit={onSubmitSearch}>

              <FormGroup row>

                <div className="col-12 d-flex justify-content-center">
                  <Label for="minDist">{`Maximum Cover Radius in km`}</Label>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <Label for="minDist">{`(Each step below represent 100km)`}</Label>
                </div>

                <div className="col-2 pr-0 py-2 d-flex flex-row-reverse"><span>0</span></div>

                <div className="col-8 py-3">
                  <CustomInput 
                    type="range" 
                    id="minDist" 
                    name="minDist" 
                    min={0} 
                    max={1000} 
                    step={100} 
                    value={minDist} 
                    onChange={handleInputChange}>
                  </CustomInput>
                </div>

                <div className="col-2 p-0 py-3"><span>1000</span></div>
              </FormGroup>

              <FormGroup tag="fieldset">
                <div className="col-12 d-flex justify-content-between">
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="radio" value={"Male"} onChange={onValueChange}/>Male
                  </Label>
                  </FormGroup>
                  <FormGroup check >
                    <Label check>
                      <Input type="radio" name="radio" value={"Female"} onChange={onValueChange}/>{' '}Female
                  </Label>
                  </FormGroup>
                  <FormGroup check >
                    <Label check>
                      <Input type="radio" name="radio" value={"Both"} onChange={onValueChange}/>{' '}Both
                  </Label>
                  </FormGroup>
                </div>
              </FormGroup>

              <FormGroup row>
                <div className="col-12 d-flex justify-content-center">
                    <Button type="submit">Search</Button>
                </div>
              </FormGroup>

            </Form>
          </div>
        </div>
    );
  }
}

export default SearchArea;