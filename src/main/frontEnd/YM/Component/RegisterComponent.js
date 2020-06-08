import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {Card, CardImg,Form, FormGroup, FormFeedback,Col,Input,Label,Button} from 'reactstrap';
import history from './History';



class Register extends Component {
    constructor(props){
        super(props);

        this.state={
            picture:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            gender:'',
            birthdate:'',
            telnum:'',
            livingAddress:'',
            sports:'',
            music:'',
            food:'',
            touched:{
                telnum:false,
                livingAddress:false
            }
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.displayPicture=this.displayPicture.bind(this);
    }

    displayPicture(e){
            const reader = new FileReader();
            reader.onload = ()=>{
                if(reader.readyState===2){
                this.setState(
                    {picture: reader.result}
                );
                }
            }
            reader.readAsDataURL(e.target.files[0]);
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

    validate(birthdate,telnum,livingAddress){
        const errors={
            birthdate:'',
            telnum:'',
            livingAddress:''
        }
        if(this.state.touched.birthdate && (birthdate.split('/').filter(x=>(isNaN(x))).length !== 0)){
            errors.birthdate="Invalid format"
        }else{
            errors.birthdate = '';
        }

        if(this.state.touched.telnum && isNaN(telnum)){
            errors.telnum="Tel number only contains digits"
        }else{
            errors.telnum = '';
        }

        if(this.state.touched.livingAddress && (livingAddress.split(/[\s,]+/).filter(x=>(x==='Taman')).length !== 1 ||
        livingAddress.split(/[\s,]+/).filter(x=>x.match(/\b\d{5}\b/g)).length !==1))
            errors.livingAddress = "Living Address should contain Taman and Poscode";
        else{
            errors.livingAddress = '';
        }

        return errors;
    }

    render() {
        const errors = this.validate(this.state.birthdate,this.state.telnum,this.state.livingAddress);

        return (
            <div className="container">
                <div className='col-12 col-md-6' id="registerForm">
                        <div className='col-9'>
                            <h1 id="header">Complete your profile</h1>
                        </div>
                                
                        <Form>

                            <FormGroup row>
                                <Label htmlFor="picture" md={3}>Profile Picture</Label>
                                <Col md={{size: 3}}>
                                    <Card id="img-holder">
                                        <CardImg src={this.state.picture} alt="Profile Picture"></CardImg> 
                                    </Card>
                                    <Input type="file" name="picture"
                                    accept="image/*"
                                    onChange={this.displayPicture}>
                                    </Input>
                                    </Col>
                        
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="gender" md={3}>Gender</Label>
                                <Col md={{size: 3}}>
                                    <Input type="select" name="gender"
                                    value={this.state.gender}
                                    onChange={this.handleInputChange}>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="birthdate" md={3}>Birthdate</Label>
                                <Col md={8}>
                                    <Input type="text" id="birthdate" name="birthdate"
                                        placeholder="DD/MM/YYYY"
                                        value={this.state.birthdate}
                                        valid={errors.birthdate === ''}
                                        invalid={errors.birthdate !== ''}
                                        onBlur={this.handleBlur('birthdate')}
                                        onChange={this.handleInputChange} />                            
                                    <FormFeedback>{errors.birthdate}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="telnum" md={3}>Contact Tel.</Label>
                                <Col md={8}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="0112223333"
                                        value={this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur('telnum')}
                                        onChange={this.handleInputChange} />                            
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="livingAddress" md={3}>Living Address</Label>
                                <Col md={8}>
                                <Input type="textarea" id="livingAddress" name="livingAddress"
                                        rows="6"
                                        placeholder="must contains Taman, Postcode"
                                        value={this.state.livingAddress}
                                        valid={errors.livingAddress === ''}
                                        invalid={errors.livingAddress !== ''}
                                        onBlur={this.handleBlur('livingAddress')}
                                        onChange={this.handleInputChange}></Input>                             
                                <FormFeedback>{errors.livingAddress}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="interest" md={3}>Interests</Label>
                                <Col md={{size: 5}}>
                                    <Input type="select" name="sports"
                                    value={this.state.sports}
                                    onChange={this.handleInputChange}>
                                        <option>--No Fav Sport--</option>
                                        <option>Basketball</option>
                                        <option>Volleyball</option>
                                        <option>Football</option>
                                        <option>Futsal</option>
                                        <option>Badminton</option>
                                        <option>Tennis</option>
                                        <option>Table Tennis</option>
                                        <option>Running</option>
                                        <option>Chess</option>
                                        <option>E-sports</option>
                                        <option>Swimming</option>
                                        <option>Bowling</option>
                                        <option>Not in the list</option>
                                    </Input>
                                </Col>
                                
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 5, offset:3}}>
                                    <Input type="select" name="music"
                                    value={this.state.music}
                                    onChange={this.handleInputChange}>
                                        <option>--No Fav Music--</option>
                                        <option>Alternative</option>
                                        <option>Pop</option>
                                        <option>Rock</option>
                                        <option>Dance/Electronic/House</option>
                                        <option>Soundtracks</option>
                                        <option>Hip-Hop/Rap/Trap</option>
                                        <option>Classical/Opera</option>
                                        <option>R&B</option>
                                        <option>Soul/Blues</option>
                                        <option>Metal</option>
                                        <option>Not in the list</option>

                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 5, offset:3}}>
                                    <Input type="select" name="food"
                                    value={this.props.food}
                                    onChange={this.handleInputChange}>
                                        <option>--No Fav Food--</option>
                                        <option>Fast Food</option>
                                        <option>Hot Pot</option>
                                        <option>Western food</option>
                                        <option>Malay food</option>
                                        <option>Chinese food</option>
                                        <option>Indian food</option>
                                        <option>Dessert</option>
                                        <option>Not in the list</option>

                                    </Input>
                                </Col>
                            </FormGroup>
                            

                            <FormGroup row className='col-12'>
                                <Col md={{size: 10, offset:2}}>
                                    <Button type="submit" color="primary"
                                        onClick={this.handleSubmit}>
                                        Let's Start
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                            
        );
    }
}

export default Register;