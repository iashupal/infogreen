import React from 'react';
import './Home.css';
import {MainPage} from '../components/MainPage';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
export const Home = ()=>{
    return(
        <div className="main-page">
        <MainPage/>
        </div>
    )
}