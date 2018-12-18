import React from 'react';
import './Home.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {MainPage} from '../components/MainPage';
// import {Route} from '../components/content/Route';
import {ProdSpec} from '../components/content/ProdSpec';;

export const Home = ()=>{
    return(
        <div className="main-page">
        <Router>
            
            <MainPage/>
            {/* <Route/> */}
            {/* <ProdSpec/> */}
                {/* <Route path={"mainpage"} component={MainPage} /> */}
                {/* <Route path={"prodSpec"} component={ProdSpec} /> */}
        </Router>
        
        </div>
    )
}