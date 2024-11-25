import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../src/assets/global.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myloginpage from './modules/auth/Myloginpage';
import Myforgetpage from './modules/auth/Myforgetpage';
import Myregistorpage from './modules/auth/Myregistorpage';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Myhomepage from './modules/dashboard/Myhomepage';
import Profilepage from './modules/dashboard/Profilepage';
import Myeditreord from './modules/dashboard/Myeditreord';
import Myshopping from './modules/shopping/Myshopping';
import Adminshoppage from './modules/shopping/Adminshoppage';
import Fruitesedit from './modules/shopping/Fruitesedit';
import Fruitadd from './modules/shopping/Fruitadd';
import Fruitdetails from './modules/shopping/Fruitdetails';
import Aboutpage from './modules/shopping/Aboutpage';
import Myreduxpage from './../src/modules/shopping/reducers/Myreduxpage';
import Myactions from './modules/shopping/reducers/Myactions';
import {mystore} from './modules/shopping/reducers/Mystore';
import { Provider } from "react-redux";
import Carousel from './shares/Carousel';
import Graphanual from './modules/shopping/Graphanual';
import Userloginpage from './modules/shopping/Useroginpage'
import Userstatuspage from './modules/shopping/Userstatuspage';
import Alluserlist from '../src/modules/shopping/Alluserlist'
import ContactUs from './modules/shopping/Mycontactpage';
import Mytexteditor from './modules/shopping/Mytexteditor';
import FeedbackList from './modules/shopping/Feedbacklist';
import Logoutpage from '../src/modules/shopping/Logoutpage';
import MyProfile from './modules/shopping/MyProfile';
import ProductCard from './modules/shopping/ProductCard';
import VegetableAdd from './modules/shopping/VegetableAdd';
import ProductPage from './modules/shopping/Productpage';
import IndiaMap from './modules/dashboard/indiamap/IndiaMap';
import DataDisplay from './modules/dashboard/indiamap/DataDisplay';
import ParentComponent from './modules/dashboard/indiamap/ParentComponent';
import PrintDetails from './modules/shopping/PrintDetails';
import Dreidfruit from './modules/dreidfruitshop/Dreidfruit';

import Driedfruitadd from './modules/dreidfruitshop/Driedfruitadd';
import Receipt from './modules/shopping/Receipt';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={mystore}>
    <BrowserRouter>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}

theme="colored"

/>

      <Routes>
      

        <Route path='' element={<Myloginpage />}></Route>
        <Route path='registor' element={<Myregistorpage/>}></Route>
        <Route path='Myforgetpage' element={<Myforgetpage/>}/>
        <Route path='dashboard' element={<Mylandingpage/>}>
        <Route path='Aboutpage' element={<Aboutpage/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/>
        <Route path='Userloginpage' element={<Userloginpage/>}/>
        <Route path='Userstatuspage' element={<Userstatuspage/>}/>
        <Route path='Alluserlist' element={<Alluserlist/>}/>
        <Route path='PrintDetails' element={<PrintDetails/>}/>
        <Route path='FeedbackList' element={<FeedbackList/>}/>
        <Route path='IndiaMap' element={<IndiaMap/>}/>
        <Route path="DataDisplay" element={<DataDisplay/>} />
        <Route path='ParentComponent' element={<ParentComponent/>}/>
        <Route path='Logoutpage' element={<Logoutpage/>}/>
        <Route path='registor' element={<Myregistorpage/>}></Route>
        <Route path='Carousel' element={<Carousel/>}/>
        <Route path='Graphanual' element={<Graphanual/>}/>
        <Route path='Mytexteditor' element={<Mytexteditor/>}/>
        <Route path='' element={<Myshopping/>}/>
        <Route path='Adminshoppage' element={<Adminshoppage/>}/>
        <Route path='Fruitadd' element={<Fruitadd/>}/>
        <Route path='Dreidfruit' element={<Dreidfruit/>}/>
        <Route path='Driedfruitadd' element={<Driedfruitadd/>}/>
        <Route path='Receipt' element={<Receipt/>}/>


        <Route path='VegetableAdd' element={<VegetableAdd/>}/>
        <Route path='Productpage' element={<ProductPage/>}/>
        <Route path='fruitedit/:id' element={<Fruitesedit/>}/>
        <Route path='Fruitdetails/:id' element={<Fruitdetails/>}/>
        <Route path="redux" element={<Myreduxpage />} />
        <Route path='Myaction' element={<Myactions/>}/>
          <Route path='Users' element={<Myhomepage/>}/>
          <Route path='Vegetables' element={<ProductCard/>}/>
          <Route path='view/:id' element={<Profilepage/>}/>
          <Route path='edit/:id' element={<Myeditreord/>}/>

          <Route path='MyProfile' element={<MyProfile/>}/>
        </Route>
        
      </Routes>

    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
