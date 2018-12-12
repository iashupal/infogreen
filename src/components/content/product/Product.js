import React from 'react';
import './Product.css';

export const Product=()=>{
    return(
       <div className="product">
           <div className="product_inner">
               <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4"></div>
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="tip-heading">
                            <i class="fa fa-heart" aria-hidden="true"></i>
                            <h4>Events</h4>
                        </div>
                        {/* <img src="" alt=""/> */}
                        <div className="tip-img"></div>
                    </div>
                </div>
            </div>
        </div>
      
    )
}