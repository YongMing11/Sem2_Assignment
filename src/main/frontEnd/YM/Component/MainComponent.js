import React,{Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Login from './LoginComponent.js';
import SignUp from './SignUpComponent.js';
import Register from './RegisterComponent.js';

class Main extends Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password:''
        };
    }
    render(){
        return(
            <div>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/signup/register" component={Register} />
                <Redirect to="/login" component={Login} />
            </Switch>
            </div>
        );
    }
}

export default Main;