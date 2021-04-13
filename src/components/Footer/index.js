import React from 'react';
import codic from './../../assets/codic.jpg'
import './styles.scss';


const Footer = props => {
    return(
       <footer className="footer" style={{
        backgroundImage: `url(${codic})`
      }}>
           <div className="wrap">
            CODIC 2021
           </div>
       </footer>
    );
}

export default Footer;