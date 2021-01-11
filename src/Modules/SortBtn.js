import React, {Component} from 'react';
import './SortBtn.css'

const SortBtn = (props) => {
    return (
        <div className = "SortBtn">
            <img className = "picture_sortbtn" src={props.bgImage} ></img>
        </div>
    )
       
}
export default SortBtn;