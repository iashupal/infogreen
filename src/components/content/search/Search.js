import React from 'react';
import './Search.css';

export const Search =()=>{
    return(
        <div className="container search-div">
            <div className="search_heading">
                <h3>Search Heading</h3>
            </div>
            <div className="search_box">
                <input type="text" placeholder="Search"/>
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
    )
}