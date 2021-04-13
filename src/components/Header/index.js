import React from 'react';
import './styles.scss';
import Logo from './../../assets/codic-logo.png';
import { Link } from 'react-router-dom';
import {auth} from './../../firebase/utils';
import codic from './../../assets/codic.jpg';


const Header = props => {
    const {currentUser} = props;
    return (
        <header className="header" style={{
            backgroundImage: `url(${codic})`
          }}>
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                    <img src={Logo} alt="Codic" />
                    </Link>
                </div>

                <div className="callToActions">

                    {currentUser && (
                        <ul>
                            <li>
                                <span onClick={() => auth.signOut()}>
                                    LogOut
                                </span>
                            </li>
                        </ul>
                    )}

                    {!currentUser &&(
                          <ul>
                          <li>
                              <Link to="/registration">
                                  REGISTER
                               </Link>
                          </li>
                          <li>
                              <Link to="/login">
                                   LOGIN
                              </Link>
                           </li>
                     </ul> 
                    )}
                  
                </div>
            </div>

        </header>
    );

};

Header.defaultProps = {
    currentUser: null
  };

export default Header;