import React, {Component} from 'react';
import './Topreview.css'
import topreview from '../Pic/topReviewPic1.jpg';

const Topreview = (props) => {
    return (
        <div className = "topreview">
                <img className ="picture_topreview" src={props.bgImage}></img>
            <div className = "background">
               
            </div>
            <div className= "left_div_topreview">
                    <div className="name_topreview">{props.name}</div>
                    <div className="menu_topreview">{props.menu}</div>
                </div>
            <div className= "right_div_topreview">{props.score}</div>
        </div>
    )
       
}
export default Topreview;
