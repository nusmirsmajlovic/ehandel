import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions'; 

import WithAuth from './hoc/withAuth';


//layout
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

//pages
import Recovery from './pages/Recovery'
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login/';
import Dashboard from './pages/Dashboard';
import KontaktaOss from "./pages/kontaktaOss/kontaktaOss";
import OmOss from "./pages/omOss/omOss";
import './default.scss';


const App = props => {

  const dispatch = useDispatch();
   useEffect(() =>{
       dispatch(checkUserSession());

   }, []);

  return (
      <div className="App">
       <Switch>
          <Route exact path="/" render={()=>(
            <HomepageLayout>
              <Homepage/>
            </HomepageLayout>
          )}/>
          <Route path="/registration"
          render={()=>(
            <MainLayout>
              <Registration/>
            </MainLayout>
          )} />
           <Route path="/login"
           render={()=>  (
            <MainLayout>
              <Login/>
            </MainLayout>
          )} />
          <Route path="/recovery" render={() =>(
            <MainLayout>
              <Recovery/>
            </MainLayout>
          )}/>
          <Route path="/dashboard" render={() =>(
            <WithAuth>
               <MainLayout>
                 <Dashboard/>
               </MainLayout>
            </WithAuth>
          )}/>
                <Route path="/kontakta-oss"
           render={()=> currentUser ? <Redirect to="/"/> : (
            <MainLayout>
              <KontaktaOss/>
            </MainLayout>
          )} />
          <Route path="/om-Oss"
           render={()=>  (
            <MainLayout>
              <OmOss/>
            </MainLayout>
          )} />
        </Switch>
      </div>
    );
  }



export default App;
