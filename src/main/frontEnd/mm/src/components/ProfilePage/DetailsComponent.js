import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup } from 'reactstrap';
import OneDetail from './OneDetailComponent';

class Info extends Component {
  render() {
    const user = this.props.user;
    return (
      <>
        <div className="row orange">
          <div className="col-12 pt-2 d-flex justify-content-between">
            <h4>Basic Info</h4>
          </div>
          <div className="col-12">
            <OneDetail item={`Gender`}value={user.gender}/>
            <OneDetail item={`Age`}value={user.age}/>
            <OneDetail item={`Contact`}value={user.contact}/>
            <OneDetail item={`Address`}value={user.address}/>
          </div>
          <div className="col-12">
            <OneDetail item={`Favorite Sport`}value={user.interests.favSport}/>
            <OneDetail item={`Favorite Music`}value={user.interests.favMusic}/>
            <OneDetail item={`Favorite Food`}value={user.interests.favFood}/>
          </div>
        </div>
      </>
    );
  }
}

export default Info;