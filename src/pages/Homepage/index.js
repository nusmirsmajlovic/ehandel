import React from "react";
import Directory from "./../../components/Directory";
import "./styles.scss";
import BG from './../../assets/BG.jpg';


const Homepage = (props) => {
  return (
    <section className="homepage" style={{backgroundImage: `url(${BG})`}}>
      <Directory />
    </section>
  );
};

export default Homepage;
