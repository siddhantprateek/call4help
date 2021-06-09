import image_1 from "./img/content1.png";
import image_2 from "./img/content2.png";
import image_3 from "./img/content3.png";
import image_4 from "./img/content4.png";
import './App.css';
import React, { useState } from "react";
// import About from "./about/about";

function App() {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })

  return (
    <div className="App">
      {/* <div class="cursor-follower"></div> */}
      <div className="main">
        <div className="logo">
          <img src="" alt="" />
        </div>
       

        <div className="nav-bar">
          <ul className="nav-container">
            <li>
              <a  href="@">About Us</a>
            </li>
            <li>
              <a href="@">Availability</a>
            </li>
            <li>
              <a href="@">Sign Up | login</a>
            </li>
          <div className="cursor" style={{
                  left: cursorX + 'px',
                  top: cursorY + 'px'
          }}>
          </div>
          </ul>
        </div>

        <div className="img-container">
          <img src={image_1} className="img_1" alt="" />
          <img src={image_2} className="img_2" alt="" />
          <img src={image_3} className="img_3" alt="" />
          <img src={image_4} className="img_4" alt="" />
        </div>
      </div>
    </div>

  );
}

export default App;
