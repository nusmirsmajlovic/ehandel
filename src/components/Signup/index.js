import React, {Component} from 'react';
import './styles.scss';

import {auth, handleUserProfile} from './../../firebase/utils';

import AuthWrapper from './../AuthWrapper';
import Forminput from './../forms/Forminput';
import Button from './../forms/Button';

const initialState = {
    dysplayName:'',
    email:'',
    password:'',
    confirmPassword:'',
    errors:[]
};


class Signup extends Component{
    constructor(props) {
        super(props);
        this.state={
            ...initialState
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange (e){
        const {name, value} = e.target;
        this.setState({
            [name]:value
        });
    }

    handleFormSubmit = async event =>{
        event.preventDefault();
        const {dysplayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword ){
        const err = ['Password dont match'];
        this.setState({
            errors:err
        });
        return;
        }

        try {

          const { user } = await auth.createUserWithEmailAndPassword(email, password);

          await handleUserProfile(user, {dysplayName});

          this.setState({
              ...initialState
          });

        }
        catch(err){
            //console.log(err);
        }
    }

    render(){
        const {dysplayName, email, password, confirmPassword, errors} = this.state; 
          
        const configAuthWrapper = {
            headline:'Ragistration'
        };

        return(
            <AuthWrapper {...configAuthWrapper}>

                {errors.length > 0 &&(
                        <ul>
                            {errors.map((err, index) =>{
                                return(
                                    <li key={index}>
                                        {err}
                                    </li>
                                )
                            })}
                        </ul>
                    )}

                <div className="formWrap">  
                    <form onSubmit={this.handleFormSubmit}>
                        
                        <Forminput
                           type="text"
                           name="dysplayName"
                           value={dysplayName}
                           placeholder="Full name"
                           onChange={this.handleChange}
                           className="input_field"
                        />
                        <Forminput
                           type="email"
                           name="email"
                           value={email}
                           placeholder="Email"
                           onChange={this.handleChange}
                           className="input_field"
                        />
                        <Forminput
                           type="password"
                           name="password"
                           value={password}
                           placeholder="Password"
                           onChange={this.handleChange}
                           className="input_field"
                        />
                        <Forminput
                           type="password"
                           name="confirmPassword"
                           value={confirmPassword}
                           placeholder="Confirm Password"
                           onChange={this.handleChange}
                           className="input_field"
                        />
                        <Button type="submit">
                            Register
                        </Button>
                       

                    </form>
                    </div>
            </AuthWrapper>
        );
    }
}

export default Signup;