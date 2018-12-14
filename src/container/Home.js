import React from 'react';
import './Home.css';
import {MainPage} from '../components/MainPage';
import {ProdSpec} from '../components/productSpecification/ProdSpec';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
export const Home = ()=>{
    return(
        <div className="main-page">
        <Router>
            
            <MainPage/>
                {/* <Route path={"mainpage"} component={MainPage} /> */}
                {/* <Route path={"prodSpec"} component={ProdSpec} /> */}
        </Router>
        
        </div>
    )
}