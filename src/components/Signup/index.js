import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetAllAuthForms, signUpUser } from './../../redux/User/user.actions';
import './styles.scss';



import AuthWrapper from './../AuthWrapper';
import Forminput from './../forms/Forminput';
import Button from './../forms/Button';

const mapState = ({ user }) => ({
    signUpSuccess: user.signUpSuccess,
    signUpError: user.signUpError
  });

const Signup  = props =>{
    const { signUpSuccess, signUpError} = useSelector(mapState);
    const dispatch = useDispatch();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErros] = useState([]);

    useEffect(()=>{
        if (signUpSuccess){
           reset();
           dispatch(resetAllAuthForms());
           props.history.push('/');
        }

    }, [signUpSuccess]);

    useEffect(()=>{
        if(Array.isArray(signUpError) && signUpError.length >0) {
            setErros(signUpError);
        }

    }, [signUpError]);

    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErros([]);
    };

    const handleFormSubmit = event =>{
        event.preventDefault();
        dispatch(signUpUser({
            displayName,
            email,
            password,
            confirmPassword
        }));
       

        // if(password !== confirmPassword ){
        // const err = ['Password dont match'];
        // setErros(err);
        // return;
        // }

        // try {

        //   const { user } = await auth.createUserWithEmailAndPassword(email, password);

        //   await handleUserProfile(user, {displayName});
        //   reset();
        //   props.history.push('/');
        // }
        // catch(err){
        //     //console.log(err);
        // }
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
                           name="dysplayName"
                           value={displayName}
                           placeholder="Full name"
                           handleChange={e => setDisplayName(e.target.value)}
                        />
                        <Forminput
                           type="email"
                           name="email"
                           value={email}
                           placeholder="Email"
                           handleChange={e => setEmail(e.target.value)}
                        />
                        <Forminput
                           type="password"
                           name="password"
                           value={password}
                           placeholder="Password"
                           handleChange={e => setPassword(e.target.value)}
                        />
                        <Forminput
                           type="password"
                           name="confirmPassword"
                           value={confirmPassword}
                           placeholder="Confirm Password"
                           handleChange={e => setConfirmPassword(e.target.value)}
                        />
                        <Button type="submit">
                            Register
                        </Button>
                       

                    </form>
                    </div>
            </AuthWrapper>
        );
    }


export default withRouter(Signup);
