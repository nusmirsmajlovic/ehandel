import React, {useState} from 'react';
import './styles.scss';

import {auth, handleUserProfile} from './../../firebase/utils';

import AuthWrapper from './../AuthWrapper';
import Forminput from './../forms/Forminput';
import Button from './../forms/Button';

const initialState = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
    errors:[]
};


const  Signup = props =>{
    const [displayName,setDisplayName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const reset = () => {
        setDisplayName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrors([]);
    };
   
     const handleFormSubmit = async event =>{
        event.preventDefault();
        

        if(password !== confirmPassword ){
        const err = ['Password dont match'];
        setErrors(err);
        return;
        }

        try {

          const { user } = await auth.createUserWithEmailAndPassword(email, password);

          await handleUserProfile(user, {displayName});

         reset();

        }
        catch(err){
            //console.log(err);
        }
    }

    
        
          
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
                    <form onSubmit={handleFormSubmit}>
                        
                        <Forminput
                           type="text"
                           name="displayName"
                           value={displayName}
                           placeholder="Full name"
                           handleChange={e => setDisplayName(e.target.value)}
                           className="input_field"
                        />
                        <Forminput
                           type="email"
                           name="email"
                           value={email}
                           placeholder="Email"
                           handleChange={e => setEmail(e.target.value)}
                           className="input_field"
                        />
                        <Forminput
                           type="password"
                           name="password"
                           value={password}
                           placeholder="Password"
                           handleChange={e => setPassword(e.target.value)}
                           className="input_field"
                        />
                        <Forminput
                           type="password"
                           name="confirmPassword"
                           value={confirmPassword}
                           placeholder="Confirm Password"
                           handleChange={e => setConfirmPassword(e.target.value)}
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


export default Signup;