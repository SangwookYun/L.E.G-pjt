import React, {Component} from 'react';
import './Hotdeal.css'

const Hotdeal = (props) => {
    return (
        <div className = "hotdeal">
            <div className = "img_hotdeal"></div>
            <p className = "res_name_hotdeal">{props.name}</p>
            <p className = "res_content_hotdeal">{props.contents}</p>
        </div>
    )
       
}
export default Hotdeal;