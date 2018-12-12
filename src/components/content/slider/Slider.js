import React from 'react';
// import ReactBootstrapCarousel from '../../../../node_modules/react-bootstrap-carousel';
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import '../../../../node_modules/react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import './Slider.css';
import la from '../../../assets/images/la.jpg';
// import MOMGUIDE_LOGO_WHITE from '../../../assets/images/MOMGUIDE_LOGO_WHITE.png';


export const Slider = ()=>{
    return (
        <div className="slider">
            <div className="slider-inner">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
                    </ol>
                    <div className="carousel-item">
                        <img src={require('../../../assets/images/la.jpg')} className="" alt="First Slide" />
                    </div> 
                    
                    <div className="carousel-item">
                        <img src={require('../../../assets/images/la.jpg')} className="" alt="Second Slide"/>
                    </div> 
                    <div className="carousel-item">
                        <img src={require('../../../assets/images/la.jpg')} className="" alt="Third Slide"/>
                    </div> 
                </div>
                <a href="#carouselExampleIndicators" className="carousel-control-prev slider_prev" role="button" data-slide="prev">
                    <span carousel="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a href="#carouselExampleIndicators" className="carousel-control-prev slider_next" role="button" data-slide="next">
                    <span carousel="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>   
        </div>    
 
       
    );

};