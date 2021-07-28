import React from 'react';
import image_1 from "../img/content1.png";
import image_2 from "../img/content2.png";
import image_3 from "../img/content3.png";
import image_4 from "../img/content4.png";
import './home.style.css'

export default function Home(){
    return(
    <div className="images">
      <ul>
        <li><img
          src={image_1} className="img_1" alt="" /></li>
        <li><img
          src={image_2} className="img_2" alt="" /></li> 
        <li><img
          src={image_3} className="img_3" alt="" />
        </li>
        <li><img
          src={image_4} className="img_4" alt="" />
        </li>
      </ul>
    </div>
    );
}