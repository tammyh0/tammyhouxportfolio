import React from 'react'
import './css/App.css'
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"


function App() {
  return <BrowserRouter>
    <div className="App">
      <header className="App-header">

        <div className="App-logo">
          <Link exact to="/">TAMMY HO</Link>
        </div>

        <div className="Nav-bar">
            <NavLink exact className="Work-link" to="/" activeStyle={{
              color: "#000000",
              opacity: "0.8",
              fontWeight: "600"}}>Work
            </NavLink>

            <NavLink className="About-link" to="/about" activeStyle={{
              color: "#000000",
              opacity: "0.8",
              fontWeight: "600"}}>About
            </NavLink>

            <NavLink className="Resume-link" to="/resume" activeStyle={{
              color: "#000000",
              opacity: "0.8",
              fontWeight: "600"}}>Resume
            </NavLink>
        </div>
      </header>

      <footer className="Footer">
        <ScrollUpButton style={{backgroundColor: "none", fill: "#999999"}}/>

        <div className="Social-links">
          <a href="mailto:tammyh0@uw.edu?Subject=Hi%20Tammy!" target="_top">Email</a>
          <span>tammyh0@uw.edu //</span>
          <a href="https://www.linkedin.com/in/ho-tammy/" target="_blank">LinkedIn</a> 
          <span>//</span>
          <a href="https://medium.com/@tammyh0" target="_blank">Medium</a> 
        </div>

        <div className="Copyright">
          Built from scratch with React ✩ Updated March 2020.
        </div>

        <div className="Bottom-bar"></div>
      </footer>

    </div>
  );
  </BrowserRouter>
}

export default App;
