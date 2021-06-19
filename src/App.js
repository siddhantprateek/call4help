import image_1 from "./img/content1.png";
import image_2 from "./img/content2.png";
import image_3 from "./img/content3.png";
import image_4 from "./img/content4.png";
import logo from "./logo/CH.png";
import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import About from "./about/about"
import Login from "./user/Login"
import Availability from "./Component/Avail";
// import About from "./about/about";

export default function App() {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })

  return (
    <Router>
    <div className="App">
      {/* <div class="cursor-follower"></div> */}
      
      <div className="main">
        <div className="logo">
          <NavLink to="/"><img src={logo} alt="ch-logo" /></NavLink>
        </div>

        <nav className="nav-bar">
          <ul className="nav-container">
            <li>
              <NavLink  to="/About">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/Availability">Availability</NavLink>
            </li>
            <li>
              <NavLink to="/Login">Sign Up | login</NavLink>
            </li>
          <div className="cursor" style={{
                  left: cursorX + 'px',
                  top: cursorY + 'px'
          }}>
          </div>
          </ul>
        </nav>

        
      </div>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Availability">
            <Availability />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}


function Home(){
  return(
    <div className="img-container">
          <img 
          src={image_1} className="img_1" alt="" />
          <img 
          src={image_2} className="img_2" alt="" />
          <img 
          src={image_3} className="img_3" alt="" />
          <img 
          src={image_4} className="img_4" alt="" />
        </div>

  );
}