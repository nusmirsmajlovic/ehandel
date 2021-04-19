import React from 'react';
import { connect} from 'react-redux';
import './styles.scss';
import Logo from './../../assets/codic-logo.jpg';
import { Link } from 'react-router-dom';
import {auth} from './../../firebase/utils';



const Header = props => {
    const {currentUser} = props;
    return (
        <header className="header" >
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

  const mapStateToProps = ({ user }) => ({
      currentUser: user.currentUser
  });

export default connect(mapStateToProps, null) (Header);