import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

const MainLayout = props =>{
    return(
       <div>
           <Header {...props}/>
            <div className="main" style={{ margin:"0", width: "100%"}}>
                {props.children}
            </div>
           <Footer/>
       </div>
    );
};

export default MainLayout;