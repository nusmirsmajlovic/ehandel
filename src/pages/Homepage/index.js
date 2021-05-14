import React from "react";
import Directory from "./../../components/Directory";
import "./styles.scss";
import BG from './../../assets/BG.jpg';


const Homepage = (props) => {
  return (
    <section className="homepage" style={{backgroundImage: `url(${BG})`}}>
      {/*<Directory /> */}
      <div>
          <h1 id="MY_h2">Codic Online Shop</h1>
          <p id="homePage_p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        
        <button id="TILL_Producter">
            TILL VÅRA PRODUKTER
        </button>   
    </section>
  );
};

export default Homepage;
