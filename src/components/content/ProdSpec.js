import React from 'react';
import './ProdSpec.css';


export class ProdSpec extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="prod_spec">
                <div className="prodspec_container">
                {/* product detail */}
                    <div className="prodspec_inner">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="prod_heading">
                                    <span className="dot"></span>
                                    <h2>Lorem Ipsum</h2>
                                </div>
                                {/* product detail */}
                                <div className="prod_detail">
                                    <div className="prod_upr_img">
                                        <div className="prod_img">
                                            <img className="img-responsive" src={ require('../../assets/images/product1.png') } alt=""/>
                                        </div>
                                    </div>    
                                    <div className="prod_desp">
                                        <div className="prod_name">
                                            <p>Product 1</p>
                                            <h1>Product 1 Specification</h1>

                                        </div>
                                        <div className="prod_ratings">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                        <div className="prod_icons">
                                            <div className="prod_icon_info">
                                                <i class="fa fa-home" aria-hidden="true"></i>
                                                {/* <img src={ require('../../assets/images/home.svg') } alt=""/> */}
                                                <p>Save</p>
                                            </div>
                                            <div className="prod_icon_info">
                                                <i class="fa fa-heart" aria-hidden="true"></i>
                                                {/* <img src={ require('../../assets/images/heart.svg') } alt=""/> */}
                                                <p>Like</p>
                                            </div>
                                            <div className="prod_icon_info">
                                                <i class="fa fa-share-alt"></i>
                                                {/* <img src={ require('../../assets/images/checkPrice.svg') } alt=""/> */}
                                                <p>Check Price</p>
                                            </div>
                                            <div className="prod_icon_info">
                                                <i class="fa fa-share-alt"></i>
                                                {/* <img src={ require('../../assets/images/share.svg') } alt=""/> */}
                                                <p>Share</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                {/* finish product detail */}
                                
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="prod_right_div">
                                    <div className="prod-rt_div_inr">
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <p>Like</p>
                                    </div>
                                    <div className="prod-rt_div_inr-1">
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <p>Like</p>
                                    </div>
                                    <div className="prod-rt_div_inr prod-rt-people">
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        <p>Like</p>
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                        
                                    </div>
                                    <div className="prod-rt_div_inr-1">
                                        
                                        <p>Like</p>
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                    </div>
                                </div>
                                {/* <div className="prod_addn"> */}
                                    <div className="prod_addn_info prod-ingt-info">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                    <h1>Lorem Ipsum</h1>
                                    {/* <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                {/* finish product detIL */}

                {/* PRODUCT specification */}
                <div className="product_table">
                    <div className="prod-table-container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                            <div className="prod_addn">
                                    <div className="prod_addn_info">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                    <h1>Lorem Ipsum</h1>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                    </div>
                                </div>
                            {/* ingredients icons */}
                                <div className="ingr-table">
                                    <div className="container">
                                    <div className="prod-ingr-ctn">
                                    <div className="prod-ingr-upr-div">
                                        <div className="prod-ingr-tbl-name">
                                            <i class="fa fa-heart" aria-hidden="true"></i>
                                            <h1>Lorem Ipsum</h1>
                                        </div>
                                        <div className="prod-ingr-tbl">
                                            <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>S.No</th>
                                                    <th>Ingredients</th>
                                                    <th>Icons</th>
                                                    <th>Description</th>
                                                </tr>
                                                <tr>
                                                    <td>Ab</td>
                                                    <td>
                                                        <p>Icon</p>
                                                        <p>Water</p>
                                                    </td>
                                                    <td>
                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                <td>Ab</td>
                                                    <td>
                                                        <p>Icon</p>
                                                        <p>Water</p>
                                                    </td>
                                                    <td>
                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                <td>Ab</td>
                                                    <td>
                                                        <p>Icon</p>
                                                        <p>Water</p>
                                                    </td>
                                                    <td>
                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                <td>Ab</td>
                                                    <td>
                                                        <p>Icon</p>
                                                        <p>Water</p>
                                                    </td>
                                                    <td>
                                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                            </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                </div>
                            {/* finish ingredients icons */}
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12"></div>
                        </div>
                    </div>
                </div>
                {/* finish product specification */}
                </div>
            </div>
        );
    };
}
