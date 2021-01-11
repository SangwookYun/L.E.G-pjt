import React from 'react';
import './Hotdeal.css'
import {Link} from 'react-router-dom'


const Hotdeal = (props) => {
    return (
        <Link to='/restaurant'>
            <div className = "hotdeal">                                
                <img className="img_hotdeal" src={props.bgImage}></img>
                <p className = "res_name_hotdeal">{props.name}</p>
                <p className = "res_content_hotdeal">{props.contents}</p>
            </div>
        </Link>
    )
       
}
export default Hotdeal; 