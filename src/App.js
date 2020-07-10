import React from 'react'
import './css/App.css'
import './css/Work.css'
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'
import Work from './js/Work'
import About from './js/About'
import Resume from './js/Resume'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"


function App() {
  return <BrowserRouter>
    <div className="Container">
      <header className="Nav-container">

        <div className="Nav-logo">
          <Link exact to="/">TAMMY HO</Link>
        </div>

        <div className="Nav-bar">
            <NavLink exact className="Work-tab" to="/" activeStyle={{
              color: "#000000",
              opacity: "0.8",
              fontWeight: "600"}}>Work
            </NavLink>

            <NavLink className="About-tab" to="/about" activeStyle={{
              color: "#000000",
              opacity: "0.8",
              fontWeight: "600"}}>About
            </NavLink>

            <NavLink className="Resume-tab" to="/resume" activeStyle={{
              color: "#000000",
              opacity: "0.8",
              fontWeight: "600"}}>Resume
            </NavLink>
        </div>
      </header>

      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
          key={location.key}
            timeout={450}
            classNames="fade"
          >
            <Switch>
              <Route path="/" exact component={Work} />
              <Route path="/about" component={About} />
              <Route path="/resume" component={Resume} />


              {/*<Route path="/CocoBot" component={CocoBot} />
              <Route path="/RUMI" component={RUMI} />
              <Route path="/Expedia" component={Expedia} />
              <Route path="/Plantable" component={Plantable} />*/}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />

      <footer className="Footer">
        <ScrollUpButton style={{backgroundColor: "none", fill: "#999999"}}/>

        <div className="Footer-contact">
          <span className="Footer-contact-phrase">Let's Connect!</span>
          <a className="Footer-contact-link" href="mailto:tammyhho98@gmail.com?Subject=Hi%20Tammy!" target="_top">tammyhho98@gmail.com</a>
        </div>

        <p className="Copyright">
          Made with 💟 in Seattle // Updated July 2020
        </p>

      </footer>

    </div>
  
  </BrowserRouter>
}

export default App;
