import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

const HomepageLayout = props => {
    return (
        <div className="fulHeight" style={{margin:"0"}}>
            <Header {...props} />
            {props.children}
            <Footer/>
        </div>
    );
};

export default HomepageLayout;