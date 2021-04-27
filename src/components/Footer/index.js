import React from 'react';
import {Link} from "react-router-dom";

import './styles.scss';


const Footer = props => {
    return(
       <footer className="footer" >
           <div className="footer_link">
               <Link className="footer_a" to="/kontakta-oss">Kontakta oss</Link>
               <Link className="footer_a" to="/om-Oss">Om oss</Link>
               <Link className="footer_a" to="/privacy-policy">Privcay policy</Link>
           </div>
           <div className="wrap">
                Codic Consulting Drottninggatan 38, Göteborg, Västra Götalands län, 411 07, Sverige
           </div>
       </footer>
    );
}

export default Footer;