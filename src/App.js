import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';

import AdminToolbar from './components/AdminToolbar';

import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

//layout
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';

//pages
import Recovery from './pages/Recovery'

import Homepage from './pages/Homepage';
import Search from "./pages/Search";
import Registration from './pages/Registration';
import Login from './pages/Login/';
import Dashboard from './pages/Dashboard';
import KontaktaOss from "./pages/kontaktaOss/kontaktaOss";
import OmOss from "./pages/omOss/omOss";
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import PrivacyPolicy from "./pages/privacyPolicy/privacyPolicy"
import './default.scss';


const App = props => {

  const dispatch = useDispatch();
   useEffect(() =>{
       dispatch(checkUserSession());

   }, []);

  return (
      <div className="App" style={{minHeight:"100vh"}}>
        <AdminToolbar/>
        <Switch>
          <Route exact path="/" render={()=>(
            <HomepageLayout>
              <Homepage/>
            </HomepageLayout>
          )}/>
          <Route path="/search" render={() =>(
            <MainLayout>
            <Search/>
            </MainLayout>
          )} />
           <Route path="/search/:filterType" render={() => (
          <MainLayout>
            <Search />
          </MainLayout>
        )} />
        <Route path="/product/:productID" render={() => (
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        )} />
        <Route path="/cart" render={() => (
          <MainLayout>
            <Cart />
          </MainLayout>
        )} />
          <Route path="/registration" render={()=>(
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
          <Route path="/kontakta-oss"render={()=>  (
            <MainLayout>
              <KontaktaOss/>
            </MainLayout>
          )} />
          <Route path="/om-Oss"render={()=>  (
            <MainLayout>
              <OmOss/>
            </MainLayout>
          )} />
           <Route path="/privacy-policy"
           render={()=> (
            <MainLayout>
              <PrivacyPolicy/>
            </MainLayout>
          )} />
         <Route path="/dashboard" render={() => (
          <WithAuth>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </WithAuth>
        )} />
        
        <Route path="/admin" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        )} />
        </Switch>
      </div>
    );
  }



export default App;
