import React from "react";
import {Link} from "react-router-dom";
import Directory from "./../../components/Directory";
import "./styles.scss";
import BG from './../../assets/BG.jpg';


const Homepage = (props) => {
  return (
    <section className="homepage">
      {/*<Directory /> */}
      <div>
          <h1 id="MY_h2">Codic Online Shop</h1>
          <p id="homePage_p"> Har du svårt att hitta utvecklare till din startup eller större verksamhet? Inte så konstigt, då behovet av programmering är större än någonsin. Till din hjälp har du Codic Consulting i Göteborg - ett litet och lyhört IT-konsultbolag med desto större kompetens.
          </p>
        </div>
        
        <Link to="/search" id="locateBtn">
          <button id="TILL_Producter">  
            TILL VÅRA PRODUKTER         
          </button>   
        </Link>   
    </section>
  );
};

export default Homepage;
