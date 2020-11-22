import { Restaurant } from '@material-ui/icons';
import React, {Component} from 'react';
import './Hotdeal.css'
import {Link} from 'react-router-dom'


const Hotdeal = (props) => {
    return (
        <Link to='/about'>
        <div className = "hotdeal">                                
            <img className="img_hotdeal" src={props.bgImage}></img>
            <p className = "res_name_hotdeal">{props.name}</p>
            <p className = "res_content_hotdeal">{props.contents}</p>
        </div>
        </Link>
    )
       
}
export default Hotdeal; 