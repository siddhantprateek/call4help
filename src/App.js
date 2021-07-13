import logo from "./logo/CH.png";
import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import About from "./components/about/about.components"
import Login from "./components/userLogin/login.components"
import Availability from "./components/Available/avail.components";
import Home from './components/Home/Home.components';

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
      <header>
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
      </header>

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
