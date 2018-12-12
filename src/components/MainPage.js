import React from 'react';
import './MainPage.css';
import {Header} from './content/header/Header';
import {Slider} from './content/slider/Slider';
import {Footer} from './content/footer/Footer';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const MainPage = ()=>{
    return(
        <div className="full_main_page">
            <div className="main_inner">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                    <Header/>
                    <Slider/>
                    <Footer/>
                    </div>
                </div>
            </div>
        </div>
    )
};

