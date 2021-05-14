import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import {signOutUserStart} from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';
import Logo from './../../assets/codic-logo.png';



const mapState = ( state ) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
});


const Header = props => {
    const dispatch = useDispatch();
    const {currentUser, totalNumCartItems} = useSelector(mapState);

const signOut = () =>{
    dispatch(signOutUserStart());
};

    return (
        <header className="header" >
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Codic" />
                    </Link>
                </div>

                <div className="header_nav_center">
                    <span><Link to="/">Home</Link></span>
                    <span><Link to="/search">Search</Link></span>
                </div>

                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to="/cart">
                                Your Cart ({totalNumCartItems})
                            </Link>
                        </li>
                            {currentUser && [
                        
                                <li>
                                <Link to="/dashboard">
                                    My Account
                                </Link>
                                </li>,
                                <li>
                                    <span onClick={() => signOut()}>
                                        LogOut
                                    </span>
                                </li>
                        
                            ]}
                            {!currentUser &&[
                                
                                    <li>
                                    <Link to="/registration">
                                        REGISTER
                                    </Link>
                                    </li>,
                                <li>
                                    <Link to="/login">
                                        LOGIN
                                    </Link>
                                </li>
                            
                            ]}

                        </ul>

                </div>
            </div>

        </header>
    );

};

Header.defaultProps = {
    currentUser: null
  };

  

export default Header;